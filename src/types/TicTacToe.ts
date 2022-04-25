export enum GameSymbols {
    X = "x",
    O = "o",
    D = "draw",
}

export const gameWins = [
    {
        line: [0, 1, 2],
        winLineCoords: {
            x1: 10,
            y1: 55,
            x2: 240,
            y2: 55,
        },
    },
    {
        line: [3, 4, 5],
        winLineCoords: {
            x1: 10,
            y1: 125,
            x2: 240,
            y2: 125,
        },
    },
    {
        line: [6, 7, 8],
        winLineCoords: {
            x1: 10,
            y1: 195,
            x2: 240,
            y2: 195,
        },
    },
    {
        line: [0, 3, 6],
        winLineCoords: {
            x1: 55,
            y1: 10,
            x2: 55,
            y2: 240,
        },
    },
    {
        line: [1, 4, 7],
        winLineCoords: {
            x1: 125,
            y1: 10,
            x2: 125,
            y2: 240,
        },
    },
    {
        line: [2, 5, 8],
        winLineCoords: {
            x1: 195,
            y1: 10,
            x2: 195,
            y2: 240,
        },
    },
    {
        line: [0, 4, 8],
        winLineCoords: {
            x1: 10,
            y1: 10,
            x2: 240,
            y2: 240,
        },
    },
    {
        line: [2, 4, 6],
        winLineCoords: {
            x1: 240,
            y1: 10,
            x2: 10,
            y2: 240,
        },
    },
]

export interface IWinLine {
    x1: number
    y1: number
    x2: number
    y2: number
}

export interface ICell {
    id: number
    symbol: GameSymbols.X | GameSymbols.O | null
}

export type IBoard = ICell[]

export interface IGame {
    board: IBoard
    currentMove: GameSymbols.X | GameSymbols.O
    winner: GameSymbols | null
    winLine: IWinLine | null
    isFinished: boolean
}