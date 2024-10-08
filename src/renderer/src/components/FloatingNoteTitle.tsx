import { useNoteList } from '@renderer/hooks'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const { selectedNote } = useNoteList() //? render
  if (!selectedNote) return null
  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-textColor">{selectedNote?.title}</span>
    </div>
  )
}
