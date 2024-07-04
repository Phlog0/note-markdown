import { IoCloseOutline } from 'react-icons/io5'
import { WindowButton } from '@/components/WindowButton'

export const WindowCloseButton = () => {
  return (
    <WindowButton
      className="hover:bg-red-600 transition-colors"
      onClick={() => window.context.closeApp()}
    >
      <IoCloseOutline />
    </WindowButton>
  )
}
