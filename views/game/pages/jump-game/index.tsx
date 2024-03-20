'use client'

function JumpJumpGamePage() {
	const frameId = 'jump-game-basic'

	return (
		<div className="relative bg-gray-100 w-screen h-screen">
			<iframe
				title="jump-game-basic"
				src="https://jump-v2.web.app"
				id={frameId}
				className="w-full h-full"
			/>
		</div>
	)
}

export default JumpJumpGamePage
