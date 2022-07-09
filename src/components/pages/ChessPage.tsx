import React, {FC, useEffect} from "react"
import BoardComponent from "components/Chess/BoardComponent"
import {Box} from "@mui/material"
import {useActions, useAppSelector} from "hooks/redux"
import {Board} from "types/chess/Board"
import {Colors} from "types/chess/Colors"
import LostFigures from "components/Chess/LostFigures"
import Timer from "components/Chess/Timer"
import EndGame from "components/Chess/EndGame"

const ChessPage: FC = () => {
    const {setBoard, setCurrentPlayer, startGame} = useActions()
    const {currentPlayer, blackPlayer, whitePlayer, board, isEnded} = useAppSelector(state => state.chess)

    useEffect(() => {
        restart()
    }, [])

    const restart = () => {
        setCurrentPlayer(whitePlayer)
        startGame()
        const board = new Board()
        board.initCells()
        board.addFigures()
        setBoard(board)
    }

    const swapPlayers = () => {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Box sx={{display: "flex", columnGap: 2,}}>
                <Timer restart={restart} />
                <BoardComponent swapPlayers={swapPlayers} />
                <Box sx={{display: "flex", flexDirection: "column",}}>
                    <LostFigures title="Black figures" figures={board.blackLostFigures} color={Colors.BLACK} />
                    <LostFigures title="White figures" figures={board.whiteLostFigures} color={Colors.WHITE} />
                </Box>
            </Box>
            {isEnded && <EndGame />}
        </Box>
    )
}

export default ChessPage