import React from 'react'

interface IGameLayout {
	children: React.ReactNode
}

function GameLayout({ children }: Readonly<IGameLayout>) {
	return <div className="w-screen h-screen">{children}</div>
}

export default GameLayout
