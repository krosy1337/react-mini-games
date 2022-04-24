export enum GameSymbols {
    X = "x",
    O = "o",
    D = "draw",
}

export interface ICell{
    id: number
    symbol: GameSymbols.X | GameSymbols.O | null
}

export type IBoard = ICell[]

export interface IGame {
    board: IBoard
    currentMove: GameSymbols.X | GameSymbols.O
    winner: GameSymbols.X | GameSymbols.O | GameSymbols.D | null
    isFinished: boolean
}