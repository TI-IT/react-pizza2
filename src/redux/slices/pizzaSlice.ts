import axios from 'axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

//Если все значения одного типа string например-сокращенно Record <ключ , значение>
// type FetchPizzasArgs = Record<string, string>
type Pizza = {
  id: string
  title: string
  price: number
  imageUrl: string
  types: number[]
  sizes: number[]
}
enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}
interface PizzaSliceState {
  items: Pizza[]
  status: Status
}

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params, thunkAPI: any) => {
    const { order, sortBy, category, search, currentPage } = params
    const { data } = await axios.get<Pizza[]>(
      `https://63427733ba4478d4783c44ef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )

    if (data.length === 0) {
      thunkAPI.dispatch(alert('Пиццы пустые'))
      return thunkAPI.rejectWithValue('Пиццы пустые')
    }

    return thunkAPI.fulfillWithValue(data)
  }
)

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING // loading | success | error
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
    // extraReducers: {
    //   [fetchPizzas.pending]: state => {
    //     state.status = 'loading'
    //     state.items = []
    //   },
    //   [fetchPizzas.fulfilled]: (state, action) => {
    //     state.items = action.payload
    //     state.status = 'success'
    //   },
    //   [fetchPizzas.rejected]: (state, action) => {
    //     state.status = 'error'
    //     state.items = []
    //   }
    // }
  }
})

export const selectPizzaData = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
