import { Button, Box, TextField, } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { LoadingButton } from '@mui/lab';
import authApi from '../api/authApi';
import React, { FC } from 'react';




const RegisterForm: FC = () => {
    const navigate = useNavigate()

    const [emailErrText, setEmailErrText] = React.useState<string>('')
    const [passwordErrText, setPasswordErrText] = React.useState<string>('')
    const [confirmPasswordErrText, setConfirmPasswordErrText] = React.useState<string>('')

    const [loading, setLoading] = React.useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailErrText('');
        setPasswordErrText('');
        setConfirmPasswordErrText('');

        //フォームの値を取得
        const data = await new FormData(e.currentTarget);
        const email = (data.get('email') as string).trim();
        const password = (data.get('password') as string).trim();
        const confirmPassword = (data.get('confirmPassword') as string).trim();
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        let error = false;

        if (email === '') {
            error = true;
            setEmailErrText('メールアドレスを入力してください')
        }
        if (password === '') {
            error = true;
            setPasswordErrText('パスワードを入力してください')
        }
        if (confirmPassword === '') {
            error = true;
            setConfirmPasswordErrText('パスワードを入力してください')
        }
        if (password !== confirmPassword) {
            error = true;
            setConfirmPasswordErrText('パスワードが一致しません')
        }
        if (error) {
            return;
        }

        setLoading(true);
        //登録APIを叩く
        try {
            const res = await authApi.register({
                email,
                password,
                confirmPassword
            });
            setLoading(false);
            localStorage.setItem('token', res.data.accessToken);
            console.log("新規登録成功！")
            navigate('/')

        } catch (err: any) {
            console.log(err)
            const errors = err.data.error;
            console.log(errors);
            if (errors) {
                errors.forEach((error: any) => {
                    if (error.path === 'email') {
                        setEmailErrText(error.msg);
                    }
                    if (error.path === 'password') {
                        setPasswordErrText(error.msg);
                    }
                    if (error.path === 'confirmPassword') {
                        setConfirmPasswordErrText(error.msg);
                    }
                })
            }
            setLoading(false);
        }
    }
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Button component={Link} to="/register" sx={{ mt: 2 }}>
                <ArrowBackIosNewIcon />
            </Button>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3>会員登録</h3>
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
                <TextField
                    id='confirmPassword'
                    label="パスワード(確認用)"
                    fullWidth
                    margin='normal'
                    name='confirmPassword'
                    type='password'
                    required
                    helperText={confirmPasswordErrText}
                    error={confirmPasswordErrText !== ''}
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

export default RegisterForm