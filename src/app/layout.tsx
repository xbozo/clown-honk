import { Navbar } from '@/components/navbar'
import { GridSmallBg } from '@/components/ui/grid-small-bg'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	weight: ['400', '700', '500', '900', '300'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Clown Honk',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt'>
			<body className={`${roboto.className} bg-zinc-950 text-zinc-100 min-h-screen`}>
				<div className='border-b border-b-zinc-800'>
					<div className='p-4 min-h-[8vh] max-w-7xl mx-auto'>
						<Navbar />
					</div>
				</div>

				<GridSmallBg>
					<div className='max-w-7xl mx-auto mt-24 px-4'>{children}</div>
				</GridSmallBg>
			</body>
		</html>
	)
}
