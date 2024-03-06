'use client'

import { JetBrains_Mono } from 'next/font/google'
import { useRouter } from 'next/navigation'

const JetBrains = JetBrains_Mono({
	subsets: ['latin'],
	display: 'swap',
})

export default function NotFound() {
	const router = useRouter()
	return (
		<div
			className={
				JetBrains.className +
				' w-screen h-screen flex flex-col justify-center gap-5 text-center bg-[url("/assets/game/images/404_bg.webp")] bg-center bg-no-repeat bg-cover'
			}
		>
			<div>
				<div className="tracking-widest">
					<span className="text-[#F6BC70] text-6xl block">
						<span>4 0 4</span>
					</span>
					<p className="text-[#656565] max-w-[450px] text-xl mx-auto px-3">
						Sorry, We couldn&#39;t find what you are looking for!
					</p>
				</div>
			</div>
			<button
				onClick={() => {
					router.back()
				}}
				className="text-white text-center bg-[#7390D0] p-3 mx-auto w-[120px] rounded-md hover:shadow-lg"
			>
				Go back{' '}
			</button>
		</div>
	)
}
