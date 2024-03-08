import { Box, Button, LoadingOverlay, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useEffect, useMemo, useState } from 'react'

interface IGameComunicator {
	children?: React.ReactNode
	frameId: string,
	frameData: any
}

function GameComunicator({ children, frameId, frameData }: Readonly<IGameComunicator>) {
	console.log(frameId)
	const [opened, { open, close }] = useDisclosure(false)
	const [isLoading, setIsLoading] = useState(true)

	const [result, setResult] = useState<string>('')

	const onMessageListener = (event: any) => {
		if (event?.data?.messageType === 'INDEX_JS_MESSAGE') {
			console.log('Next js log: ', event?.data?.data?.message)
			setResult(event?.data?.data?.message)
			open()
		}
	}

	const sendMessage = () => {
		const iframe = document.getElementById(frameId) as HTMLIFrameElement

		switch (frameId) {
			case 'match-game-v1':
				iframe?.contentWindow?.postMessage(frameData, 'https://match-game-basic.web.app')
				break
			case 'match-game-v2':
				iframe?.contentWindow?.postMessage(frameData, 'https://match-game-bg-basic.web.app')
				break
			case 'spin-wheel-basic':
				iframe?.contentWindow?.postMessage(frameData, 'https://spin-wheel-e1e07.web.app')
				break
			case 'scratch-card-basic':
				iframe?.contentWindow?.postMessage(frameData, 'https://scratch-card-699dd.web.app')
				break
			default:
				break
		}

		close()
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
							onClick={sendMessage}
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
