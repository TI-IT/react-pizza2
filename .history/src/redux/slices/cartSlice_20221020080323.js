import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    }
  }
})

export const { setCategoryId } = cartSlice.actions

export default filterSlice.reducer
