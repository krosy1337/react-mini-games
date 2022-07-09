import {IChessGame} from "types/chess"
import {Board} from "types/chess/Board"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Cell} from "types/chess/Cell"
import {Colors} from "types/chess/Colors"
import { Player } from "types/chess/Player"

const initialState: IChessGame = {
    board: new Board(),
    selectedCell: null,
    whitePlayer: new Player(Colors.WHITE, "White"),
    blackPlayer: new Player(Colors.BLACK, "Black"),
    currentPlayer: null,
    blackTimer: 300,
    whiteTimer: 300,
    winner: null,
    isEnded: false,
}

export const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        setBoard: (state, action: PayloadAction<Board>) => {
            state.board = action.payload
        },
        setSelectedCell: (state, action: PayloadAction<Cell | null>) => {
            state.selectedCell = action.payload
        },
        setWhitePlayer: (state) => {
            state.whitePlayer = new Player(Colors.WHITE, "White")
        },
        setBlackPlayer: (state) => {
            state.whitePlayer = new Player(Colors.BLACK, "Black")
        },
        setCurrentPlayer: (state, action: PayloadAction<Player | null>) => {
            state.currentPlayer = action.payload
        },
        decrementBlackTimer: (state) => {
            if (state.blackTimer === 0) {
                state.isEnded = true
                state.winner = state.whitePlayer
                state.currentPlayer = null
            } else {
                state.blackTimer -= 1
            }
        },
        decrementWhiteTimer: (state) => {
            if (state.whiteTimer === 0) {
                state.isEnded = true
                state.winner = state.blackPlayer
                state.currentPlayer = null
            } else {
                state.whiteTimer -= 1
            }
        },
        resetWhiteTimer: (state) => {
            state.whiteTimer = 300
        },
        resetBlackTimer: (state) => {
            state.blackTimer = 300
        },
        endGame: (state, action: PayloadAction<Player | undefined>) => {
            state.isEnded = true
            state.winner = action.payload || null
            state.currentPlayer = null
            state.selectedCell = null
        },
        startGame: (state) => {
            state.isEnded = false
            state.winner = null
        },
    },
})

export const {setBoard, setSelectedCell, setWhitePlayer, setCurrentPlayer, setBlackPlayer, decrementBlackTimer,
    decrementWhiteTimer, resetWhiteTimer, resetBlackTimer, endGame, startGame} = chessSlice.actions

export default chessSlice.reducer