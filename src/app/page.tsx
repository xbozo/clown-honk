import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TypewriterTitle } from './typewriter-title'

export default function Home() {
  return (
    <div className='flex min-h-[60vh] flex-col items-center space-y-40'>
      <div className='w-[1280px] text-center'>
        <TypewriterTitle />
      </div>

      <Button className='w-60 text-xl' size='lg' asChild>
        <Link href='/articles'>Ver artigos</Link>
      </Button>
    </div>
  )
}
