'use client'
import GameComunicator from '../../components/game-comunicator'

function MatchGamePageV1() {
	return (
		<div className="relative bg-gray-100 w-screen h-screen">
			<GameComunicator>
				<iframe title="match-game" src="/sw-match-game-v1/index.html" id="match-game" className="w-full h-full" />
			</GameComunicator>
		</div>
	)
}

export default MatchGamePageV1
