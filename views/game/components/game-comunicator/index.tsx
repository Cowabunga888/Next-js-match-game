import { Box, Button, LoadingOverlay, Modal } from '@mantine/core'
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
	const [isLoading, setIsLoading] = useState(true)

	const [result, setResult] = useState<string>('')

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

	const onMessageListener = (event: any) => {
		console.log(event)
		if (event?.data?.messageType === 'INDEX_JS_MESSAGE') {
			console.log('Next js log: ', event?.data?.data?.message)
			setResult(event?.data?.data?.message)
			open()
		}
	}

	const sendMessage = (data: any) => {
		const iframe = document.getElementById(frameId) as HTMLIFrameElement

		switch (frameId) {
			case 'match-game-v1':
				iframe?.contentWindow?.postMessage(data, 'https://match-game-basic.web.app')
				break
			case 'match-game-v2':
				iframe?.contentWindow?.postMessage(data, 'https://match-game-bg-basic.web.app')
				break
			default:
				break
		}
		// iframe?.contentWindow?.postMessage(data, window.location.origin)
	}

	useEffect(() => {
		document.getElementById(frameId)?.addEventListener('load', function () {
			setIsLoading(false)
			open()
		})

		window.addEventListener('message', onMessageListener, false)

		return () => {
			window.removeEventListener('message', onMessageListener, false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Box pos="relative">
			{isLoading && (
				<LoadingOverlay
					loaderProps={{ color: 'lime' }}
					visible={true}
					zIndex={1000}
					overlayProps={{ radius: 'sm', blur: 2 }}
				/>
			)}

			{children}

			<Modal
				opened={opened}
				onClose={() => {}}
				centered
				withCloseButton={false}
				overlayProps={{
					backgroundOpacity: 0.55,
					blur: 3,
				}}
			>
				<div className="w-full h-[300px] border border-dashed flex flex-col items-center justify-center">
					{result !== '' && (
						<>
							<div className="text-lg text-gray-600 py-2">{result}</div>
							<Button
								className=""
								onClick={() => {
									setResult('')
									close()
								}}
								color="lime"
								variant="outline"
							>
								Confirm
							</Button>
						</>
					)}
					{result === '' && (
						<Button
							className=""
							onClick={() => {
								sendMessage(data)
								close()
							}}
							color="lime"
							variant="outline"
						>
							Start Game
						</Button>
					)}
				</div>
			</Modal>
		</Box>
	)
}

export default GameComunicator
