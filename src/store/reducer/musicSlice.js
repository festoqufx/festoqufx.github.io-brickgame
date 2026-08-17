import { createSlice } from '@reduxjs/toolkit'
import { loadMusic } from '../../utils/storage'

const initialState = loadMusic(true)

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    toggle(state) {
      return !state
    }
  }
})

export const { toggle } = musicSlice.actions

export default musicSlice.reducer
