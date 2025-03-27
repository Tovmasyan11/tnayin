

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';

import { AppBar, Button, Box, Typography } from '@mui/material';

const pages = [
    { text: 'Home', link: '/' },
    { text: 'Subscription', link: '/subscription' },
    { text: 'Products', link: '/products' },
    { text: 'Userss', link: '/userss' },
];

export const Navbar = () => {

    const navigate = useNavigate();

    const { signOut, user, } = useContext(AuthContext);

    const handlePageChange = (link) => {
        navigate(link);
    };

    return (
        <AppBar sx={{ px: '8px' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                    {pages.map((page) => (
                        <Button
                            key={page.text}
                            onClick={() => handlePageChange(page.link)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.text}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography fontWeight='bold'>{UserActivation.firstName}</Typography>

                    <Button
                        onClick={signOut}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        <LogoutIcon />
                    </Button>
                </Box>
            </Box>
        </AppBar>
    );
};