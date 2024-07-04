import { ElectronAPI } from '@electron-toolkit/preload'
import { TCloseApp, TCreateNote, TDeleteNote, TFullSize, TGetNotes, THideApp, TMaximizeOrUnmaximize, TReadNote, TWriteNote } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string,
      getNotes: TGetNotes,
      readNote: TReadNote,
      writeNote: TWriteNote,
      createNote: TCreateNote,
      deleteNote: TDeleteNote,
      closeApp: TCloseApp,
      maximizeOrUnmaximize:TMaximizeOrUnmaximize,
      hideApp:THideApp,
      fullSize:TFullSize,
    }
  }
}
