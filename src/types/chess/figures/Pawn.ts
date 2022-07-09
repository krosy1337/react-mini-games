import {Figure, FigureNames} from "types/chess/figures/Figure"
import {Colors} from "types/chess/Colors"
import {Cell} from "types/chess/Cell"
import whiteLogo from "assets/white-pawn.png"
import blackLogo from "assets/black-pawn.png"

export class Pawn extends Figure {
    isFirstStep: boolean = true

    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = FigureNames.PAWN
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        const direction = this.color === Colors.BLACK ? 1 : -1
        const firstStepDirection = this.color === Colors.BLACK ? 2 : -2

        if ((target.y === this.cell.y + direction ||
            (this.isFirstStep && (target.y === this.cell.y + firstStepDirection)))
            && (target.x === this.cell.x) && this.cell.board.getCell(target.x, target.y).isEmpty() &&
            this.cell.isEmptyVertical(target)) {
            return true
        }

        if ((target.y === this.cell.y + direction && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1))
            && this.cell.isEnemy(target)) {
            return true
        }

        return false
    }

    public moveFigure(target: Cell) {
        super.moveFigure(target)
        this.isFirstStep = false
    }
}