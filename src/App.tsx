import React, {FC} from 'react'
import {useRoutes} from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import {CssBaseline} from "@mui/material"
import TicTacToePage from "./components/pages/TicTacToePage"
import Layout from "./components/layout/Layout"
import {RouteNames} from "./types/routes"

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
    return (
        <>
            <CssBaseline />
            {routes}
        </>
    )
}

export default App