'use client'
import { useMemo } from 'react'
import GameComunicator from '../../components/game-comunicator'

interface IMESSAGE {
	messageType?: string
	modalType?: string
	data: {
		sounds?: {
			confettiSound?: string
			selectCardSound?: string
			backSound?: string
		}
		images: any
	}
}

function JackpotGamePage() {
	const frameId = 'jackpot-basic'
	const data: IMESSAGE = useMemo(() => {
		return {
			messageType: 'NEXT_JS_MESSAGE',
			data: {
				sounds: {
					confettiSound: "../assets/sound/confetties_sound.mp3",
					backSound: "../assets/sound/game_backsound.mp3",
				},
				images: [
					"https://cdn-icons-png.flaticon.com/256/14699/14699677.png",
					"https://cdn-icons-png.flaticon.com/256/14699/14699686.png",
					"https://cdn-icons-png.flaticon.com/256/14699/14699678.png",
					"https://cdn-icons-png.flaticon.com/256/14699/14699692.png",
					"https://cdn-icons-png.flaticon.com/256/14699/14699684.png",
					"https://cdn-icons-png.flaticon.com/256/14699/14699695.png",
					"https://cdn-icons-png.flaticon.com/256/15054/15054885.png",
					"https://cdn-icons-png.flaticon.com/256/8548/8548875.png",
					"https://cdn-icons-png.flaticon.com/256/14477/14477421.png",
					"https://cdn-icons-png.flaticon.com/256/15135/15135842.png",
				],
			},
		}
	}, [])

	return (
		<GameComunicator frameId={frameId} frameData={data}>
			<div className="relative bg-gray-100 w-screen h-screen">
				<iframe
					title="jackpot-basic"
					src="https://jackpot-eafa5.web.app"
					id={frameId}
					className="w-full h-full"
				/>
			</div>
		</GameComunicator>
	)
}

export default JackpotGamePage
