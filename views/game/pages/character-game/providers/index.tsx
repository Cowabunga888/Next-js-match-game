import React, { createContext, useContext, useMemo, useReducer } from 'react'
import { characterStateHanlder } from './actions/character-clothes-action'
import { characterClothesState } from './initial-state'
import { ICharacterClothes } from './type'

const initState: ICharacterClothes = characterClothesState
const CharacterClothesContext = createContext<any>(initState)

interface ICharacterClothesProvider {
	children: React.ReactNode
}

const useCharacterClothes = () => {
	const context = useContext(CharacterClothesContext)
	return context
}

function CharacterClothesProvider({ children }: Readonly<ICharacterClothesProvider>) {
	const [clothes, setClothes] = useReducer<any>(characterStateHanlder, initState)
	const contextValue: any = useMemo(() => ({ clothes, setClothes }), [clothes, setClothes])

	return <CharacterClothesContext.Provider value={contextValue}>{children}</CharacterClothesContext.Provider>
}

export { CharacterClothesProvider, useCharacterClothes }
