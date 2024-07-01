import React, { ComponentProps } from 'react'
// import { notesMock } from '@/store/mocks'
import { NotePreview } from '@/components'
import { twMerge } from 'tailwind-merge'
import { useNoteList } from '@/hooks'
// import { notesMock } from '@renderer/store/mocks'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}
export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNote, selectedNoteIndex, setSelectedNote } = useNoteList()
  console.log(selectedNote, selectedNoteIndex)
  if (notes?.length === 0)
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No notes yet</span>
      </ul>
    )

  const setSelectedNoteHandler = (index: number) => {
    setSelectedNote(index)
    if (onSelect) onSelect()
  }
  return (
    <ul className={className} {...props}>
      {notes?.map((note, index) => (
        <NotePreview
          {...note}
          key={note.title + note.lastEditTime}
          isActive={index === selectedNoteIndex}
          onClick={() => setSelectedNoteHandler(index)}
        />
      ))}
    </ul>
  )
}
