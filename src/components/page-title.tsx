import { ReactNode } from 'react'

type PageTitleProps = {
  title: string
  icon: ReactNode
}

export const PageTitle = ({ title, icon }: PageTitleProps) => {
  return (
    <div className='mb-10 flex items-center justify-center gap-2'>
      {icon}
      <h1 className='text-center text-3xl'>{title}</h1>
    </div>
  )
}
