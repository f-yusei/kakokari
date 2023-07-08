import { FC } from 'react'
import { Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const RegisterForm: FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <h3>新規登録</h3>
            <Button
                startIcon={<MailOutlineIcon />}
                variant='outlined'
                style={{ borderColor: 'black', color: 'black' }}
                component={Link} to="/mail-register"
                fullWidth
                sx={{ mb: 3 }}
            >
                メールアドレスで登録
            </Button>
            <Button
                variant='outlined'
                fullWidth
                sx={{ mb: 3 }}
            >
                Googleで登録
            </Button>
            <Button
                variant='outlined'
                fullWidth
                sx={{ mb: 3 }}
            >
                Facebookで登録
            </Button>
            <Button
                variant='outlined'
                fullWidth
                sx={{ mb: 3 }}
            >
                Appleで登録
            </Button>
            <p style={{ fontSize: "0.8rem" }}>利用規約やプライバシーポリシーに同意の上、登録又はログインへお進みください</p>
            <div>アカウントをお持ちの方</div>
            <Button
                variant='contained'
                component={Link} to="/login"
                sx={{ mt: 2 }}
            >
                ログイン
            </Button>
        </Box >
    )
}

export default RegisterForm