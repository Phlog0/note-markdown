import path from "path"
import { homedir } from "os"
import { appDirName, fileEncoding, welcomeNoteFilename } from "@shared/constant"
import { ensureDir, readFile, readdir, remove, stat, writeFile } from "fs-extra"
import { TNoteInfo } from "@shared/models"
import { TCloseApp, TCreateNote, TDeleteNote, TGetNotes, TReadNote, TWriteNote } from "@shared/types"
import { dialog } from "electron"
import { isEmpty } from 'lodash'
import welcomeNoteFile from '../../../resources/welcomeNote.md?asset'
// import { mainWindow } from "../mainWindow"

export const getRootDir = () => {
    return path.join(homedir(), "documents", appDirName)
}


export const getNotes: TGetNotes = async () => {
    const rootDir = getRootDir();

    await ensureDir(rootDir)

    const notesFileNames = await readdir(rootDir, {
        encoding: fileEncoding,
        withFileTypes: false,
    })

    const notes = notesFileNames.filter(fileName => fileName.endsWith(".md"));

    if (isEmpty(notes)) {
        console.info("No notes found")
        const content = await readFile(welcomeNoteFile, { encoding: fileEncoding, })
        await writeFile(path.join(rootDir, welcomeNoteFilename), content, { encoding: fileEncoding, })
        notes.push(welcomeNoteFilename)
    }


    return Promise.all(notes.map(getNoteInfoFromFileName))
}


export const getNoteInfoFromFileName = async (fileName: string): Promise<TNoteInfo> => {
    const fileStat = await stat(path.join(getRootDir(), fileName))
    return {
        title: fileName.replace(/\.md$/, ''),
        lastEditTime: fileStat.mtimeMs
    }
}


export const readNote: TReadNote = async (fileName: string) => {
    const rootDir = getRootDir()
    return readFile(path.join(rootDir, `${fileName}.md`), { encoding: fileEncoding })
}


export const writeNote: TWriteNote = async (fileName, content) => {
    const rootDir = getRootDir();
    console.info(`Writing note ${fileName}`)
    return writeFile(path.join(rootDir, `${fileName}.md`), content, { encoding: fileEncoding })

}

export const createNote: TCreateNote = async () => {
    const rootDir = getRootDir();
    await ensureDir(rootDir)
    const { filePath, canceled } = await dialog.showSaveDialog({
        title: `new note`,
        defaultPath: path.join(rootDir, `untitled.md`),
        buttonLabel: "create",
        properties: ['showOverwriteConfirmation'],
        showsTagField: false,
        filters: [{ name: "Markdown", extensions: ["md"] }]
    })
    if (canceled || !filePath) {
        console.info('Note creation canceled')
        return false
    }
    const { name: fileName, dir: parentDir } = path.parse(filePath)

    //rootDir: C:\Users\___\documents\noteMarkdowns 
    //parentDir: C:\Users\___\Documents\noteMarkdowns 

    if (parentDir.toLocaleLowerCase() !== rootDir.toLocaleLowerCase()) {
        await dialog.showMessageBox({
            type: "error",
            title: 'Creation failed',
            message: "All notes must be save in noteMarkdowns"
        })
        return false
    }

    console.info(`creating note: ${filePath}`)
    await writeFile(filePath, "");
    return fileName
}


export const deleteNote: TDeleteNote = async (fileName) => {

    const rootDir = getRootDir();
    const { response } = await dialog.showMessageBox({
        type: "warning",
        title: "Delete note",
        message: "Are u sure?",
        buttons: ["Delete", "Cancel"], //0 delete; 1 cancel
        defaultId: 1,
        cancelId: 1,

    })

    if (response === 1) {
        console.info('Note deletion canceled')
        return false
    }


    console.info(`Deleting note ${fileName}`)

    await remove(path.join(rootDir, `${fileName}.md`))
    return true;

}


