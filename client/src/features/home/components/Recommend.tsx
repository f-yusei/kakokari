import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import * as React from 'react'
import { randomEmoji } from '../../../assets/RandomEmoji'
import { Link } from 'react-router-dom'

const Recommend = (props: any) => {
    const { product } = props;
    return (
        <Card sx={{
            width: "9.0rem",
            m: 3,
            mb: 5,
            borderRadius: "5%",
            "@media screen and (max-width: 700px)": {
                width: "34vw"
            }
        }}
        >
            <Typography sx={{ bgcolor: '#de403e', textAlign: "center", fontSize: "4.0rem" }}>
                {randomEmoji()}
            </Typography>
            <CardContent>
                <Typography gutterBottom variant='body1' component='div'>
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