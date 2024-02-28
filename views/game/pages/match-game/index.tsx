'use client'
import GameComunicator from '../../components/game-comunicator'

function MatchGamePage() {
	return (
		<div className="relative bg-gray-100 w-screen h-screen">
			<GameComunicator>
				<iframe title="match-game" src="/sw-match-game/index.html" id="match-game" className="w-full h-full" />
			</GameComunicator>
		</div>
	)
}

export default MatchGamePage
