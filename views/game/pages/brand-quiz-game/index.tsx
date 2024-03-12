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

function BrandQuizGamePage() {
	const frameId = 'brand-quiz-basic'
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
				payload: {
					quizs: [
						{ fallback: './assets/img/empty.png', brand: 'Phuc Long', id: 'phuc-long' },
						{ fallback: './assets/img/empty.png', brand: 'Starbucks', id: 'starbucks' },
						{ fallback: './assets/img/empty.png', brand: 'HighLand', id: 'highland' },
					],
					answers: [
						{ fallback: './assets/img/phuc-long.png', brand: 'Phuc Long', id: 'phuc-long' },
						{ fallback: './assets/img/react-js.png', brand: 'ReactJs', id: 'react-js' },
						{ fallback: './assets/img/starbucks.png', brand: 'Starbucks', id: 'starbucks' },
						{ fallback: './assets/img/next-js.png', brand: 'NextJs', id: 'next-js' },
						{ fallback: './assets/img/highland.png', brand: 'HighLand', id: 'highland' },
					],
				},
			},
		}
	}, [])

	return (
		<GameComunicator frameId={frameId} frameData={data}>
			<div className="relative bg-gray-100 w-screen h-screen">
				<iframe
					title="brand-quiz-basic"
					src="https://brand-quiz-bb3bf.web.app"
					id={frameId}
					className="w-full h-full"
				/>
			</div>
		</GameComunicator>
	)
}

export default BrandQuizGamePage
