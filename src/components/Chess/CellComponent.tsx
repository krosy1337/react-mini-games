import React, {FC} from "react"
import {Box} from "@mui/material"
import {Cell} from "types/chess/Cell"
import {useActions} from "hooks/redux"

interface CellProps {
    cell: Cell
    isSelected: boolean
    click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell, isSelected, click}) => {
    const {setSelectedCell} = useActions()
    return (
        <Box sx={{
            width: 64,
            height: 64,
            backgroundColor: isSelected ? "#b95633" : cell.available && cell.figure ? "green" : cell.color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }} onClick={() => click(cell)}>
            {cell.available && !cell.figure && <div style={{
                width: 15,
                height: 15,
                backgroundColor: "green",
                borderRadius: "50%",
            }}/>}
            {
                cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} style={{
                    height: 48,
                    width: 48,
                    position: "relative"
                }}/>
            }
        </Box>
    )
}

export default CellComponent