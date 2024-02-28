import { GAME_NAME } from "@/views/game/type/game-type";

export default Object.freeze({
  root: {
    path: '/'
  },
  game: {
    path: '/game',
    matchGame: '/game/' + GAME_NAME.MATCH_GAME
  }
})