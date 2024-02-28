import { Button } from '@mantine/core'
import React, { useEffect } from 'react'

interface IGameComunicator {
	children?: React.ReactNode
}

interface IMESSAGE {
	messageType: string
	modalType?: string
	data: {
		message: string
	}
}

function GameComunicator({ children }: Readonly<IGameComunicator>) {
	const data: IMESSAGE = {
		messageType: 'NEXT_JS_MESSAGE',
		data: {
			message: 'Next js -> index.js',
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
			<div className="absolute top-0 left-0">
				<Button
					className=""
					onClick={() => {
						sendMessage(data)
					}}
				>
					SendMessage
				</Button>
			</div>

			{children}
		</>
	)
}

export default GameComunicator
