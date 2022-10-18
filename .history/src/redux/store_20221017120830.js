import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/filterSlices'

export const store = configureStore({
  reducer: {
    counter
  }
})

console.log(store)
