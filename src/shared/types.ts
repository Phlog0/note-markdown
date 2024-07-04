import { BrowserWindow } from "electron/main";
import { NoteContent, TNoteInfo } from "./models";

export type TGetNotes = () => Promise<TNoteInfo[]>
export type TReadNote = (fileName: string) => Promise<NoteContent>
export type TWriteNote = (title: TNoteInfo['title'], content: NoteContent) => Promise<void>
export type TCreateNote = () => Promise<TNoteInfo["title"] | false>
export type TDeleteNote = (title: TNoteInfo['title']) => Promise<boolean>
export type TCloseApp = () => void
export type TMaximizeOrUnmaximize = () => void
export type THideApp = () => void
export type TFullSize = () => void