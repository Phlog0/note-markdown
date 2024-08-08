import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin
} from '@mdxeditor/editor'
import { useNoteList } from '@renderer/hooks'
import { useMarkdown } from '@renderer/hooks/useMarkdown'
import { useNoteStore } from '@renderer/store'
import { useRef } from 'react'

export const MarkdownEditor = () => {
  // ?   editorRef - без хуков выкинет ошибку
  const { editorRef, handleAutoSaving, selectedNote, handleBlur } = useMarkdown()

  if (!selectedNote) return null

  return (
    <MDXEditor
      ref={editorRef}
      key={selectedNote.title}
      markdown={selectedNote.content}
      onBlur={handleBlur}
      contentEditableClassName={
        "text-textColor outline-none min-h-screen max-w-none text-lg px-8 py-5 prose prose-invertoutline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:text-textColor my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
      }
      onChange={handleAutoSaving}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
    />
  )
}
