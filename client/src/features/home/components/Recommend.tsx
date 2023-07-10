import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import * as React from 'react'
import { randomEmoji } from '../../../assets/RandomEmoji'

const Recommend = () => {
    return (
        <Card sx={{ width: "15.0rem", m: 3, borderRadius: "10%" }}>
            <Typography sx={{ bgcolor: '#de403e', textAlign: "center", fontSize: "4.0rem" }}>
                {randomEmoji()}
            </Typography>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    test
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    test
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">くわしく</Button>
                <Button size="small"></Button>
            </CardActions>
        </Card>
    )
}

export default Recommend