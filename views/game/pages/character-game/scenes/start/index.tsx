import { FallbackImage } from '@/views/components/fallback-image'
import React from 'react'
import { useCharacterClothes } from '../../providers'
import { Button } from '@mantine/core'

interface ICharacterStartScene {
	hanldeChangeScene: (scene: string) => void
}

function CharacterStartScene({ hanldeChangeScene }: Readonly<ICharacterStartScene>) {
	const { clothes } = useCharacterClothes()

	return (
		<div className="game-container">
			<div className="character-container">
				<FallbackImage
					width={400}
					height={400}
					src="/assets/game/character-game/thiso-character.png"
					className="main-character z-10"
					alt=""
				/>
				<FallbackImage width={400} height={400} src={clothes.costume.hat.url} className="absolute z-20" alt="" />
				<FallbackImage width={400} height={400} src={clothes.costume.shirt.url} className="absolute z-20" alt="" />
				<FallbackImage width={400} height={400} src={clothes.costume.wing.url} className="absolute z-0" alt="" />
			</div>

			<div className="bottom-nav">
				<Button
					color="lime"
					onClick={() => {
						hanldeChangeScene('friends')
					}}
					type="button"
				>
					Bạn bè
				</Button>
				<Button
					color="lime"
					onClick={() => {
						hanldeChangeScene('missions')
					}}
					type="button"
				>
					Nhiệm vụ
				</Button>
				<Button
					color="lime"
					onClick={() => {
						hanldeChangeScene('clothes')
					}}
					type="button"
				>
					Thời trang
				</Button>
			</div>
		</div>
	)
}

export default CharacterStartScene
