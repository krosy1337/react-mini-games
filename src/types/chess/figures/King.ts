import {Figure, FigureNames} from "types/chess/figures/Figure"
import {Colors} from "types/chess/Colors"
import {Cell} from "types/chess/Cell"
import whiteLogo from "assets/white-king.png"
import blackLogo from "assets/black-king.png"

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = FigureNames.KING
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        const absX = Math.abs(this.cell.x - target.x)
        const absY = Math.abs(this.cell.y - target.y)
        if ((absX === 1 && (absY === 1 || absY === 0)) || ((absY === 1 && (absX === 1 || absX === 0)))) {
            return true
        }
        return false
    }
}