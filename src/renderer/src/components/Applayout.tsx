import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main {...props} className={twMerge('h-screen w-screen gridRootTemplates bg-primary text-textColor', className)}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-80 overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={twMerge('flex-1 overflow-auto', className)}>
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'
