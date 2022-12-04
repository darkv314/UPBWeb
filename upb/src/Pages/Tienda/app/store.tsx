import { configureStore } from '@reduxjs/toolkit'
import counerReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counerReducer,
    }
})