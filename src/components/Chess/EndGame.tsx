import React, {FC, useState} from "react"
import {Card, CardHeader, IconButton, Snackbar} from "@mui/material"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import {useAppSelector} from "hooks/redux"

const EndGame: FC = () => {
    const [isOpened, setOpened] = useState<boolean>(true)
    const {winner} = useAppSelector(state => state.chess)

    const onClose = () => {
        setOpened(false)
    }
    return (
        <Snackbar open={isOpened} onClose={onClose} autoHideDuration={6000}
                  anchorOrigin={{horizontal: "center", vertical: "top"}}>
            <Card variant="elevation" sx={{
                width: 400,
            }}>
                <CardHeader title={winner ? `${winner?.name} wins` : "Draw"}
                            action={
                                <IconButton color="error" onClick={onClose}>
                                    <CloseRoundedIcon />
                                </IconButton>
                            }/>
            </Card>
        </Snackbar>
    )
}

export default EndGame