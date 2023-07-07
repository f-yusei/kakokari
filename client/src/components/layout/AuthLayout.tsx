import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <Container component="main" maxWidth="sm">
            <div>テスト</div>
            <Outlet />
        </Container>
    )
}

export default AuthLayout