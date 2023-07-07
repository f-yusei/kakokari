import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <div>main</div>
            <Outlet />
        </>
    )
}

export default MainLayout