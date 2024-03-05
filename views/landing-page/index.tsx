'use client'

import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'

function LandingPage() {
	const router = useRouter()
	return (
		<>
			Welcome!
			<Button
				color="lime"
				onClick={() => {
					router.push('/game')
				}}
			>
				Getting Started
			</Button>
		</>
	)
}

export default LandingPage
