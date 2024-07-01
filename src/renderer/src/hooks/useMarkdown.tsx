import { MDXEditorMethods } from '@mdxeditor/editor'
import { useRef } from 'react'
import { throttle } from 'lodash'
import { NoteContent } from '@shared/models'
import { useNoteStore } from '@renderer/store'
import { autoSavingTime } from '@shared/constant'
export const useMarkdown = () => {
  const selectedNote = useNoteStore((state) => state.selectedNote)
  const writeNote = useNoteStore((state) => state.writeNote)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) return

      console.info('Auto saving:', selectedNote.title)

      writeNote(selectedNote.title, content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!selectedNote) return
    handleAutoSaving.cancel()

    //content of previous note
    const content = editorRef.current?.getMarkdown()

    if (content !== null && content !== undefined) {
      writeNote(selectedNote.title, content)
    }
  }

  return { editorRef, selectedNote, handleAutoSaving, handleBlur }
}
