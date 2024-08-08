import {
  ChangeThemeButton,
  WindowCloseButton,
  WindowResizeButton,
  WindowrollUpButton
} from '@/components/WindowButton'
import { WindowFullscreenButton } from './WindowButton/WindowFullscreenButton'

export const DraggableHeader = () => {
  return (
    <header className="flex justify-between items-center ps-4 border-b-4 border-y-slate-500">
      SerG0
      <div className="flex justify-end">
        <ChangeThemeButton/>
        <WindowFullscreenButton/>
        <WindowrollUpButton />
        <WindowResizeButton />
        <WindowCloseButton />
      </div>
    </header>
  )
}
