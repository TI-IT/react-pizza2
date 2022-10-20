import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

const filterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    }
  }
})

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer
