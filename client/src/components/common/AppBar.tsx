import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function CommonAppBar() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <IconButton onClick={() => {
                        window.location.href = "/"
                    }}>
                        <CardGiftcardIcon sx={{ color: "black" }} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
                        kakokari
                    </Typography>
                    //TODO ログイン状態によって表示を変える
                    <>
                        <Button onClick={() => {
                            window.location.href = "/login"
                        }
                        }>ログイン</Button>
                        <Button onClick={() => {
                            window.location.href = "/register"
                        }
                        }
                        >新規登録</Button>
                    </>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default CommonAppBar;