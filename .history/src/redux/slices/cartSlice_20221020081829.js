import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
    },
    revoveItem(state, action) {
      state.items.filter(obj => obj.id !== action.payload)
    },
    clearItem(state, action) {
      state.items = []
    }
  }
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer
