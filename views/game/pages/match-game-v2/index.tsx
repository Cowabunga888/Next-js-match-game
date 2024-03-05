'use client'
import GameComunicator from '../../components/game-comunicator'

function MatchGamePageV2() {
	const frameId = 'match-game-v2'

	return (
		<GameComunicator frameId={frameId}>
			<div className="relative bg-gray-100 w-screen h-screen">
				<iframe
					title="match-game-v2"
					// src="/sw-match-game-v2/index.html"
					src="https://match-game-bg-basic.web.app/"
					id={frameId}
					className="w-full h-full"
				/>
			</div>
		</GameComunicator>
	)
}

export default MatchGamePageV2
