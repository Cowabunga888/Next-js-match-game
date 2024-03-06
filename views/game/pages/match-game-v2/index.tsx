'use client'
import { useMemo } from 'react'
import GameComunicator from '../../components/game-comunicator'

interface IMESSAGE {
	messageType?: string
	modalType?: string
	data: {
		message?: string
		col: number
		row: number
		cel: number
		logo: string
		background?: string
		sounds?: {
			confettiSound?: string
			selectCardSound?: string
			backSound?: string
		}
		images: string[]
	}
}

function MatchGamePageV2() {
	const frameId = 'match-game-v2'
	
	const data: IMESSAGE = useMemo(() => {
		return {
			messageType: 'NEXT_JS_MESSAGE',
			data: {
				col: 4,
				row: 4,
				cel: 20,
				logo: 'https://i.postimg.cc/V64z86jz/logo.png',
				background: 'https://cdn-icons-png.flaticon.com/256/14699/14699677.png',
				sounds: {
					confettiSound: './assets/sound/confetties_sound.mp3',
					selectCardSound: './assets/sound/select_sound.mp3',
					backSound: './assets/sound/game_backsound.mp3',
				},
				images: [
					'https://cdn-icons-png.flaticon.com/256/14699/14699677.png',
					'https://cdn-icons-png.flaticon.com/256/14699/14699686.png',
					'https://cdn-icons-png.flaticon.com/256/14699/14699678.png',
					'https://cdn-icons-png.flaticon.com/256/14699/14699692.png',
					'https://cdn-icons-png.flaticon.com/256/14699/14699684.png',
					'https://cdn-icons-png.flaticon.com/256/14699/14699695.png',
					'https://cdn-icons-png.flaticon.com/256/15054/15054885.png',
					'https://cdn-icons-png.flaticon.com/256/8548/8548875.png',
					// 'https://cdn-icons-png.flaticon.com/256/14477/14477421.png',
					// 'https://cdn-icons-png.flaticon.com/256/15135/15135842.png',
				],
			},
		}
	}, [])

	return (
		<GameComunicator frameId={frameId} frameData={data}>
			<div className="relative bg-gray-100 w-screen h-screen">
				<iframe
					title="match-game-v2"
					// src="/sw-match-game-v2/index.html"
					src="https://match-game-bg-basic.web.app"
					id={frameId}
					className="w-full h-full"
				/>
			</div>
		</GameComunicator>
	)
}

export default MatchGamePageV2
