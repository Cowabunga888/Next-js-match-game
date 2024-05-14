import { FallbackImage } from '@/views/components/fallback-image'
import ClothesSegment from './clothes-segment'
import { RiArrowLeftDoubleLine } from '@remixicon/react'
import { useCharacterClothes } from '../../providers'

interface ICharacterClothesScene {
	hanldeChangeScene: (scene: string) => void
}

function CharacterClothesScene({ hanldeChangeScene }: Readonly<ICharacterClothesScene>) {
	const { clothes } = useCharacterClothes()

	const costume = {
		shirt: {
			url: [
				{
					origin: '/assets/game/character-game/clothes/shirt/shirt-01.png',
					thumb: '/assets/game/character-game/clothes/shirt/shirt-thumb-01.png',
				},
				{
					origin: '/assets/game/character-game/clothes/shirt/shirt-02.png',
					thumb: '/assets/game/character-game/clothes/shirt/shirt-thumb-02.png',
				},
				{
					origin: '/assets/game/character-game/clothes/shirt/shirt-03.png',
					thumb: '/assets/game/character-game/clothes/shirt/shirt-thumb-03.png',
				},
			],
		},
		hat: {
			url: [
				{
					origin: '/assets/game/character-game/clothes/hat/hat-01.png',
					thumb: '/assets/game/character-game/clothes/hat/hat-thumb-01.png',
				},
				{
					origin: '/assets/game/character-game/clothes/hat/hat-02.png',
					thumb: '/assets/game/character-game/clothes/hat/hat-thumb-02.png',
				},
				{
					origin: '/assets/game/character-game/clothes/hat/hat-03.png',
					thumb: '/assets/game/character-game/clothes/hat/hat-thumb-03.png',
				},
			],
		},
		wing: {
			url: [
				{
					origin: '/assets/game/character-game/clothes/wing/wing-01.png',
					thumb: '/assets/game/character-game/clothes/wing/wing-thumb-01.png',
				},
				{
					origin: '/assets/game/character-game/clothes/wing/wing-02.png',
					thumb: '/assets/game/character-game/clothes/wing/wing-thumb-02.png',
				},
				{
					origin: '/assets/game/character-game/clothes/wing/wing-03.png',
					thumb: '/assets/game/character-game/clothes/wing/wing-thumb-03.png',
				},
			],
		},
	}

	return (
		<div className="game-container">
			<button
				type="button"
				onClick={() => {
					hanldeChangeScene('start')
				}}
				className="absolute top-10 left-10 flex gap-2 text-[#D75C5D] font-semibold"
			>
				<RiArrowLeftDoubleLine size={25}/>Back
			</button>
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

			<ClothesSegment costume={costume} />
		</div>
	)
}

export default CharacterClothesScene
