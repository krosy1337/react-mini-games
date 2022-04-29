import {AppState} from "types/App"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {PaletteMode} from "@mui/material"

const initialState: AppState = {
    mode: "light",
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<PaletteMode>) => {
            state.mode = action.payload
        }
    },
})

export const {setMode} = appSlice.actions

export default appSlice.reducer