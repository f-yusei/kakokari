import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <>
            <div>テスト</div>
            <Outlet />
        </>
    )
}

export default AuthLayout