import { NoteContent, TNoteInfo, TNoteInfoContent } from '@shared/models'
import { create } from 'zustand'
import { notesMock } from './mocks'


interface NoteState {
  notes: TNoteInfo[] | null
  selectedNoteIndex: number | null | undefined
  selectedNote: TNoteInfoContent | null | undefined
  setSelectedNote: (index: number) => void
  createNewNote: () => void
  deleteNote: (key: string) => void
  writeNote: (title: TNoteInfo["title"], content: NoteContent) => void
}


const loadNotes = async () => {
  const notes = await window.context.getNotes()
  console.log(notes)
  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime);
}

const notes = await loadNotes();
export const useNoteStore = create<NoteState>()((set, get) => ({
  notes: notes,
  selectedNoteIndex: null,
  selectedNote: null,

  setSelectedNote: async (index: number) => {
    const note = get()?.notes?.[index] as TNoteInfo

    const noteContent = await window.context.readNote(note.title)
    return set(() =>
    (
      {
        selectedNoteIndex: index,
        selectedNote: { ...note, content: `${noteContent}` }
      }
    ))
  },

  createNewNote: async () => {



    const fileName = await window.context.createNote()
    if (!fileName) return

    const newNote: TNoteInfo = {
      title: fileName,
      lastEditTime: Date.now(),
      // content: "123"
    }
    const newNotes = [newNote, ...get().notes?.filter(note => note.title !== fileName) as TNoteInfo[]]

    return set(() => ({ notes: newNotes, selectedNoteIndex: 0, selectedNote: { ...newNote, content: '' } }))
  },

  deleteNote: async (title: string) => {
    const isDeleted = await window.context.deleteNote(title)
    if (!isDeleted) return
    const filteredNotes = get().notes?.filter(note => note.title !== title)


    return set(() => ({
      notes: filteredNotes,
      selectedNoteIndex: null,
      selectedNote: null,
    }))
  },



  writeNote: async (title, content) => {
    await window.context.writeNote(title, content)
    // const note = get()?.selectedNote
    const note: TNoteInfo = {
      title,
      lastEditTime: Date.now(),

    }
    const newNotes = [note, ...get().notes?.filter(note => note.title !== title) as TNoteInfo[]]
    return set(() => ({
      notes: newNotes,
      selectedNote: { ...note, content: content },
      selectedNoteIndex: 0,
    }))
  },


}))
