import { FaFile } from 'react-icons/fa'
import { ActionButton } from '@/components'
import type { TActionButtonProps } from '@/components' //? 😲😲😲😲😲😲😲😲😲😲
import { useNoteStore } from '@/store'

export const NewNoteButton = ({ ...props }: TActionButtonProps) => {
  const createNewNote = useNoteStore((state) => state.createNewNote)
  return (
    <ActionButton {...props} onClick={createNewNote}>
      <FaFile className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
