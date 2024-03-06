'use client'

import { Button, Indicator, Select, Switch, TextInput } from '@mantine/core'
import { RiAncientGateFill, RiAtLine, RiEye2Line } from '@remixicon/react'
import { useRouter } from 'next/navigation'

import './style/style.css'

function LandingPage() {
	const router = useRouter()

	return (
		<div className="w-full h-screen overflow-hidden text-gray-800">
			<div className="flex justify-between items-center h-[70px] border-b px-5">
				<span className="font-semibold text-lg flex gap-2">
					<RiAncientGateFill /> Welcome!!!
				</span>

				<div className="w-auto flex gap-10">
					<span>Home</span>
					<span>Product</span>
					<span>About</span>
					<span>Pricing</span>
				</div>

				<span className="font-semibold text-lg">Sign in</span>
			</div>

			<div className="landing-content">
				<div className="landing-content__block flex gap-3">
					<Indicator processing color="red" withBorder size={12}>
						<Button
							color="#1A3F55"
							onClick={() => {
								router.push('/game')
							}}
						>
							Started
						</Button>
					</Indicator>
					<Button variant="outline" color="gray" classNames={{ label: 'text-[#1A3F55]' }}>
						Button
					</Button>
				</div>

				<div className="landing-content__block">
					<Button color="#1A3F55">Open dialog</Button>
				</div>

				<div className="landing-content__block">
					<Select placeholder="Pick value" data={['React', 'Angular', 'Vue', 'Svelte']} />
				</div>

				<div className="landing-content__block !h-[500px] flex flex-col gap-10 !items-start !justify-start !col-span-3 p-4">
					<span className="font-semibold text-xl text-[#1A3F55]">Sign in</span>
					<TextInput
						className="w-full"
						rightSection={<RiAtLine size={20} />}
						label="Your email"
						placeholder="Your email"
					/>
					<TextInput
						className="w-full"
						mt="md"
						rightSection={<RiEye2Line size={20} />}
						label="Your password"
						placeholder="Your password"
						type="password"
					/>

					<div className="w-full flex justify-between">
						<Switch defaultChecked label="Remember me" color="#1A3F55" />
						<span className="font-bold text-sm">Forgot password?</span>
					</div>

					<Button color="#1A3F55" fullWidth>
						Get Started
					</Button>

					<p>
						Don&apos;t have an account? <span className="font-bold">Sign up</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
