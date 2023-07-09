import { Button, Box, TextField, } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { LoadingButton } from '@mui/lab';
import authApi from '../api/authApi';
import React, { FC } from 'react';




const MailLoginForm: FC = () => {
    const navigate = useNavigate()

    const [emailErrText, setEmailErrText] = React.useState<string>('')
    const [passwordErrText, setPasswordErrText] = React.useState<string>('')

    const [loading, setLoading] = React.useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailErrText('');
        setPasswordErrText('');

        //フォームの値を取得
        const data = await new FormData(e.currentTarget);
        const email = (data.get('email') as string).trim();
        const password = (data.get('password') as string).trim();
        console.log(email)
        console.log(password)

        let error = false;

        if (email === '') {
            error = true;
            setEmailErrText('メールアドレスを入力してください')
        }
        if (password === '') {
            error = true;
            setPasswordErrText('パスワードを入力してください')
        }
        if (error) {
            return;
        }

        setLoading(true);
        //登録APIを叩く
        try {
            const res = await authApi.login({
                email,
                password,
            });
            setLoading(false);
            localStorage.setItem('token', res.data.accessToken);
            console.log("ログイン成功！")
            navigate('/')

        } catch (err: any) {
            console.log(err)
            const errors = err.data.error;
            console.log(errors);
            errors.forEach((error: any) => {
                if (error.param === 'email') {
                    setEmailErrText(error.msg);
                }
                if (error.param === 'password') {
                    setPasswordErrText(error.msg);
                }
            })
            setLoading(false);
        }
    }
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Button component={Link} to="/login" sx={{ mt: 2 }}>
                <ArrowBackIosNewIcon />
            </Button>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3>ログイン</h3>
                <TextField
                    id='email'
                    label="メールアドレス"
                    fullWidth
                    margin='normal'
                    name='email'
                    type='email'
                    required
                    helperText={emailErrText}
                    error={emailErrText !== ''}
                    disabled={loading}
                />
                <TextField
                    id='password'
                    fullWidth
                    label="パスワード"
                    margin='normal'
                    name='password'
                    type='password'
                    required
                    helperText={passwordErrText}
                    error={passwordErrText !== ''}
                    disabled={loading}
                />
                <LoadingButton
                    variant='contained'
                    type='submit'
                    loading={loading}
                >
                    次へ
                </LoadingButton>
            </Box >
        </Box>
    )
}

export default MailLoginForm