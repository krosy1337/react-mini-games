import {Board} from "types/chess/Board"
import {Cell} from "types/chess/Cell"
import {Player} from "types/chess/Player"

export interface IChessGame {
    board: Board
    selectedCell: Cell | null
    whitePlayer: Player
    blackPlayer: Player
    currentPlayer: Player | null
    whiteTimer: number
    blackTimer: number
    winner: Player | null
    isEnded: boolean
}