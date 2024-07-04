import { MdOutlineHorizontalRule } from 'react-icons/md'
import { WindowButton } from './WindowButton'

export const WindowrollUpButton = () => {
  return (
    <WindowButton className='hover:bg-zinc-600 transition-colors' onClick={()=>window.context.hideApp()}>
      <MdOutlineHorizontalRule />
    </WindowButton>
  )
}
