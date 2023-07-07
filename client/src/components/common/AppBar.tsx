import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function BasicAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <Icon>
                        <CardGiftcardIcon sx={{ color: "black" }} />
                    </Icon>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
                        kakokari
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}