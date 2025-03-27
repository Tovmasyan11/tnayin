

import { Outlet } from "react-router-dom";
import { Container, Box } from '@mui/material';
import { Navbar } from './Navbar';
import './MainLayout.css';
export const MainLayout = () => {
    return (
        <Container id="main-layout" disableGutters={true}>
            <Navbar />

            <Box className="content" sx={{ marginTop: '90px' }}>
                <Outlet />
            </Box>
        </Container>
    );
};