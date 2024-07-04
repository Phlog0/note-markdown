import { WindowButton } from '@/components/WindowButton'
import { BsArrowsFullscreen } from 'react-icons/bs'

export const WindowFullscreenButton = () => {
  return (
    <WindowButton onClick={() => window.context.fullSize()}>
      <BsArrowsFullscreen />
    </WindowButton>
  )
}
