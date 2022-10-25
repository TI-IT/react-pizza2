import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { CartItem } from './cartSlice'

//Если все значения одного типа string например-сокращенно Record <ключ , значение>
// type FetchPizzasArgs = Record<string, string>

export const fetchPizzas = createAsyncThunk<CartItem[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params, thunkAPI: any) => {
    const { order, sortBy, category, search, currentPage } = params
    const { data } = await axios.get(
      `https://63427733ba4478d4783c44ef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )

    if (data.length === 0) {
      thunkAPI.dispatch(alert('Пиццы пустые'))
      return thunkAPI.rejectWithValue('Пиццы пустые')
    }

    return thunkAPI.fulfillWithValue(data)
  }
)

type Pizza = {
  id: string
  title: string
  price: number
  imageUrl: string
  types: number[]
  sizes: number[]
}
interface PizzaSliceState {
  items: Pizza[]
  status: 'loading' | 'success' | 'error'
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
