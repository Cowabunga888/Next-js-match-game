import { ECharacterClothesActions, ICharacterClothes, ICharacterClothesActions } from "../type"

export const characterStateHanlder = (state: ICharacterClothes, action: ICharacterClothesActions) => {
  const { type, payload } = action
  switch (type) {
    case ECharacterClothesActions.UPDATE_SHIRT:
      state.costume.shirt.url = payload.url ?? ''
      return { ...state }
    case ECharacterClothesActions.UPDATE_HAT:
      state.costume.hat.url = payload.url ?? ''
      return { ...state }
    case ECharacterClothesActions.UPDATE_WING:
      state.costume.wing.url = payload.url ?? ''
      return { ...state }
    default:
      return { ...state }
  }
}
