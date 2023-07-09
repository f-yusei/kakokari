import { Box, Tab, Typography } from '@mui/material'
import MultiTab from '@mui/material/Tabs';
import React from 'react'
import { randomEmoji } from '../../../assets/RandomEmoji';
import Recommend from './Recommend';

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
            <CustomTabPanel value={value} index={0}>
                <Recommend />
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