import React, { useEffect } from 'react';
import { Navbar, Typography, Button, IconButton, Card, Collapse, Slider, } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import {Menu, MenuHandler, MenuList, MenuItem, Avatar,  } from "@material-tailwind/react";
  import {Cog6ToothIcon, PowerIcon,
    InboxArrowDownIcon, UserCircleIcon, LifebuoyIcon} from "@heroicons/react/24/outline";
    import Carousel from "nuka-carousel"
    import image from "../../../assets/sports-academy.jpg"
import { easeCircleOut, easeElasticOut } from 'd3-ease';
    


const Navigation = () => {
    const { user,logOut } = useAuth()
    const [openNav, setOpenNav] = React.useState(false);





    useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setOpenNav(false)
        );
      }, []);

    const handleLogOut = () => {
        
        logOut()
            .then(() => { console.log('got you')})
            .catch(error => console.log(error));
    }


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                <NavLink to='/' className="flex items-center">
                    Home
                </NavLink>
            </Typography>


            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                <NavLink to='/instructors' className="flex items-center">
                    Instructors
                </NavLink>
            </Typography>


            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                <NavLink to='/classes' className="flex items-center">
                    Classes
                </NavLink>
            </Typography>

            {
                user ?
                    <>
                        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                            <NavLink className="flex items-center">
                                DashBoard
                            </NavLink>
                        </Typography>
                        <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="candice wu"
          className="cursor-pointer"
          src={user?.photoURL}
        />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2">
          <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            DashBoard
          </Typography>
        </MenuItem>

        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <PowerIcon strokeWidth={2} className="h-4 w-4" />
          <Typography onClick={handleLogOut} variant="small" className="font-normal">
            Log Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
                    </>
                    :
                    <>
                    <NavLink to='/login'>
                        <Button variant="gradient" size="sm" className="hidden lg:inline-block" >
                            <span>Login</span>
                        </Button>
                    </NavLink>
                        
                    </>
            }

        </ul>
    );

    return (
        <>
        <section className="seperatorWrapper">
  <div className="seperatorGradient">
  </div>
</section>
            <Navbar className="sticky inset-0 z-10 bg-transparent h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Summer Camp
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        {/* //button */}
                        <IconButton variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false} onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Login</span>
                    </Button>
                </Collapse>
            </Navbar>

            {/* <Carousel autoplay="true" autoplayInterval="3000"
            speed="2000"
            wrapAround="true"
            slideCount="4"
             easing={easeCircleOut} edgeEasing={easeElasticOut}>
      <img  className=' object-cover w-full' src={image} />
      <img src="/image2.png" />
      <img src="/image3.png" />
      <img src="/image4.png" />
      <img src="/image5.png" />
    </Carousel> */}




        </>
    );
};

export default Navigation;