import {Colors} from "types/chess/Colors"
import {Cell} from "types/chess/Cell"
import logo from "assets/black-knight.png"

export enum FigureNames {
    FIGURE = "Figure",
    KING = "KING",
    KNIGHT = "KNIGHT",
    PAWN = "PAWN",
    QUEEN = "QUEEN",
    ROOK = "ROOK",
    BISHOP = "BISHOP",
}

export class Figure {
    color: Colors
    logo: typeof logo | null
    cell: Cell
    name: FigureNames
    id: number


    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.cell = cell
        this.logo = null
        this.name = FigureNames.FIGURE
        this.id = Math.random()
        this.cell.figure = this
    }

    canMove(target: Cell): boolean {
        if (this.color === target.figure?.color) {
            return false
        }
        return true
    }
    moveFigure(target: Cell): void {
    }
}