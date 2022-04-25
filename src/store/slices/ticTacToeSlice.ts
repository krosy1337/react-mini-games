import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {GameSymbols, ICell, IGame, IWinLine} from "types/TicTacToe"


const initState = (firstMove: GameSymbols.X | GameSymbols.O = GameSymbols.X): IGame => {
    const board = new Array(9).fill(0).map((_, i): ICell => {
        return {
            id: i,
            symbol: null,
        }
    })

    return {
        board,
        currentMove: firstMove,
        winner: null,
        winLine: null,
        isFinished: false,
    }
}

const initialState: IGame = initState()

export const ticTacToeSlice = createSlice({
    name: 'ticTacToe',
    initialState,
    reducers: {
        makeMove: (state, action: PayloadAction<{id: number, symbol: GameSymbols.X | GameSymbols.O}>) => {
            state.board[action.payload.id].symbol = action.payload.symbol
        },
        setCurrentMove: (state, action: PayloadAction<GameSymbols.X | GameSymbols.O>) => {
            state.currentMove = action.payload
        },
        setWinLine: (state, action: PayloadAction<IWinLine>) => {
            state.winLine = action.payload
        },
        setWinner: (state, action: PayloadAction<GameSymbols>) => {
            state.winner = action.payload
            state.isFinished = true
        },
        resetGame: (state, action: PayloadAction<GameSymbols.X | GameSymbols.O>) => {
            state.board = initState(action.payload).board
            state.winner = null
            state.currentMove = action.payload
            state.isFinished = false
        },
    },
})

export const { makeMove, setWinner, setCurrentMove, resetGame, setWinLine } = ticTacToeSlice.actions

export default ticTacToeSlice.reducer