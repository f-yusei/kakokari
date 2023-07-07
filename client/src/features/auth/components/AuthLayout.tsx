import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../../utils/authUtils';

const AuthLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //JWTトークン認証
        const checkAuth = async () => {
            //認証チェック
            const isAuth = await authUtils.isAuthenticated();
            if (isAuth) {
                navigate("/");
            }
        }
        checkAuth()
    }, [navigate])
    return (
        <Container component="main" maxWidth="sm">
            <Outlet />
        </Container>
    )
}

export default AuthLayout