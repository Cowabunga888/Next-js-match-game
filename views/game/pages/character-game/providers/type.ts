export interface ICharacterClothes {
  costume: {
    shirt: { url: string },
    hat: { url: string },
    wing: { url: string },
  }
}

export enum ECharacterClothesActions {
  UPDATE_SHIRT = 'UPDATE_SHIRT',
  UPDATE_HAT = 'UPDATE_HAT',
  UPDATE_WING = 'UPDATE_WING',
}

export interface ICharacterClothesActions {
  type: ECharacterClothesActions,
  payload: {
    url?: string
  }
}