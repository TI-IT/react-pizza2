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
      const newItems = [...state.items, action.payload]
      state.items.push(action.payload)
      state.totalPrice = 
    },
    revoveItem(state, action) {
      state.items.filter(obj => obj.id !== action.payload)
    },
    clearItem(state) {
      state.items = []
    }
  }
})

export const { addItem, revoveItem, clearItem } = cartSlice.actions

export default cartSlice.reducer
