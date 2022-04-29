import React, {FC} from 'react'
import {useRoutes} from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material"
import TicTacToePage from "./components/pages/TicTacToePage"
import Layout from "./components/layout/Layout"
import {RouteNames} from "./types/routes"
import {useAppSelector} from "./hooks/redux"
import {darkTheme, lightTheme} from "./theme"

const App: FC = () => {
    const routes = useRoutes([
        {
            path: RouteNames.ROOT,
            element: <Layout />,
            children: [
                {
                    path: RouteNames.ROOT,
                    element: <HomePage />,
                },
                {
                    path: RouteNames.TIC_TAC_TOE,
                    element: <TicTacToePage />,
                },
            ],
        },
    ])

    const {mode} = useAppSelector(state => state.app)
    const theme = createTheme(mode === 'light' ? lightTheme : darkTheme)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {routes}
        </ThemeProvider>
    )
}

export default App