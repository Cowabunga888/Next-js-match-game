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
		cards: any
	}
}

function ScratchCardGamePage() {
	const frameId = 'scratch-card-basic'
	const data: IMESSAGE = useMemo(() => {
		return {
			messageType: 'NEXT_JS_MESSAGE',
			data: {
				sounds: {
					confettiSound: '../assets/sound/confetties_sound.mp3',
					selectCardSound: '../assets/sound/select_sound.mp3',
					backSound: '../assets/sound/game_backsound.mp3',
				},
				cards: [
					{
						scratchLayer: '../assets/img/front_layer_01.png',
						reslultLayer: '../assets/img/back_layer_01.png',
						id: 'card_01',
						result: 'win',
					},
					{
						scratchLayer: '../assets/img/front_layer_02.png',
						reslultLayer: '../assets/img/back_layer_02.png',
						id: 'card_02',
						result: 'win',
					},
					{
						scratchLayer: '../assets/img/front_layer_03.png',
						reslultLayer: '../assets/img/back_layer_03.png',
						id: 'card_03',
						result: 'lose',
					},
				],
			},
		}
	}, [])

	return (
		<GameComunicator frameId={frameId} frameData={data}>
			<div className="relative bg-gray-100 w-screen h-screen">
				<iframe
					title="scratch-card-basic"
					src="https://scratch-card-699dd.web.app"
					id={frameId}
					className="w-full h-full"
				/>
			</div>
		</GameComunicator>
	)
}

export default ScratchCardGamePage
