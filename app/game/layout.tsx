import React from 'react'

interface IGameLayout {
	children: React.ReactNode
}

function GameLayout({ children }: Readonly<IGameLayout>) {
	return (
		<div className='w-screen h-screen bg-[url("/assests/game/images/404_bg.webp")] bg-center bg-no-repeat bg-cover'>
			{children}
		</div>
	)
}

export default GameLayout
