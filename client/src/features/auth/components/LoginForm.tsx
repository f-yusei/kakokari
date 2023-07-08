import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const LoginForm = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <h3>ログイン</h3>
            <Button
                startIcon={<MailOutlineIcon />}
                variant='outlined'
                style={{ borderColor: 'black', color: 'black' }}
                component={Link} to="/mail-login"
                fullWidth
                sx={{ mb: 3 }}
            >
                メールアドレスでログイン
            </Button>
            <Button variant='outlined' fullWidth sx={{ mb: 3 }}>Googleでログイン</Button>
            <Button variant='outlined' fullWidth sx={{ mb: 3 }}>Facebookでログイン</Button>
            <Button variant='outlined' fullWidth sx={{ mb: 3 }}>Appleでログイン</Button>
            <p style={{ fontSize: "0.8rem" }}>利用規約やプライバシーポリシーに同意の上、登録又はログインへお進みください</p>
            <div>アカウントをお持ちでない方</div>
            <Button
                component={Link} to="/register"
                variant='contained'
                sx={{ mt: 2 }}
            >
                新規登録
            </Button >
        </Box >
    )
}

export default LoginForm