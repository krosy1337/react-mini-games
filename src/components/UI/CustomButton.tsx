import React, {FC, forwardRef, PropsWithChildren} from 'react'
import {motion} from "framer-motion"
import {Button} from "@mui/material"

const RawButton = forwardRef<HTMLButtonElement, PropsWithChildren<any>>((props, ref) => {
    return (
        <Button ref={ref} variant="contained" sx={{marginTop: 2,}} {...props}>{props.children}</Button>
    )
})

const MotionButton = motion(RawButton)

const CustomButton: FC<any> = ({children, isVisible, ...props}) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    }
    return (
        <MotionButton initial="hidden" animate="visible" exit="hidden" variants={variants} {...props}>
            {children}
        </MotionButton>
    )
}

export default CustomButton