'use client'

import { APP_ROUTER } from '@/config'
import SelectGameCard from '@/views/game/components/select-game-card'

function GamePageView() {
	const gameList = [
		{
      id: '01',
			image: 'https://img001.prntscr.com/file/img001/-cSKsVHORFCiRZxk2AWt7g.png',
			title: 'Matching Game 🧩',
			description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			url: APP_ROUTER.game.matchGame,
		},
		{
      id: '02',
			image: 'https://img001.prntscr.com/file/img001/-cSKsVHORFCiRZxk2AWt7g.png',
			title: 'Matching Game 🧩',
			description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			url: APP_ROUTER.game.matchGame,
		},
		{
      id: '03',
			image: '',
			title: 'Not found game ❌',
			description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			url: '/not-found',
		},
	]

	return (
		<div className="flex flex-col gap-3 p-3">
			<p className="text-lg font-semibold text-gray-500">select your game!!</p>

			<div className="grid grid-cols-12 gap-3">
				{gameList.map((item) => {
					return (
            <div className="col-span-6" key={item.id}>
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
	)
}

export default GamePageView
