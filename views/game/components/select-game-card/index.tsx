import { FallbackImage } from '@/views/components/fallback-image'
import Link from 'next/link'
import './style.css'
interface ISelectGameCardProps {
	image: string
	title: string
	description?: string
	url: string
}

const SelectGameCard = ({ image, title, description, url }: ISelectGameCardProps) => {
	return (
		<Link href={url} className="game-card-selection">
			<FallbackImage
				className="object-cover m-auto w-20 h-20 rounded-md flex-shrink-0"
				src={image}
				alt="game-thumb-nail"
				width={10}
				height={10}
			/>

			<div className="w-full p-3 overflow-hidden">
				<div className="truncate text-xl font-semibold text-gray-700">{title}</div>
				<div className='line-clamp-3 italic'>{description}</div>
			</div>
		</Link>
	)
}

export default SelectGameCard
