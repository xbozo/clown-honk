import { cn } from '@/utils/cn'
import { sanitizeTitle } from '@/utils/sanitizeTitle'
import Link from 'next/link'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title: string
  description: string
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  const sanitizedTitle = sanitizeTitle(title)

  return (
    <Link
      href={`/user/article/${sanitizedTitle}`}
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-zinc-900 bg-zinc-900 p-4 shadow-none shadow-input transition duration-200 hover:cursor-pointer hover:border-zinc-400 hover:shadow-xl',
        className,
      )}
    >
      {header}
      <article className='transition duration-200 group-hover/bento:translate-x-2'>
        {icon}
        <div className='mb-2 mt-2 font-sans font-bold text-zinc-300'>
          {title}
        </div>
        <div className='line-clamp-2 font-sans text-xs font-normal text-zinc-400 md:line-clamp-3'>
          {description}
        </div>
      </article>
    </Link>
  )
}
