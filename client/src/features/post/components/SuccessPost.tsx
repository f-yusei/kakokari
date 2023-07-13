import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SuccessPost = () => {
    return (
        <>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: "black" }}>
                投稿が完了しました！！
            </Typography>
            <Button component={Link} to="/">
                ホームへ
            </Button>
        </>
    )
}

export default SuccessPost