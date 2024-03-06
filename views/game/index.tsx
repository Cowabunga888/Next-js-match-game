'use client'

import { APP_ROUTER } from '@/config'
import SelectGameCard from '@/views/game/components/select-game-container'
import AppHeader from '../components/app-header'

function GamePageView() {
	const gameList = [
		{
			id: '01',
			image: 'https://img001.prntscr.com/file/img001/SuAYYGS3QJaWzSMGC2ExUg.png',
			title: 'Matching Game V1 🧩',
			description:
				'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			url: APP_ROUTER.game.matchGameV1,
		},
		{
			id: '02',
			image: 'https://img001.prntscr.com/file/img001/X9MfXPhwRJK8sKeeEnZIjg.png',
			title: 'Matching Game V2 🎄',
			description:
				'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			url: APP_ROUTER.game.matchGameV2,
		},
		{
			id: '03',
			image: 'https://img001.prntscr.com/file/img001/AmKZKaDfRVuhLSvgB5Ou0A.png',
			title: 'Spin wheel 🎡',
			description:
				'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			url: APP_ROUTER.game.spinWheel,
		},
	]

	return (
		<>
			<AppHeader />
			<div className="flex flex-col gap-3 p-3">
				<p className="text-lg font-semibold text-gray-500">select your game!!</p>

				<div className="grid grid-cols-12 gap-3">
					{gameList.map((item) => {
						return (
							<div className="col-span-6 min-[780px]:col-span-3" key={item.id}>
								<SelectGameCard
									image={item.image}
									title={item.title}
									description={item.description}
									url={item.url}
								/>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default GamePageView
