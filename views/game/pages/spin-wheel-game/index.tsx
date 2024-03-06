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
		wheelConfig: any
	}
}

function SpinWheelGamePage() {
	const frameId = 'spin-wheel-basic'
	const data: IMESSAGE = useMemo(() => {
		return {
			messageType: 'NEXT_JS_MESSAGE',
			data: {
				sounds: {
					confettiSound: './assets/sound/confetties_sound.mp3',
					selectCardSound: './assets/sound/select_sound.mp3',
					backSound: './assets/sound/game_backsound.mp3',
				},
				wheelConfig: {
					name: 'Workout',
					radius: 0.84,
					itemLabelRadius: 0.93,
					itemLabelRadiusMax: 0.35,
					itemLabelRotation: 180,
					itemLabelAlign: 'left',
					itemLabelColors: ['#fff'],
					itemLabelBaselineOffset: -0.07,
					itemLabelFont: 'Tilt Neon',
					itemLabelFontSizeMax: 40,
					itemBackgroundColors: ['#ffc93c', '#66bfbf', '#a2d5f2', '#515070', '#43658b', '#ed6663', '#d54062'],
					rotationSpeedMax: 500,
					rotationResistance: -100,
					lineWidth: 1,
					lineColor: '#fff',
					// image: './assets/img/example-0-image.svg', //center
					image: './assets/img/example-0-image.svg', //center
					overlayImage: './assets/img/example-0-overlay.svg', // border,
					isInteractive: false,
					items: [
						{
							label: '$0.00',
						},
						{
							label: '$10',
						},
						{
							label: '$20',
						},
						{
							label: '$30',
						},
						{
							label: '$40',
						},
						{
							label: '$50',
						},
						{
							label: '$60',
						},
						{
							label: '$70',
						},
						{
							label: '$80',
						},
						{
							label: '$90',
						},
						{
							label: '$100',
						},
						{
							label: '$110',
						},
						{
							label: '$120',
						},
						{
							label: '$130',
						},
					],
				},
			},
		}
	}, [])

	return (
		<GameComunicator frameId={frameId} frameData={data}>
			<div className="relative bg-gray-100 w-screen h-screen">
				<iframe
					title="spin-wheel-basic"
					src="https://spin-wheel-e1e07.web.app"
					id={frameId}
					className="w-full h-full"
				/>
			</div>
		</GameComunicator>
	)
}

export default SpinWheelGamePage
