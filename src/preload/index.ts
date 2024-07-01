import { TCreateNote, TDeleteNote, TGetNotes, TReadNote, TWriteNote } from "@shared/types"
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
  })

} catch (error) {
  console.error(error)


}
