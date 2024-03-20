'use client'
import { CharacterClothesProvider } from './providers'
import CharacterGameScenes from './scenes/game-scenes'
import './style/index.css'

function CharacterGamePage() {
	return (
		<div className="bg-[url('https://free-vectors.net/_ph/6/805542910.jpg')] bg-center bg-contain">
			<CharacterClothesProvider>
				<CharacterGameScenes />
			</CharacterClothesProvider>
		</div>
	)
}

export default CharacterGamePage
