import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {GameSymbols, ICell, IGame} from "types/TicTacToe"

const initState = (): IGame => {
    const board = new Array(9).map((i): ICell => {
        return {
            id: i,
            symbol: null,
        }
    })

    return {
        board,
        currentMove: GameSymbols.X,
        winner: null,
        isFinished: false,
    }
}

const initialState = initState()

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

export const ticTacToeSlice = createSlice({
    name: 'ticTacToe',
    initialState,
    reducers: {
        makeMove: (state, action: PayloadAction<number>) => {
            const id = state.board.indexOf({id: action.payload, symbol: null})
            if (!id)
                return
            const cell: ICell = state.board[id]
            if (state.currentMove === GameSymbols.X) {
                cell.symbol = GameSymbols.X
                state.currentMove = GameSymbols.X
            } else {
                cell.symbol = GameSymbols.O
                state.currentMove = GameSymbols.O
            }
            state.board[id] = cell
        },
        checkWinner: (state) => {
            lines.forEach((line) => {
                const [a, b, c] = line
                if (state.board[a].symbol && state.board[a].symbol === state.board[b].symbol && state.board[a].symbol === state.board[c].symbol) {
                    state.winner = state.board[a].symbol
                }
            })
        },
    },
})

export const { makeMove, checkWinner } = ticTacToeSlice.actions

export default ticTacToeSlice.reducer