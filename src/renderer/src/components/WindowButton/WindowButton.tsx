import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const WindowButton = ({ className, children, ...props }: ComponentProps<'button'>) => {
  return (
    <button
      className={twMerge(
        'bg-zinc-700 p-3 flex justify-center items-center hover:bg-zinc-600 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
