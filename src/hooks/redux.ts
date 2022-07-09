import {bindActionCreators} from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {setMode} from "store/slices/appSlice"
import {setWinner, makeMove, setCurrentMove, resetGame, setWinLine} from "store/slices/ticTacToeSlice"
import {setBoard, setSelectedCell, setWhitePlayer, setBlackPlayer, setCurrentPlayer,
    decrementBlackTimer, decrementWhiteTimer, resetWhiteTimer, resetBlackTimer, endGame, startGame} from "store/slices/chessSlice"
import {RootState} from "store/store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const actionCreators = {
    makeMove,
    setWinner,
    setCurrentMove,
    resetGame,
    setWinLine,
    setMode,
    setBoard,
    setSelectedCell,
    setWhitePlayer,
    setBlackPlayer,
    setCurrentPlayer,
    decrementBlackTimer,
    decrementWhiteTimer,
    resetWhiteTimer,
    resetBlackTimer,
    endGame,
    startGame,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actionCreators, dispatch)
}