import { Button, Indicator, Select } from '@mantine/core'

import Link from 'next/link'
import AppHeader from '../components/app-header'
import BForm from './components/b-form'
import './style/style.css'

function LandingPage() {
	return (
		<div className="w-full h-screen overflow-hidden text-gray-800">
			<AppHeader />

			<div className="landing-content">
				<div className="landing-content__block flex gap-3">
					<Indicator processing color="red" withBorder size={12}>
						<Link href={'/game'}>
							<Button color="#1A3F55">Started</Button>
						</Link>
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

				<div className="landing-content__block !h-[500px] !col-span-4">
					<BForm />
				</div>
			</div>
		</div>
	)
}

export default LandingPage
