import {combineReducers, configureStore} from '@reduxjs/toolkit'
import ticTacToeReducer from "./slices/ticTacToeSlice"
import appReducer from "./slices/appSlice"
import chessReducer from "./slices/chessSlice"
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    ticTacToe: ticTacToeReducer,
    chess: chessReducer,
    app: appReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['app'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'chess/setBoard', 'chess/setSelectedCell',
                    'chess/setCurrentPlayer'],
                ignoreState: true,
            },
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch