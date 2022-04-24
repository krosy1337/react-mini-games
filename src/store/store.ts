import { configureStore } from '@reduxjs/toolkit'
import ticTacToeReducer from "./slices/ticTacToeSlice"

export const store = configureStore({
    reducer: {
        ticTacToe: ticTacToeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch