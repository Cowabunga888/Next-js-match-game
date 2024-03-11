'use client'
import { useMemo } from 'react'
import GameComunicator from '../../components/game-comunicator'

interface IMESSAGE {
	messageType?: string
	modalType?: string
	data: {
		box: string
		sounds?: {
			confettiSound?: string
			selectCardSound?: string
			backSound?: string
		}
		payload: any
	}
}

function LuckyBoxGamePage() {
	const frameId = 'lucky-box-basic'
	const data: IMESSAGE = useMemo(() => {
		return {
			messageType: 'NEXT_JS_MESSAGE',
			data: {
				box: '../assets/img/box.png',
				sounds: {
					confettiSound: '../assets/sound/confetties_sound.mp3',
					selectCardSound: '../assets/sound/select_sound.mp3',
					backSound: '../assets/sound/game_backsound.mp3',
				},
				payload: [
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931311.png', status: 'win' },
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931323.png', status: 'lose' },
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931311.png', status: 'win' },
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931323.png', status: 'lose' },
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931311.png', status: 'win' },
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931323.png', status: 'lose' },
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931311.png', status: 'win' },
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931323.png', status: 'lose' },
					{ url: 'https://cdn-icons-png.flaticon.com/512/6931/6931311.png', status: 'win' },
				],
			},
		}
	}, [])

	return (
		<GameComunicator frameId={frameId} frameData={data}>
			<div className="relative bg-gray-100 w-screen h-screen">
				<iframe
					title="lucky-box-basic"
					src="https://lucky-box-458f3.web.app"
					id={frameId}
					className="w-full h-full"
				/>
			</div>
		</GameComunicator>
	)
}

export default LuckyBoxGamePage
