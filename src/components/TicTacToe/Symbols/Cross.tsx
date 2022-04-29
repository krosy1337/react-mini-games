import React, {FC} from 'react'
import {motion} from "framer-motion"
import {useTheme} from "@mui/material"

const Cross: FC = () => {
    const theme = useTheme()

    const variants = {
        hidden: {pathLength: 0, opacity: 0,},
        visible: (i: number) => {
            const delay = i*0.2
            return {
                pathLength: 1, opacity: 1,
                transition: {
                    pathLength: {delay, type: "spring", duration: .3, bounce: 0},
                    opacity: {delay, duration: 0.01}
                }
            }
        },
    }
    return (
        <motion.svg width={70} height={70} viewBox="0 0 70 70"
                    initial="hidden"
                    animate="visible" exit="hidden">
            <motion.line x1={10} y1={10} x2={60} y2={60}
                         stroke={theme.palette.error.main} strokeWidth={3} strokeLinecap="round"
                         variants={variants} custom={0}/>
            <motion.line x1={10} y1={60} x2={60} y2={10}
                         stroke={theme.palette.error.main} strokeWidth={3} strokeLinecap="round"
                         variants={variants} custom={1}/>
        </motion.svg>
    )
}

export default Cross