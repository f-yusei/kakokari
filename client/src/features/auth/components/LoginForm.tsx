import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const LoginForm = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>ログイン</h3>
            <Button
                startIcon={<MailOutlineIcon />}
                variant='outlined'
                style={{ borderColor: 'black', color: 'black' }}
                component={Link} to="/mail-login"
                fullWidth
                sx={{ mb: 2 }}
            >
                メールアドレスでログイン
            </Button>
            <Button variant='outlined' fullWidth sx={{ mb: 2 }}>Googleでログイン</Button>
            <Button variant='outlined' fullWidth sx={{ mb: 2 }}>Facebookでログイン</Button>
            <Button variant='outlined' fullWidth sx={{ mb: 2 }}>Appleでログイン</Button>
            <p style={{ fontSize: "0.8rem" }}>利用規約やプライバシーポリシーに同意の上、登録又はログインへお進みください</p>
            <div>アカウントをお持ちでない方</div>
            <Button
                component={Link} to="/register"
                variant='contained'
                sx={{ mt: 1 }}
            >
                新規登録
            </Button >
        </Box >
    )
}

export default LoginForm