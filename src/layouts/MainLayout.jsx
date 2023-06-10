import React from 'react';

import Navigation from '../pages/Shared/Navbar/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;