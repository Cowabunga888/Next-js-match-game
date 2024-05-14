import { SegmentedControl } from '@mantine/core'
import { useState } from 'react'
import ClothesSegmentPanel from './chothes-panel'
import { ECharacterClothesActions } from '../../../providers/type'

interface IClothesSegment {
	costume: {
		shirt: { url: {origin: string, thumb: string}[] }
		hat: { url: {origin: string, thumb: string}[] }
		wing: { url: {origin: string, thumb: string}[] }
	}
}

function ClothesSegment({ costume }: Readonly<IClothesSegment>) {
	const [value, setValue] = useState('shirt')

	const tabsData = [
		{
			value: 'shirt',
			innerText: 'Shirt',
			panel: <ClothesSegmentPanel key={'shirt'} actionType={ECharacterClothesActions.UPDATE_SHIRT} urls={costume.shirt.url} />,
		},
		{
			value: 'hat',
			innerText: 'Hat',
			panel: <ClothesSegmentPanel key={'hat'} actionType={ECharacterClothesActions.UPDATE_HAT} urls={costume.hat.url} />,
		},
		{
			value: 'wing',
			innerText: 'Wing',
			panel: <ClothesSegmentPanel key={'wing'} actionType={ECharacterClothesActions.UPDATE_WING} urls={costume.wing.url} />,
		},
	]

	return (
		<div className="w-[400px] p-2 border border-lime-600 border-dashed rounded-md">
			<SegmentedControl
				color="lime"
				fullWidth
				data={tabsData.map((tab)=>tab.value)}
				withItemsBorders={false}
				onChange={setValue}
			/>

			{tabsData.map((tab) => tab.value === value && tab.panel)}
		</div>
	)
}

export default ClothesSegment
