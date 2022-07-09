import {Figure, FigureNames} from "types/chess/figures/Figure"
import {Colors} from "types/chess/Colors"
import {Cell} from "types/chess/Cell"
import whiteLogo from "assets/white-bishop.png"
import blackLogo from "assets/black-bishop.png"

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = FigureNames.BISHOP
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }
        return false
    }
}