import {Figure, FigureNames} from "types/chess/figures/Figure"
import {Colors} from "types/chess/Colors"
import {Cell} from "types/chess/Cell"
import whiteLogo from "assets/white-rook.png"
import blackLogo from "assets/black-rook.png"

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = FigureNames.ROOK
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        if (this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target)) {
            return true
        }
        return false
    }
}