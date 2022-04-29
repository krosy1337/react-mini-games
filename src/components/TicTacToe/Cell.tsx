import React, {FC} from 'react'
import {Box, useTheme} from "@mui/material"
import {GameSymbols, ICell} from "types/TicTacToe"
import Circle from "./Symbols/Circle"
import Cross from "./Symbols/Cross"
import {AnimatePresence} from 'framer-motion'

interface CellProps extends ICell{
    clickHandler: ({symbol, id}: ICell) => void
}

const Cell: FC<CellProps> = ({symbol, id, clickHandler}) => {
    const theme = useTheme()

    return (
        <Box sx={{
            width: 70, height: 70,
            borderBottom: (id < 6) ? `1px solid ${theme.palette.getContrastText(theme.palette.background.default)}` : "",
            borderLeft: (id % 3 !== 0) ? `1px solid ${theme.palette.getContrastText(theme.palette.background.default)}` : "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }} onClick={() => clickHandler({symbol, id})}>
            <AnimatePresence>{symbol === GameSymbols.O && <Circle />}</AnimatePresence>
            <AnimatePresence>{symbol === GameSymbols.X && <Cross/>}</AnimatePresence>
        </Box>
    )
}

export default Cell