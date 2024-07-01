import { ElectronAPI } from '@electron-toolkit/preload'
import { TCreateNote, TDeleteNote, TGetNotes, TReadNote, TWriteNote } from '@shared/types'

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
    }
  }
}
