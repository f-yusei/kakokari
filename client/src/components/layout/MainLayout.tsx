import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/features/userSlice'

const MainLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        //JWTトークン認証
        const checkAuth = async () => {
            //認証チェック
            const email = await authUtils.isAuthenticated();
            if (!email) {
                //navigate("/login");
            } else {
                dispatch(setUser(email))
            }
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