'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface IFallbackImage {
	fallback?: string
	className?: string
	alt: string
	src: string
	width: number | `${number}` | undefined
	height: number | `${number}` | undefined
}

export const FallbackImage = ({ fallback, alt, src, className, width, height, ...props }: IFallbackImage) => {
	const FallBackImgUrl = fallback ?? '/assests/images/fallback.webp'

	const [error, setError] = useState(false)

	useEffect(() => {
		if(!src) setError(true)
	}, [src])

	return (
		<Image
			className={className}
			alt={alt}
			src={error ? FallBackImgUrl : src}
			width={width}
			height={height}
			unoptimized
		/>
	)
}
