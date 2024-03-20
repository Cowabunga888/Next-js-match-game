import { ECharacterClothesActions, ICharacterClothes, ICharacterClothesActions } from "../type"

export const characterStateHanlder = (state: ICharacterClothes, action: ICharacterClothesActions) => {
	switch (action.type) {
		case ECharacterClothesActions.UPDATE_SHIRT:
			return {
				...state,
				costume: {
					...state.costume,
					shirt: { url: action.payload.url },
				},
			}
		case ECharacterClothesActions.UPDATE_HAT:
			return {
				...state,
				costume: {
					...state.costume,
					hat: { url: action.payload.url },
				},
			}
		case ECharacterClothesActions.UPDATE_WING:
			return {
				...state,
				costume: {
					...state.costume,
					wing: { url: action.payload.url },
				},
			}

		default:
			return state
	}
}
