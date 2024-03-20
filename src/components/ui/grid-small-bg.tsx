import { ReactNode } from 'react'

export const GridSmallBg = ({ children }: { children: ReactNode }) => {
	return (
		<div className='mt-20 w-full bg-zinc-950  bg-grid-small-white/[0.2] relative flex justify-center'>
			<div className='absolute pointer-events-none inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

			<div className='h-full relative'>{children}</div>
		</div>
	)
}
