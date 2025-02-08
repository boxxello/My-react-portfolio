import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

function MainLayout({ children }) {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Navbar />
            <Box flex="1">
                {children}
            </Box>
            <Footer />
        </Box>
    );
}

export default MainLayout;
