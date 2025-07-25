import React from 'react';
import Navber from '../../Shared/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;