import { useNoteStore } from '@renderer/store'
import { TNoteInfo } from '@shared/models'
import React from 'react'

export const useNoteList = () => {
  // перерендерерица?
  const notes = useNoteStore((state) => state.notes)

  const selectedNoteIndex = useNoteStore((state) => state.selectedNoteIndex)
  const selectedNote = useNoteStore((state) => state.selectedNote)
  const setSelectedNote = useNoteStore((state) => state.setSelectedNote)
  return { notes, selectedNoteIndex, selectedNote, setSelectedNote }
}
