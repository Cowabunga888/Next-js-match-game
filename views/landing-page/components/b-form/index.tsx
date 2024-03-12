import { Button, Switch, TextInput } from '@mantine/core'
import { RiAtLine, RiEye2Line } from '@remixicon/react'

function BForm() {
	return (
		<div className="w-full h-full flex flex-col gap-10 !items-start !justify-start">
			<span className="font-semibold text-xl text-[#1A3F55]">Sign in</span>
			<div className="w-full flex flex-col gap-3">
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
			</div>

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
	)
}

export default BForm
