import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

in
const initialState = {
  searchValue: '',
  categoryId: 0,
    
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setFilters(state, action) {
      state.sort = action.payload.sort
      state.currentPage = Number(action.payload.currentPage)
      state.categoryId = Number(action.payload.categoryId)
    }
  }
})

export const selectFilter = (store: RootState) => store.filter
export const selectSort = (store: RootState) => store.filter.sort

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions

export default filterSlice.reducer
