'use client'

import { APP_ROUTER } from '@/config'
import SelectGameCard from '@/views/game/components/select-game-container'
import AppHeader from '../components/app-header'
import { GameSelection } from './data'

function GamePageView() {

	return (
		<>
			<AppHeader />
			<div className="flex flex-col gap-3 p-3">
				<p className="text-lg font-semibold text-gray-500">select your game!!</p>

				<div className="grid grid-cols-12 gap-3">
					{GameSelection.map((item) => {
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
