import React, {FC} from 'react'
import {Outlet} from "react-router-dom"
import Sidebar from "./Sidebar"

const Layout: FC = () => {
    return (
        <>
            <Sidebar />
            <Outlet/>
        </>
    )
}

export default Layout