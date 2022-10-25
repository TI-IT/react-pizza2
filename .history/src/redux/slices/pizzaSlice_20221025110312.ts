import axios from 'axios'
import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
  const { order, sortBy, category, search, currentPage } = params
  const { data } = await axios.get(
    `https://63427733ba4478d4783c44ef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
  )

  if (data.length === 0) {
    thunkAPI.dispatch(alert('Пиццы пустые'))
    return thunkAPI.rejectWithValue('Пиццы пустые')
  }

  return thunkAPI.fulfillWithValue(data)
})

interface PizzaSliceState {
  items
}

const initialState: PizzaSliceState = {
  items: [],
  status: 'loading' // loading | success | error
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    }
  },
  extraReducers: {
    [fetchPizzas.pending]: state => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error'
      state.items = []
    }
  }
})

export const selectPizzaData = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
