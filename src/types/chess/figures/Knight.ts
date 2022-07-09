import {Figure, FigureNames} from "types/chess/figures/Figure"
import {Colors} from "types/chess/Colors"
import {Cell} from "types/chess/Cell"
import whiteLogo from "assets/white-knight.png"
import blackLogo from "assets/black-knight.png"

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = FigureNames.KNIGHT
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }

        const absX = Math.abs(this.cell.x - target.x)
        const absY = Math.abs(this.cell.y - target.y)

        return (absX === 2 && absY === 1) || (absX === 1 && absY === 2)
    }
}