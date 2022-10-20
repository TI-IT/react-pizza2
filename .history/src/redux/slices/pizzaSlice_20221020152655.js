import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async () => {
  const { data } = await axios.get(
    `https://63427733ba4478d4783c44ef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
  )
  return data
})

const fetchPizzas = async () => {
  setIsLoading(true)

  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
  const sortBy = sort.sortProperty.replace('-', '')
  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''

  // await-делает синхронным (работает только с async в РОДИТЕЛЬСКОЙ ФУНКЦИИ)
  try {
    dispatch(setItems(data))
  } catch (error) {
    console.log('ERROR:', error)
    alert('ошибка при получении пицц')
  } finally {
    setIsLoading(false)
  }

  window.scrollTo(0, 0)
}
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
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
