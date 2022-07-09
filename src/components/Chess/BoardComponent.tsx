import {Box, Typography} from "@mui/material"
import React, {FC, useEffect} from "react"
import CellComponent from "components/Chess/CellComponent"
import {useActions, useAppSelector} from "hooks/redux"
import {Cell} from "types/chess/Cell"

interface BoardProps {
    swapPlayers: () => void
}

const BoardComponent: FC<BoardProps> = ({swapPlayers}) => {
    const {board, selectedCell, currentPlayer, winner, isEnded} = useAppSelector(state => state.chess)
    const {setBoard, setSelectedCell} = useActions()

    const cellClickHandler = (cell: Cell) => {
        if (selectedCell && cell.available) {
            selectedCell.moveFigure(cell)
            swapPlayers()
            setSelectedCell(null)
        } else if (!cell.isEmpty() && (currentPlayer?.color === cell.figure?.color)) {
            setSelectedCell(cell)
        }
    }

    const highlightCells = () => {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {isEnded && <Typography variant="h5">{winner ? `${winner?.name} wins` : "Draw"}</Typography>}
            {currentPlayer && <Typography variant="h5">{currentPlayer?.name} moves</Typography>}
            <Box sx={{width: "calc(64px*8)", display: "flex", flexWrap: "wrap"}}>
                {board.cells.map((row) =>
                    row.map((cell) =>
                        <CellComponent key={cell.id} cell={cell} click={cellClickHandler}
                                       isSelected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}/>
                    )
                )}
            </Box>

        </Box>
    )
}

export default BoardComponent