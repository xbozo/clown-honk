import { Navbar } from '@/components/navbar'
import { GridSmallBg } from '@/components/ui/grid-small-bg'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '700', '500', '900', '300'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Thoughts',
    default: 'Thoughts',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='pt'>
      <body
        className={`${roboto.className} min-h-screen bg-zinc-950 text-zinc-100`}
      >
        <div className='border-b border-b-zinc-800'>
          <div className='mx-auto min-h-[8vh] max-w-7xl p-4'>
            <Navbar />
          </div>
        </div>

        <GridSmallBg>
          <div className='mx-auto mt-16 max-w-7xl px-5 py-10'>{children}</div>
        </GridSmallBg>
      </body>
    </html>
  )
}
