import Image from 'next/image'
import { useCharacterClothes } from '../../../../providers'
import { ECharacterClothesActions } from '../../../../providers/type'

interface IClothesSegmentPanel {
	urls: { origin: string; thumb: string }[]
	actionType: ECharacterClothesActions
}

function ClothesSegmentPanel({ urls, actionType }: Readonly<IClothesSegmentPanel>) {
	const { setClothes } = useCharacterClothes()

	const handleChangeClothes = (url: string) => {
		setClothes({ type: actionType, payload: { url } })
	}

	return (
		<div className="flex flex-wrap gap-3">
			{urls.map((url, i) => {
				return (
					<button
						onClick={() => handleChangeClothes(url.origin)}
						type="button"
						className="overflow-hidden w-14 h-14 flex items-center justify-center"
						key={i}
					>
						<Image width={400} height={400} src={url.thumb} alt="" className="w-auto h-auto object-fill" />
					</button>
				)
			})}
		</div>
	)
}

export default ClothesSegmentPanel
