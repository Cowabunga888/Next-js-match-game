'use client'
import GameComunicator from '../../components/game-comunicator'

function MatchGamePageV1() {
	const frameId = 'match-game-v1'

	return (
		<GameComunicator frameId={frameId}>
			<div className="relative bg-gray-100 w-screen h-screen">
				<iframe
					title="match-game-v1"
					// src="/sw-match-game-v1/index.html"
					src="https://match-game-basic.web.app/"
					id={frameId}
					className="w-full h-full"
				/>
			</div>
		</GameComunicator>
	)
}

export default MatchGamePageV1
