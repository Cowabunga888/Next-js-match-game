import { GAME_NAME } from "@/views/game/type/game-type";

export default Object.freeze({
  root: {
    path: '/'
  },
  game: {
    path: '/game',
    matchGameV1: '/game/' + GAME_NAME.MATCH_GAME_V1,
    matchGameV2: '/game/' + GAME_NAME.MATCH_GAME_V2,
    spinWheel: '/game/' + GAME_NAME.SPIN_WHEEL,
    scratchCard: '/game/' + GAME_NAME.SCRATCH_CARD,
    jackpot: '/game/' + GAME_NAME.JACKPOT,
    luckyBox: '/game/' + GAME_NAME.LUCKY_BOX,
    brandQuiz: '/game/' + GAME_NAME.BRAND_QUIZ,
  }
})