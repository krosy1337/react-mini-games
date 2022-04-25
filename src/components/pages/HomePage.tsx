import React, {FC} from 'react'
import {Navigate} from "react-router-dom"
import {RouteNames} from "types/routes"

const HomePage: FC = () => {
    return (
        <>
            <Navigate to={RouteNames.TIC_TAC_TOE} />
        </>
    )
}

export default HomePage