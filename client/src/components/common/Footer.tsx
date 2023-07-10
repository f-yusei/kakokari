import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue: number) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate("/")
                break;
            case 1:
                navigate("/notification")
                break;
            case 2:
                navigate("/post")
                break;
            case 3:
                navigate("/mypage")
                break;
            default:
                break;
        }
    };

    return (
        <BottomNavigation
            sx={{ width: "100%", position: "fixed", bottom: 0 }}
            value={value}
            onChange={(event, newValue) => {
                handleChange(newValue);
            }}
            showLabels
        >
            <BottomNavigationAction
                label="ホーム"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label="お知らせ"
                icon={<NotificationsIcon />} />
            <BottomNavigationAction
                label="出品"
                icon={<PostAddIcon />} />
            <BottomNavigationAction
                label="マイページ"
                icon={<AccountCircleIcon />} />
        </BottomNavigation>
    );
};

export default Footer;
