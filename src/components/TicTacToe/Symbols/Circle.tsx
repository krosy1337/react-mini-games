import React, {FC} from 'react'
import {motion} from "framer-motion"

const Circle: FC = () => {
    const variants = {
        hidden: {pathLength: 0, opacity: 0,},
        visible: {
            pathLength: 1, opacity: 1,
            transition: {
                pathLength: {type: "spring", duration: .5, bounce: 0},
                opacity: {duration: 0.01}
            }
        },
    }
    return (
        <motion.svg width={70} height={70} viewBox="0 0 70 70" initial="hidden"
                    animate="visible" exit="hidden">
            <motion.circle cx={35} cy={35} r="30"
                           stroke="#ff0055" strokeWidth={3} fill="transparent" strokeLinecap="round"
                           variants={variants}/>

        </motion.svg>
    )
}

export default Circle