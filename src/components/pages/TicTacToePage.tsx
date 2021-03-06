import React, {FC, useEffect} from 'react'
import Board from "../TicTacToe/Board"
import {Box, Container, Typography} from "@mui/material"
import {useActions, useAppSelector} from "hooks/redux"
import {GameSymbols} from "types/TicTacToe"
import Cross from "../TicTacToe/Symbols/Cross"
import Circle from "../TicTacToe/Symbols/Circle"
import CustomButton from "../UI/CustomButton"
import { AnimatePresence } from 'framer-motion'

const TicTacToePage: FC = () => {
    const {currentMove, isFinished, winner} = useAppSelector(state => state.ticTacToe)
    const {resetGame} = useActions()

    useEffect(() => {
        document.title = "TicTacToe"
    }, [])

    const restartGame = () => {
        resetGame(currentMove)
    }

    return (
        <Container sx={{padding: 0, paddingTop: 10, paddingBottom: 10, display: "flex", flexDirection: "column", alignItems: "center",}}>
            {
                isFinished
                    ?
                    <Box sx={{display: "flex", alignItems: "center", columnGap: 2, margin: "auto", marginBottom: 2,}}>
                        {winner === GameSymbols.X && <Cross/>}
                        {winner === GameSymbols.O && <Circle/>}
                        <Typography variant="h2" component="h2">{winner === GameSymbols.D ? 'Draw' : 'wins'}</Typography>
                    </Box>
                    :
                    <Box sx={{display: "flex", alignItems: "center", columnGap: 2, margin: "auto", marginBottom: 2,}}>
                        {currentMove === GameSymbols.X ? <Cross/> : <Circle/>
                        }
                        <Typography variant="h2" component="h2">moves</Typography>
                    </Box>
            }
            <Board />
            <AnimatePresence>
                {isFinished && <CustomButton onClick={restartGame}>Restart</CustomButton>}
            </AnimatePresence>
        </Container>

    )
}

export default TicTacToePage