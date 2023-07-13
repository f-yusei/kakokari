import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import * as React from 'react'
import { randomEmoji } from '../../../assets/RandomEmoji'
import { Link } from 'react-router-dom'

const Recommend = (props: any) => {
    const { product } = props;
    return (
        <Card sx={{ width: "10.0rem", m: 2, borderRadius: "5%" }}>
            <Typography sx={{ bgcolor: '#de403e', textAlign: "center", fontSize: "4.0rem" }}>
                {randomEmoji()}
            </Typography>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {product.title}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    {product.subject}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    component={Link}
                    to={`/products/${product._id}`}
                >くわしく
                </Button>
            </CardActions>
        </Card>
    )
}

export default Recommend