import { GAME_NAME } from "@/views/game/type/game-type";

export default Object.freeze({
  root: {
    path: '/'
  },
  game: {
    path: '/game',
    matchGameV1: '/game/' + GAME_NAME.MATCH_GAME_V1,
    matchGameV2: '/game/' + GAME_NAME.MATCH_GAME_V2,
  }
})