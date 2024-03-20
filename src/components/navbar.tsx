import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { User } from '@prisma/client'
import {
  LucideBook,
  LucideDoorClosed,
  LucideSettings,
  LucideUser,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const navItems = [
  { name: 'Artigos', href: '/dashboard', icon: LucideBook },
  { name: 'Perfil', href: '/profile', icon: LucideSettings },
]

export const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const _user = await getUser()

  const user: void | User | null = await fetch(
    `http://localhost:3000/api/get-user/${_user?.id}`,
  ).then((res) => res.json())

  return (
    <nav className='flex items-center justify-center'>
      <div className='flex w-full max-w-8xl items-center justify-between'>
        <Link href='/'>
          <Image
            src='/white-clown-logo-svg.svg'
            alt='Logo'
            height={70}
            width={70}
          />
        </Link>

        <div className='flex items-center gap-x-5'>
          <Link href='/articles'>
            <Button variant='outline'>Explorar</Button>
          </Link>

          <Link href='/new-article'>
            <Button variant='outline'>Publicar</Button>
          </Link>

          {user ? (
            <div className='flex items-center gap-x-3'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    className='relative size-10 rounded-full'
                  >
                    <Avatar className='size-10 rounded-full'>
                      <AvatarImage src={user.avatar_url} alt='' />
                      <AvatarFallback>
                        <LucideUser className='size-5' />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className='w-56' align='end' forceMount>
                  <DropdownMenuLabel>
                    <div className='flex flex-col space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        {user.name}
                      </p>
                      <p className='text-xs leading-none text-muted-foreground'>
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    {navItems.map((item, index) => {
                      return (
                        <DropdownMenuItem asChild key={index}>
                          <Link
                            href={item.href}
                            className='flex w-full items-center justify-between hover:cursor-pointer'
                          >
                            {item.name}
                            <span>
                              <item.icon className='size-4' />
                            </span>
                          </Link>
                        </DropdownMenuItem>
                      )
                    })}
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    asChild
                    className='flex w-full items-center justify-between hover:cursor-pointer'
                  >
                    <LogoutLink>
                      Sair{' '}
                      <span>
                        <LucideDoorClosed className='size-4 text-red-400' />
                      </span>
                    </LogoutLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <div className='flex items-center gap-x-3'>
                <LoginLink
                  postLoginRedirectURL='/articles'
                  authUrlParams={{
                    lang: 'pt-BR',
                  }}
                >
                  <Button variant='outline' className='px-6'>
                    Entrar
                  </Button>
                </LoginLink>

                <RegisterLink
                  postLoginRedirectURL='/articles'
                  authUrlParams={{
                    lang: 'pt-BR',
                  }}
                >
                  <Button variant='outline' className='px-6'>
                    Cadastrar
                  </Button>
                </RegisterLink>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
