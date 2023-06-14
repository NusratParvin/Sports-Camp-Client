import React, { useState } from 'react';

import Navigation from '../pages/Shared/Navbar/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { Switch } from '@material-tailwind/react';


const MainLayout = () => {
    // const [darkToggle, setDarkToggle] = useState(false)
    const [theme, setTheme] = useState('light');


      

    return (
        <div className=''>
            {/* <div  class={`bg-transparent  ${darkToggle && 'dark'  }`} */}
            <div className={` ${theme === 'dark' ? 'dark bg-black' : 'light'}`}>

            {/* <div class="toggleDarkBtn pl-6 relative z-30 w-36 md:left-72 md:top-5 bottom-20  "> */}
            {/* <Switch id="gray" color="gray" onClick={() => setDarkToggle(!darkToggle)} className='pb-3 mt-3' />
            <span className=' pt-12 absolute -top-9 pl-2'>Dark</span>
               
            </div> */}
            <Navigation theme={theme} setTheme={setTheme}></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default MainLayout;