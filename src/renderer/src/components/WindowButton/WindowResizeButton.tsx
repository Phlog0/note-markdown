import { PiResizeFill } from 'react-icons/pi'

import { WindowButton } from '@/components/WindowButton'

export const WindowResizeButton = () => {
  return (
    <WindowButton className='' onClick={()=>window.context.maximizeOrUnmaximize()}>
      <PiResizeFill />
    </WindowButton>
  )
}
