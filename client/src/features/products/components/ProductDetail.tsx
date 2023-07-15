import React from 'react'
import { useParams } from 'react-router-dom'
import productsApi from '../api/products'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { randomEmoji } from '../../../assets/RandomEmoji'
import { useEffect } from 'react'
const ProductDetail = () => {
    const [product, setProduct] = useState<any>(null)
    const { id } = useParams<{ id: string }>()
    const [emoji, setEmoji] = useState<string>("")
    //一度だけランダム絵文字実行
    useEffect(() => {
        setEmoji(randomEmoji())
        getProduct()
    }, [])


    const getProduct = async () => {
        try {
            const res = await productsApi.getOneProduct(id);
            console.log(res)
            setProduct(res.data)
        } catch (err) {
            console.log(err)
        }
    };


    return (
        <Box sx={{
            height: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            m: 2,
            bgcolor: '#f5f5f5',
            borderRadius: "1.5rem"
        }}>
            <Box sx={{
                width: "100%",
                height: "14.0rem",
                bgcolor: "#de403e",
                borderTopLeftRadius: "1.5rem",
                borderTopRightRadius: "1.5rem"
            }}>
                <Typography sx={{ textAlign: "center", fontSize: "10.0rem" }}>
                    {emoji}
                </Typography>
            </Box>
            {product ? (
                <Box sx={{ width: "100%" }}>
                    <Typography variant="h5" sx={{ m: 2, fontWeight: 'bold' }}>{product.title}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold", m: 2, mb: 0, color: '#363535' }}>説明</Typography>
                    <Typography variant="body1" sx={{ m: 2, mt: 0 }}>{product.description}</Typography>
                    <Typography variant="body1" sx={{ m: 2 }}>{product.grade + "年" + product.department}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold", m: 2, mb: 0, color: '#363535' }}>教科</Typography>
                    <Typography variant="body1" sx={{ m: 2 }}>{product.subject}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold", m: 2, mb: 0, color: '#363535' }}>何年のもの？</Typography>
                    <Typography variant="body1" sx={{ m: 2 }}>{product.year}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold", m: 2, mb: 0, color: '#363535' }}>何学期のもの？</Typography>
                    <Typography variant="body1" sx={{ m: 2 }}>{product.semester}</Typography>
                </Box>
            ) : (
                <Typography sx={{ textAlign: 'center' }}>読み込み中...</Typography>
            )
            }
        </Box >
    )
}

export default ProductDetail
