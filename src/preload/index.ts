import { TCloseApp, TCreateNote, TDeleteNote, TFullSize, TGetNotes, THideApp, TMaximizeOrUnmaximize, TReadNote, TWriteNote } from "@shared/types"
import { contextBridge, ipcRenderer } from "electron"

if (!process.contextIsolated) {
  throw new Error(`contextIsolation must be enabled in the BrowserWindow`)
}

try {

  contextBridge.exposeInMainWorld('context', {
    localge: navigator.language,
    getNotes: (...args: Parameters<TGetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<TReadNote>) => ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<TWriteNote>) => ipcRenderer.invoke('writeNote', ...args),
    createNote: (...args: Parameters<TCreateNote>) => ipcRenderer.invoke('createNote', ...args),
    deleteNote: (...args: Parameters<TDeleteNote>) => ipcRenderer.invoke('deleteNote', ...args),
    closeApp: (...args: Parameters<TCloseApp>) => ipcRenderer.send('closeApp', ...args),
    maximizeOrUnmaximize: (...args: Parameters<TMaximizeOrUnmaximize>) => ipcRenderer.send('maximizeOrUnmaximize', ...args),
    hideApp: (...args: Parameters<THideApp>) => ipcRenderer.send('hideApp', ...args),
    fullSize: (...args: Parameters<TFullSize>) => ipcRenderer.send('fullSize', ...args),
  })

} catch (error) {
  console.error(error)


}
