'use client'

import BForm from '@/views/landing-page/components/b-form'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { RiAncientGateFill } from '@remixicon/react'
import Link from 'next/link'

function AppHeader() {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<div className="flex justify-between items-center h-[70px] border-b px-5 bg-white">
			<Link href={'/'} className="font-semibold text-lg flex gap-2">
				<RiAncientGateFill /> Gamification!!!
			</Link>

			<div className="w-auto gap-10 md:flex hidden">
				<Link className="hover:text-gray-500" href={'/'}>
					Home
				</Link>
				<Link className="hover:text-gray-500" href={'/game'}>
					Games
				</Link>
				<span className='text-gray-300'>About</span>
				<span className='text-gray-300'>Pricing</span>
			</div>

			<button onClick={open} type="button" className="font-semibold text-lg">
				Sign in
			</button>

			<Modal centered opened={opened} onClose={close} title="Authentication">
				<BForm />
			</Modal>
		</div>
	)
}

export default AppHeader
