import { RiAncientGateFill } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

function AppHeader() {
	return (
		<div className='flex justify-between items-center h-[70px] border-b px-5 bg-white'>
			<Link href={'/'} className="font-semibold text-lg flex gap-2">
				<RiAncientGateFill /> Welcome!!!
			</Link>

			<div className="w-auto flex gap-10">
				<span>Home</span>
				<span>Product</span>
				<span>About</span>
				<span>Pricing</span>
			</div>

			<span className="font-semibold text-lg">Sign in</span>
		</div>
	)
}

export default AppHeader
