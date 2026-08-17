import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import { saveHighScores, saveLastGame, saveMusic } from '../utils/storage'

const store = configureStore({
  reducer
})

let timer = null
store.subscribe(() => {
  const { games, music, game } = store.getState()
  clearTimeout(timer)
  timer = setTimeout(() => {
    saveHighScores(games)
    saveMusic(music)
    saveLastGame(game)
  }, 120)
})

export default store
