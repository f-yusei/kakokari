import { Box, Tab, Typography } from '@mui/material'
import MultiTab from '@mui/material/Tabs';
import React, { useEffect } from 'react'
import Recommend from './Recommend';
import productsApi from '../../products/api/products';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../../redux/features/productSlice';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export default function Tabs() {
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.product.value);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await productsApi.getAllProducts();
                const products = res.data.userProducts;
                dispatch(setProduct(products));
            } catch (err) {
                alert(err);
            }
        };
        getProducts()
    }, [dispatch])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <MultiTab value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="おすすめ" {...a11yProps(0)} />
                    <Tab label="マイリスト" {...a11yProps(1)} />
                    <Tab label="ピックアップ" {...a11yProps(2)} />
                </MultiTab>
            </Box>
            <CustomTabPanel value={value} index={0} >
                <Box sx={{ display: 'flex', alignContent: "space-between", gap: '1', flexWrap: 'wrap' }}>
                    {products.length > 0 && products.map((product: any) => (
                        <Recommend key={product._id} product={product} />
                    ))}
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                マイリスト
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                ピックアップ
            </CustomTabPanel>
        </Box>
    );
}