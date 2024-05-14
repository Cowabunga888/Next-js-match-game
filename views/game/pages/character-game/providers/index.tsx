import React, { Dispatch, createContext, useContext, useMemo, useReducer } from 'react'
import { characterClothesState } from './initial-state'
import { characterStateHanlder } from './actions/character-clothes-action'
import { ICharacterClothes, ICharacterClothesActions } from './type'

type TClothesReducer = {
	clothes: ICharacterClothes
	setClothes: Dispatch<ICharacterClothesActions>
}

const CharacterClothesContext = createContext<TClothesReducer>({clothes: characterClothesState, setClothes: ()=>{}})

// hook
const useCharacterClothes = () => {
	const context = useContext(CharacterClothesContext)
	return context
}

function CharacterClothesProvider({ children }: Readonly<{ children: React.ReactNode }>) {
	const [clothes, setClothes] = useReducer(characterStateHanlder, characterClothesState)

	const value: TClothesReducer = useMemo(() => {
		return { clothes, setClothes }
	}, [clothes, setClothes])

	return <CharacterClothesContext.Provider value={value}>{children}</CharacterClothesContext.Provider>
}

export { CharacterClothesProvider, useCharacterClothes }
