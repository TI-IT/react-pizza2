import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Sort = {
  name: string
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price'
}

interface FilterSliceState {
  searchValue: string
  categoryId: number
  currentPage: number
  sort: Sort
}

const initialState: FilterSliceState = {
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
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setFilters(state, action: PayloadAction<Sort>) {
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
