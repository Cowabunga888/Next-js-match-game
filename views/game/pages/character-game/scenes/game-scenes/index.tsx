import { useState } from "react"
import CharacterClothesScene from "../clothes"
import CharacterStartScene from "../start"

function CharacterGameScenes() {
  const [scene, setScene] = useState<string>('start')

	const hanldeChangeScene = (scene: string) => {
		setScene(scene)
	}

	switch (scene) {
		case 'start':
			return (
				<CharacterStartScene hanldeChangeScene={hanldeChangeScene}/>
			)
		case 'friends':
			return <CharacterClothesScene hanldeChangeScene={hanldeChangeScene}/>
		case 'missions':
			return <CharacterClothesScene hanldeChangeScene={hanldeChangeScene}/>
		case 'clothes':
			return <CharacterClothesScene hanldeChangeScene={hanldeChangeScene}/>

		default:
			break
	}
}

export default CharacterGameScenes
