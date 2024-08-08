import { MdOutlineHorizontalRule } from 'react-icons/md'
import { WindowButton } from './WindowButton'

export const WindowrollUpButton = () => {
  return (
    <WindowButton  onClick={()=>window.context.hideApp()}>
      <MdOutlineHorizontalRule />
    </WindowButton>
  )
}
