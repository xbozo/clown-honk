import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession()

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
            <Button variant='ghost'>Explorar</Button>
          </Link>

          <Link href='/new-article'>
            <Button variant='ghost'>Publicar</Button>
          </Link>

          {(await isAuthenticated()) ? (
            <>
              <LogoutLink>
                <Button variant='outline' className='px-6'>
                  Sair
                </Button>
              </LogoutLink>
            </>
          ) : (
            <>
              <div className='flex items-center gap-x-3'>
                <LoginLink postLoginRedirectURL='/articles' authUrlParams={{}}>
                  <Button variant='outline' className='px-6'>
                    Entrar
                  </Button>
                </LoginLink>

                <RegisterLink postLoginRedirectURL='/articles'>
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
