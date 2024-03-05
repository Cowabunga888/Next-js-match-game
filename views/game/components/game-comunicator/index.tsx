import { Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useEffect, useMemo, useState } from 'react'

interface IGameComunicator {
	children?: React.ReactNode
	frameId: string
}

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

function GameComunicator({ children, frameId }: Readonly<IGameComunicator>) {
	const [opened, { open, close }] = useDisclosure(false)
	const [result, setResult] = useState<string>('')

	const data: IMESSAGE = useMemo(() => {
		return {
			data: {
				col: 5,
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
					// 'https://cdn-icons-png.flaticon.com/256/14699/14699678.png',
					// 'https://cdn-icons-png.flaticon.com/256/14699/14699692.png',
					// 'https://cdn-icons-png.flaticon.com/256/14699/14699684.png',
					// 'https://cdn-icons-png.flaticon.com/256/14699/14699695.png',
					// 'https://cdn-icons-png.flaticon.com/256/15054/15054885.png',
					// 'https://cdn-icons-png.flaticon.com/256/8548/8548875.png',
					// 'https://cdn-icons-png.flaticon.com/256/14477/14477421.png',
					// 'https://cdn-icons-png.flaticon.com/256/15135/15135842.png',
				],
			},
		}
	}, [])

	const onMessageListener = (event: any) => {
		if (event?.data?.messageType === 'INDEX_JS_MESSAGE') {
			console.log('Next js log: ', event?.data?.data?.message)
			setResult(event?.data?.data?.message)
			open()
		}
	}

	// const sendMessage = (data: any) => {
	// 	const iframe = document.getElementById(frameId) as HTMLIFrameElement
	// 	iframe?.contentWindow?.postMessage(data, window.location.origin)
	// }

	useEffect(() => {
		localStorage.setItem('gameData', JSON.stringify(data))
		window.addEventListener('message', onMessageListener, false)

		return () => {
			window.removeEventListener('message', onMessageListener, false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			{children}

			<Modal
				opened={opened}
				onClose={()=>{}}
				centered
				withCloseButton={false}
				overlayProps={{
					backgroundOpacity: 0.55,
					blur: 3,
				}}
			>
				<div className="w-full h-[300px] border border-dashed flex flex-col items-center justify-center">
					<div className='text-lg text-gray-600 py-2'>{result}</div>
					<Button className="" onClick={close} color="lime" variant="outline">
						Confirm
					</Button>
				</div>
			</Modal>
		</>
	)
}

export default GameComunicator
