import { configureStore } from '@reduxjs/toolkit'
import ticTacToeReducer from "./slices/ticTacToeSlice"
import appReducer from "./slices/appSlice"

export const store = configureStore({
    reducer: {
        ticTacToe: ticTacToeReducer,
        app: appReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch