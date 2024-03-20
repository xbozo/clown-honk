import { Navbar } from '@/components/navbar'
import { GridSmallBg } from '@/components/ui/grid-small-bg'
import { prisma } from '@/lib/prisma'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import type { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
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

type UserData = {
  email: string
  id: string
  firstName: string | undefined | null
  lastName: string | undefined | null
  profileImage: string | undefined | null
}

const getUserData = async ({
  email,
  id,
  firstName,
  lastName,
  profileImage,
}: UserData) => {
  noStore()

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    const name = `${firstName ?? ''} ${lastName ?? ''}`

    await prisma.user.create({
      data: {
        id,
        email,
        name,
        avatar_url: profileImage,
      },
    })
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  // OAuth format
  await getUserData({
    email: String(user?.email),
    firstName: String(user?.given_name),
    lastName: String(user?.family_name),
    id: String(user?.id),
    profileImage: user?.picture,
  })

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
