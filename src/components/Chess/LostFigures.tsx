import React, {FC} from "react"
import {Box, Typography} from "@mui/material"
import {Figure} from "types/chess/figures/Figure"
import {Colors} from "types/chess/Colors"

interface LostFiguresProps {
    title: string
    figures: Figure[]
    color: Colors
}

const LostFigures: FC<LostFiguresProps> = ({figures, title, color}) => {
    return (
        <Box sx={{width: 200, minHeight: 300, padding: 3, backgroundColor: color === Colors.BLACK ? Colors.WHITE : Colors.BLACK}}>
            <Typography variant="h5">{title}</Typography>
            {figures.map((figure) =>
                <Box key={figure.id} sx={{display: "flex", alignItems: "center", marginY: 1,}}>
                    <Typography variant="subtitle2">{figure.name}</Typography>
                    {figure.logo && <img width={20} height={20} src={figure.logo} alt={figure.name}/>}
                </Box>
            )}
        </Box>
    )
}

export default LostFigures