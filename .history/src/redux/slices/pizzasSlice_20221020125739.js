import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {}
  }
})

export const { setItems } = cartSlice.actions

export default pizzasSlice.reducer
