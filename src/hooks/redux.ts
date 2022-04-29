import {bindActionCreators} from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import { setMode } from "store/slices/appSlice"
import {setWinner, makeMove, setCurrentMove, resetGame, setWinLine} from "store/slices/ticTacToeSlice"
import {RootState} from "store/store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const actionCreators = {
    makeMove,
    setWinner,
    setCurrentMove,
    resetGame,
    setWinLine,
    setMode,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actionCreators, dispatch)
}