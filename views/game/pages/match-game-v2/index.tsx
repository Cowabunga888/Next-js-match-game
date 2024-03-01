'use client'
import GameComunicator from '../../components/game-comunicator'

function MatchGamePageV2() {
	return (
		<div className="relative bg-gray-100 w-screen h-screen">
			<GameComunicator>
				<iframe title="match-game" src="/sw-match-game-v2/index.html" id="match-game" className="w-full h-full" />
			</GameComunicator>
		</div>
	)
}

export default MatchGamePageV2
