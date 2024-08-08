import {
  Content,
  RootLayout,
  Sidebar,
  ActionButtonsRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle,
  DraggableHeader
} from '@/components'
import { useRef } from 'react'
import { useNoteStore } from './store'

function App(): JSX.Element {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }
  const { lightMode } = useNoteStore()

  return (
    <html className={`theme-${lightMode ? 'light' : 'dark'}`}>
      <div>
        <RootLayout>
          <DraggableHeader />
          <div className="flex h-full">
            <Sidebar className="p-2">
              <ActionButtonsRow className="flex justify-between px-4 mt-3" />
              <NotePreviewList className={'mt-4 space-y-1'} onSelect={resetScroll} />
            </Sidebar>
            <Content
              ref={contentContainerRef}
              className={`border-l bg-primary border-l-white`}
            >
              <FloatingNoteTitle className="pt-2" />
              <MarkdownEditor />
            </Content>
          </div>
        </RootLayout>
      </div>
    </html>
  )
}

export default App
