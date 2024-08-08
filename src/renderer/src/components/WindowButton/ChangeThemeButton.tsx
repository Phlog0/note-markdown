import { useNoteStore } from '@renderer/store'
import { CiDark } from 'react-icons/ci'
import { FaSun } from 'react-icons/fa6'
import { WindowButton } from './WindowButton'

export const ChangeThemeButton = () => {
  const { lightMode, changeTheme } = useNoteStore()
  return <WindowButton onClick={changeTheme}>{!lightMode ? <CiDark /> : <FaSun />}</WindowButton>
}
