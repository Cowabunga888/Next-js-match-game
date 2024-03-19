'use client'

function JumpJumpGamePage() {
	const frameId = 'spin-wheel-basic'

	return (
		<div className="relative bg-gray-100 w-screen h-screen">
			<iframe
				title="spin-wheel-basic"
				src="https://jump-v2.web.app"
				id={frameId}
				className="w-full h-full"
			/>
		</div>
	)
}

export default JumpJumpGamePage
