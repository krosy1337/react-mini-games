import React, {FC, forwardRef, PropsWithChildren} from 'react'
import {motion} from "framer-motion"
import {Box, Button, useTheme} from "@mui/material"

const RawBurger = forwardRef<HTMLButtonElement, PropsWithChildren<any>>(({children, ...props}, ref) => {
    return (
        <Button ref={ref} {...props}>{children}</Button>
    )
})

const MotionBurger = motion(RawBurger)

const BurgerButton: FC<{ isOpened: boolean, onClick: () => void }> = ({isOpened, onClick}) => {
    const theme = useTheme()

    return (
            <MotionBurger variant="text"
                          animate={{
                              scale: isOpened ? 0 : 1,
                              transition: {
                                  type: "spring",
                                  stiffness: 700,
                                  damping: 30,
                              }
                          }}
                          sx={{
                              position: "relative",
                              width: 50,
                              height: 50,
                              padding: 0,
                              overflow: "hidden",
                          }}
                          onClick={onClick}>
                <Box sx={{
                    position: "absolute",
                    left: "50%",
                    top: "33.333%",
                    width: 30,
                    height: 2,
                    backgroundColor: theme.palette.primary.main,
                    transform: "translate(-50%, -50%)",
                }}/>
                <Box sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: 30,
                    height: 2,
                    backgroundColor: theme.palette.primary.main,
                    transform: "translate(-50%, -50%)"
                }}/>
                <Box sx={{
                    position: "absolute",
                    left: "50%",
                    bottom: "33.333%",
                    width: 30,
                    height: 2,
                    backgroundColor: theme.palette.primary.main,
                    transform: "translate(-50%, 50%)"
                }}/>
            </MotionBurger>
    )
}

export default BurgerButton