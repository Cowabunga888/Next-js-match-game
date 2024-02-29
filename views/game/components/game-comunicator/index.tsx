import { Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useEffect } from 'react'

interface IGameComunicator {
	children?: React.ReactNode
}

interface IMESSAGE {
	messageType: string
	modalType?: string
	data: {
		message: string
		imageList: { img: string }[]
	}
}

function GameComunicator({ children }: Readonly<IGameComunicator>) {
	const [opened, { open, close }] = useDisclosure(true)

	const data: IMESSAGE = {
		messageType: 'NEXT_JS_MESSAGE',
		data: {
			message: 'Next js -> index.js',
			imageList: [
				{ img: '🐱' },
				{ img: '🐺' },
				{ img: '🦝' },
				{ img: '🐲' },
				{ img: '🐱' },
				{ img: '🐺' },
				{ img: '🦝' },
				{ img: '🐲' },
			],
		},
	}

	const onMessageListener = (event: any) => {
		if (event?.data?.messageType === 'INDEX_JS_MESSAGE') {
			const mess: IMESSAGE = event?.data
			console.log('Next js log: ', mess)
		}
	}

	const sendMessage = (data: any) => {
		const iframe = document.getElementById('match-game') as HTMLIFrameElement
		iframe?.contentWindow?.postMessage(data, window.location.origin)
	}

	useEffect(() => {
		window.addEventListener('message', onMessageListener, false)

		return () => {
			window.removeEventListener('message', onMessageListener, false)
		}
	}, [])

	return (
		<>
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
				<div className="w-full h-[300px] border border-dashed flex items-center justify-center">
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
				</div>
			</Modal>
		</>
	)
}

export default GameComunicator
