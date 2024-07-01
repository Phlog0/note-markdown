import {
  Content,
  RootLayout,
  Sidebar,
  ActionButtonsRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from '@/components'
import { useRef } from 'react'

function App(): JSX.Element {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <div>
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between px-4 mt-3" />
          <NotePreviewList className={'mt-4 space-y-1'} onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </div>
  )
}

export default App
