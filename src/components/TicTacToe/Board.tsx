import React, {FC, useEffect} from 'react'
import {Card, Grid, useTheme} from "@mui/material"
import {useActions, useAppSelector} from "hooks/redux"
import Cell from "./Cell"
import {GameSymbols, gameWins, ICell} from "types/TicTacToe"
import WinLine from "./WinLine"
import {AnimatePresence} from "framer-motion"

const Board: FC = () => {
    const theme = useTheme()
    const {makeMove, setCurrentMove, setWinner, setWinLine} = useActions()
    const {currentMove, board, isFinished, winner} = useAppSelector(state => state.ticTacToe)
    useEffect(() => {
        checkWinner()
    }, [board])

    const isEmptyCells = () => {
        let isEmpty = false
        board.forEach((cell) => {
            if (!cell.symbol) {
                isEmpty = true
                return
            }
        })
        return isEmpty
    }
    const checkWinner = () => {
        let isWin: boolean = false
        gameWins.forEach((line) => {
            const [a, b, c] = line.line
            if (board[a].symbol && board[a].symbol === board[b].symbol && board[a].symbol === board[c].symbol) {
                setWinner(board[a].symbol === GameSymbols.X ? GameSymbols.X : GameSymbols.O)
                setWinLine(line.winLineCoords)
                isWin = true
            }
        })
        if (isWin) {
            return
        }
        if (!isEmptyCells()) {
            setWinner(GameSymbols.D)
        }
    }
    const clickHandler = ({symbol, id}: ICell) => {
        if (symbol || isFinished) {
            return
        }
        makeMove({id, symbol: currentMove})
        if (currentMove === GameSymbols.X) {
            setCurrentMove(GameSymbols.O)
            return
        }
        setCurrentMove(GameSymbols.X)
    }
    return (
        <Card sx={{
            padding: 3,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 300,
            zIndex: 1,
        }}>
            <Grid container
                  sx={{width: 212, height: 212, border: `1px solid ${theme.palette.getContrastText(theme.palette.background.default)}`, borderRadius: 2, position: "relative"}}>
                {board.map((cell: ICell) =>
                    <Grid key={cell.id} item xs={4}>
                        <Cell id={cell.id} symbol={cell.symbol} clickHandler={clickHandler}/>
                    </Grid>
                )}
                <AnimatePresence>{((isFinished && winner) && winner !== GameSymbols.D) && <WinLine />}</AnimatePresence>
            </Grid>
        </Card>

    )
}

export default Board