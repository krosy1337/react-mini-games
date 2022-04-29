import React, {FC, useState} from 'react'
import {Box, Drawer, FormControlLabel, Switch} from "@mui/material"
import BurgerButton from "../UI/BurgerButton"
import {useActions, useAppSelector} from "hooks/redux"

const Sidebar: FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    const {mode} = useAppSelector(state => state.app)

    const {setMode} = useActions()

    const onClose = () => {
        setOpen(false)
    }

    const toggleTheme = () => {
        if (mode === 'light') {
            setMode("dark")
            return
        }
        setMode('light')
    }
    return (
        <>
            <BurgerButton isOpened={open} onClick={() => setOpen(true)} />
            <Drawer anchor="left" open={open} onClose={onClose}>
                <Box sx={{padding: 2,}}>
                    <FormControlLabel control={<Switch checked={mode === 'dark'} onChange={toggleTheme} />} label={mode === 'light' ? 'Light mode' : 'Dark mode'} />
                </Box>
            </Drawer>
        </>
    )
}

export default Sidebar