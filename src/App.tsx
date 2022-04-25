import React, {FC} from 'react'
import {useRoutes} from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import {CssBaseline} from "@mui/material"

const App: FC = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage />,
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