import React from 'react';

import Navigation from '../pages/Shared/Navbar/Navigation';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;