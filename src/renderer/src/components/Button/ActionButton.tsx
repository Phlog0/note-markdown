import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type TActionButtonProps = ComponentProps<'button'>
export const ActionButton = ({ className, children, ...props }: TActionButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'px-2 py-1 rounded-md bg-mdColor text-textColor transition-colors duration-300'
      )}
    >
      {children}
    </button>
  )
}
