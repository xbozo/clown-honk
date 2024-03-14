import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export const Navbar = async () => {
	const isAuthenticated = () => {
		return false
	}

	return (
		<nav className='flex items-center justify-center'>
			<div className='max-w-8xl w-full flex items-center justify-between'>
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
							<Link href=''>
								<Button
									variant='outline'
									className='px-6'
								>
									Sair
								</Button>
							</Link>
						</>
					) : (
						<>
							<div className='flex items-center gap-x-3'>
								<Link href=''>
									<Button
										variant='outline'
										className='px-6'
									>
										Entrar
									</Button>
									{/* <button className='w-[100px] bg-zinc-200 text-zinc-950 p-2 rounded-md text-center'>
										Entrar
									</button> */}
								</Link>

								<Link href=''>
									<Button
										variant='outline'
										className='px-6'
									>
										Cadastrar
									</Button>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</nav>
	)
}
