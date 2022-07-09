import {Figure, FigureNames} from "types/chess/figures/Figure"
import {Colors} from "types/chess/Colors"
import {Cell} from "types/chess/Cell"
import whiteLogo from "assets/white-queen.png"
import blackLogo from "assets/black-queen.png"

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = FigureNames.QUEEN
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        if (this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target) || this.cell.isEmptyDiagonal(target)) {
            return true
        }
        return false
    }
}