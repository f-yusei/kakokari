import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>ログイン</h3>
            <Button
                variant='outlined'
                style={{ borderColor: 'black', color: 'black' }}
                onClick={() => navigate('/auth/mail')}
            >
                メールアドレスでログイン
            </Button>
            <Button variant='outlined' >Googleでログイン</Button>
            <Button variant='outlined'>Facebookでログイン</Button>
            <Button variant='outlined'>Appleでログイン</Button>
            <p style={{ fontSize: "0.7rem" }}>利用規約やプライバシーポリシーに同意の上、登録又はログインへお進みください</p>
            <div>アカウントをお持ちでない方</div>
            <Button variant='outlined' onClick={() => navigate('/auth/register')}>新規登録</Button >
        </Box >
    )
}

export default LoginForm