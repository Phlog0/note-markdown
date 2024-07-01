import { cn, formatDateFromMs } from '@renderer/utils'
import { TNoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type TNotePreviewProps = TNoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive,
  className,
  ...props
}: TNotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)
  return (
    <div
      className={cn(
        'cursor-pointer px-3 py-3 rounded-md transition-colors duration-300',
        {
          'bg-zinc-400/75': isActive,
          // 'hover:bg-red-500/75': !isActive
            'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="w-full inline-block mb-2 text-xs font-light text-left">{date}</span>
    </div>
  )
}
