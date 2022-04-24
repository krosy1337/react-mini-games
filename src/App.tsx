import React, {FC} from 'react'
import {useRoutes} from "react-router-dom"
import HomePage from "./components/pages/HomePage"

const App: FC = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage />,
        },
    ])
    return (
        <>
            {routes}
        </>
    )
}

export default App