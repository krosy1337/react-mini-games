import React, {FC, useEffect, useRef} from "react"
import {Box, Typography} from "@mui/material"
import {useActions, useAppSelector} from "hooks/redux"
import CustomButton from "components/UI/CustomButton"
import {Colors} from "types/chess/Colors"

interface TimerProps {
    restart: () => void
}

const Timer: FC<TimerProps> = ({restart}) => {
    const {decrementBlackTimer, decrementWhiteTimer, resetWhiteTimer, resetBlackTimer, endGame} = useActions()
    const {blackTimer, whiteTimer, currentPlayer, isEnded} = useAppSelector(state => state.chess)

    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    useEffect(() => {
        if (isEnded && timer.current) {
            clearInterval(timer.current)
        }
    }, [isEnded])

    const startTimer = () => {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.BLACK ? decrementBlackTimer : decrementWhiteTimer
        timer.current = setInterval(callback, 1000)
    }

    const handleRestart = () => {
        resetWhiteTimer()
        resetBlackTimer()
        restart()
    }

    return (
        <Box>
            <Typography variant="h6">Black: {blackTimer}</Typography>
            <Typography variant="h6">White: {whiteTimer}</Typography>
            <CustomButton onClick={handleRestart}>Restart game</CustomButton>
            <CustomButton onClick={() => {
                endGame()
            }}>End game</CustomButton>
        </Box>
    )
}

export default Timer