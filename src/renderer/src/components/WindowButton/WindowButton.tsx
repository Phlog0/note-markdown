import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const WindowButton = ({ className, children, ...props }: ComponentProps<'button'>) => {
  return (
    <button
      className={twMerge(
        'bg-primary p-3 flex justify-center items-center hover:bg-mdColor transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
