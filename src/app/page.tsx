import { Button } from '@/components/ui/button'
import { TypewriterTitle } from './typewriter-title'

export default function Home() {
	return (
		<div className='space-y-40 flex flex-col items-center'>
			<div className='w-[1280px] text-center'>
				<TypewriterTitle />
			</div>

			<Button
				className='text-xl w-60'
				size='lg'
			>
				Ver artigos
			</Button>
		</div>
	)
}
