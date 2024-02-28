'use client'

import NotFound from '@/app/not-found'
import MatchGamePage from '@/views/game/pages/match-game'
import { GAME_NAME } from '@/views/game/type/game-type'
import { useParams } from 'next/navigation'

function GamePage() {
	const { name } = useParams()

	switch (name) {
		case GAME_NAME.MATCH_GAME:
			return <MatchGamePage />
		default:
			return <NotFound />
	}
}

export default GamePage
