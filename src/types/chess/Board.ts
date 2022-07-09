import {Cell} from "types/chess/Cell"
import {Colors} from "types/chess/Colors"
import {Bishop} from "types/chess/figures/Bishop"
import {Pawn} from "types/chess/figures/Pawn"
import {Rook} from "types/chess/figures/Rook"
import {Knight} from "./figures/Knight"
import {King} from "types/chess/figures/King"
import {Queen} from "types/chess/figures/Queen"
import {Figure, FigureNames} from "types/chess/figures/Figure"

export class Board {
    cells: Cell[][]
    blackLostFigures: Figure[]
    whiteLostFigures: Figure[]

    constructor() {
        this.cells = []
        this.whiteLostFigures = []
        this.blackLostFigures = []
    }

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(j, i, Colors.WHITE, null, this))
                } else {
                    row.push(new Cell(j, i, Colors.BLACK, null, this))
                }
            }
            this.cells.push(row)
        }
    }

    public getCell(x: number, y: number): Cell {
        return this.cells[y][x]
    }

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]
            for (let j = 0; j < row.length; j++) {
                const target = row[j]
                if (target.figure?.name !== FigureNames.KING) {
                    target.available = !!selectedCell?.figure?.canMove(target)
                } else {
                    target.available = false
                }
            }
        }
    }

    public isKingUnderAttack() {
        for (let f = 0; f < this.cells.length; f++) {
            for (let k = 0; k < this.cells.length; k++) {
                const target = this.cells[f][k]
                if (target.figure?.name === FigureNames.KING) {
                    for (let i = 0; i < this.cells.length; i++) {
                        const row = this.cells[i]
                        for (let j = 0; j < row.length; j++) {
                            const selectedCell = row[j]
                            if (!!selectedCell?.figure?.canMove(target) && target.figure?.name === FigureNames.KING) {
                                return true
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    public checkMate() {
        console.log(this.isKingUnderAttack())
        /*
        * Условия мата:
        * 1. Король находится под прямой атакой
        * 2. У короля нет возможности уйти от шаха(все поля вокруг заняты или тоже под ударом)
        * 3. Нет возможности закрыться от шаха другой фигурой
        * 4. Нет возможности съесть фигуру, объявившую шах
        * */

    }

    public getCopyBoard() {
        const newBoard = new Board()
        newBoard.cells = this.cells
        newBoard.blackLostFigures = this.blackLostFigures
        newBoard.whiteLostFigures = this.whiteLostFigures
        return newBoard
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i, 1))
            new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
    }

    private addRooks() {
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(7, 0))
        new Rook(Colors.WHITE, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 7))
    }

    private addKnights() {
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.BLACK, this.getCell(6, 0))
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.WHITE, this.getCell(6, 7))
    }

    private addBishops() {
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
    }

    private addKings() {
        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(4, 7))
    }

    private addQueens() {
        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Queen(Colors.WHITE, this.getCell(3, 7))
    }

    public addFigures() {
        this.addPawns()
        this.addRooks()
        this.addKnights()
        this.addBishops()
        this.addKings()
        this.addQueens()
    }
}