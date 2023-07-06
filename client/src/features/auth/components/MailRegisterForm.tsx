import { FC } from 'react'
import { Button, Box, TextField, } from '@mui/material'
import { useNavigate } from 'react-router-dom'



const RegisterForm: FC = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>会員登録</h3>
            <TextField
                label="メールアドレス"
            />
            <TextField
                label="パスワード"
            />
            <TextField
                label="パスワード(確認用)"
            />
            <Button variant='contained'>次へ</Button>
        </Box >
    )
}

export default RegisterForm