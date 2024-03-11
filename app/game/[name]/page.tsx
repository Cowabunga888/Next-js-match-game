'use client'

import NotFound from '@/app/not-found'
import JackpotGamePage from '@/views/game/pages/jackpot-game'
import LuckyBoxGamePage from '@/views/game/pages/lucky-box-game'
import MatchGamePageV1 from '@/views/game/pages/match-game-v1'
import MatchGamePageV2 from '@/views/game/pages/match-game-v2'
import ScratchCardGamePage from '@/views/game/pages/scratch-card-game'
import SpinWheelGamePage from '@/views/game/pages/spin-wheel-game'
import { GAME_NAME } from '@/views/game/type/game-type'
import { useParams } from 'next/navigation'

function GamePage() {
	const { name } = useParams()

	switch (name) {
		case GAME_NAME.MATCH_GAME_V1:
			return <MatchGamePageV1 />
		case GAME_NAME.MATCH_GAME_V2:
			return <MatchGamePageV2 />
		case GAME_NAME.SPIN_WHEEL:
			return <SpinWheelGamePage />
		case GAME_NAME.SCRATCH_CARD:
			return <ScratchCardGamePage />
		case GAME_NAME.JACKPOT:
			return <JackpotGamePage />
		case GAME_NAME.LUCKY_BOX:
			return <LuckyBoxGamePage />
		default:
			return <NotFound />
	}
}

export default GamePage
