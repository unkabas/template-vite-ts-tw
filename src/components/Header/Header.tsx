import Container from '../ui/Container'
import { ColorfullText } from './ColorfullText'

export function Header() {
	return (
		<Container className='fluid-text flex justify-center h-screen font-black text-6xl text-[#dbe4f3]'>
			<h1>Welcome to my</h1>
			<span>
				<ColorfullText text='TEMPLATE' />
			</span>
			<div
				className='
       flex gap-4 my-4 items-center '
			>
				<a href='https://github.com/unkabas/'>
					<img src='/git.svg' alt='' className='fluid-icons' />
				</a>
				<a href='https://t.me/localhost_u'>
					<img src='/tg.svg' alt='' className='fluid-icons' />
				</a>
			</div>
			<span className='text-xs sm:text-sm md:text-md lg:text-lg text-[#E4EBF6] font-extralight'>
				by @unkabas
			</span>
		</Container>
	)
}
