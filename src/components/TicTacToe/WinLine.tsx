import { motion } from 'framer-motion'
import React from 'react'
import {useAppSelector} from "hooks/redux"

const WinLine = () => {
    const {winLine} = useAppSelector(state => state.ticTacToe)
    const variants = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            transition: {
                pathLength: {type: "spring", duration: .5, bounce: 0},
            }
        }
    }
    return (
        <motion.svg width={250} height={250} viewBox="0 0 250 250"
                    initial="hidden"
                    animate="visible" exit="hidden" style={{transform: "translate(-20px, -20px)", position: "absolute",}}>
            <motion.line {...winLine}
                         stroke="#000" strokeWidth={3} strokeLinecap="round"
                         variants={variants}/>
        </motion.svg>
    )
}

export default WinLine