import { MdDelete } from 'react-icons/md'
import { ActionButton } from '@/components'
import type { TActionButtonProps } from '@/components' //? 😲😲😲😲😲😲😲😲😲😲
import { useNoteList } from '@/hooks'
import { useNoteStore } from '@/store'

export const DeleteNoteButton = ({ ...props }: TActionButtonProps) => {
  const deleteNote = useNoteStore((state) => state.deleteNote)
  const { selectedNote } = useNoteList()

  const deleteNodeHandle = () => {
    if (!selectedNote?.title) {
      return
    }
    deleteNote(selectedNote?.title)
  }

  return (
    <ActionButton {...props} onClick={deleteNodeHandle}>
      <MdDelete className="w-4 h-4 text-textColor" />
    </ActionButton>
  )
}
