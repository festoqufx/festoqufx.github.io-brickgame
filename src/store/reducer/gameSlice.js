import { createSlice } from '@reduxjs/toolkit'
import { loadLastGame } from '../../utils/storage'
import { initGameData } from '../../utils/games'

const saved = loadLastGame(0)
const initialState = saved >= 0 && saved < initGameData.length ? saved : 0

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action) => {
      return action.payload
    }
  }
})

export const { setGame } = gameSlice.actions

export default gameSlice.reducer
