import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils'

const MainLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //JWTトークン認証
        const checkAuth = async () => {
            //認証チェック
            const email = await authUtils.isAuthenticated();
            // if (!email) {
            //     navigate("/login");
            // }
        }
        checkAuth()
    }, [navigate])
    return (
        <Box>
            <Outlet />
        </Box>
    )
}

export default MainLayout