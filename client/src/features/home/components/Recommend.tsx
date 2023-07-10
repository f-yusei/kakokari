import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import * as React from 'react'
import { randomEmoji } from '../../../assets/RandomEmoji'

const Recommend = () => {
    return (
        <Card sx={{ maxWidth: "8rem", m: 2, borderRadius: "5%" }}>
            <Typography sx={{ bgcolor: '#de403e', textAlign: "center", fontSize: "4.0rem" }}>
                {randomEmoji()}
            </Typography>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    2I期末
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    国語
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