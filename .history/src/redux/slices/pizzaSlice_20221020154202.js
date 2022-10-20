import axios from 'axios'
import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit'

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async params => {
  const { order, sortBy, category, search, currentPage } = params
  const { data } = await axios.get(
    `https://63427733ba4478d4783c44ef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
  )
  return data
})

const initialState = {
  items: []
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    }
  }
  extraReducers: {
    [fetchPizzas, isFulfilled]: (state, action) => {
      console.log(state)
    }
  }
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
