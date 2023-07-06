import { FC } from 'react'
import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'



const RegisterForm: FC = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>新規登録</h3>
            <Button
                variant='outlined'
                style={{ borderColor: 'black', color: 'black' }}
                onClick={() => navigate('/auth/mail')}
            >
                メールアドレスで登録
            </Button>
            <Button variant='outlined' >Googleで登録</Button>
            <Button variant='outlined'>Facebookで登録</Button>
            <Button variant='outlined'>Appleで登録</Button>
            <p style={{ fontSize: "0.7rem" }}>利用規約やプライバシーポリシーに同意の上、登録又はログインへお進みください</p>
            <div>アカウントをお持ちの方</div>
            <Button variant='outlined' onClick={() => navigate('/auth/login')}>ログイン</Button>
        </Box >
    )
}

export default RegisterForm