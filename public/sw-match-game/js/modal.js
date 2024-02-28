const winningModalCotent = ()=> ({
  messageType: 'INDEX_JS_CLICKED',
  modalType: 'WIN',
  data: {
    message: 'You win!!!'
  }
})
const losingModalCotent = ()=>({
  messageType: 'INDEX_JS_CLICKED',
  modalType: 'WIN',
  data: {
    message: 'You lose ಥ_ಥ'
  }
})

export {winningModalCotent, losingModalCotent}