import React, { useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Drawer, Button } from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, CubeTransparentIcon } from "@heroicons/react/24/outline";
import image from '../assets/slider/29655-triathlon.gif'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import useCart from "../hooks/useCart";


const DashboardLayout = () => {
    const { user, logOut } = useAuth()
    const [open, setOpen] = useState(0);
    const navigate = useNavigate()
    const [isRole] = useRole()
    const [cart] = useCart()
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const selectedClass= cart.filter(cl=>cl.status!=="Paid")
    const enrolledClass= cart.filter(cl=>cl.status==="Paid")
console.log(isRole);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('got you')
                navigate('/')
            })
            .catch(error => console.log(error));
    }

    return (
        // <div className="flex md:justify-between md:flex-row bg-indigo-100 h-screen">
        <div>
            {isRole === 'Admin' &&
                <div className="flex md:justify-between md:flex-row bg-cyan-100 min-h-screen">
                    <div>

                        <Card className=" fixed top-4 left-4 h-[calc(100vh-2rem)] w-min  max-w-[20rem] py-4 px-2 shadow-xl shadow-blue-gray-900/5">
                            <div className="mb-2 flex justify-between items-center gap-1 px-2 py-4">

                                <Typography variant="h6" className='text-xl bg-clip-text bg-gradient-to-r from-green-500 to-indigo-600  text-transparent'>
                                    Sports Camp
                                </Typography>
                                <img src={image} alt="brand" className="h-24 w-20 " />
                            </div>
                            <List>
                                {/* <Accordion
                        open={open === 1}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <PresentationChartBarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Dashboard
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Analytics
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Reporting
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Projects
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion> */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                        </svg>

                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        <NavLink to='/'>Home</NavLink>
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                <ListItemPrefix>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                                                </svg>

                                            </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        <NavLink to='manageclasses'>Classes</NavLink>
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
</svg>


                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        <NavLink to='manageusers'>Users</NavLink>
                                    </Typography>
                                </ListItem>
                               

                                <hr className="my-2 border-dashed border-indigo-200" />
                                
                                <ListItem onClick={handleLogOut}>
                                    <ListItemPrefix>

                                        <PowerIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Log Out
                                </ListItem>
                            </List>
                        </Card>
                    </div>
                    <div className=" w-9/12 mx-5 ps-8 mt-5 ">
                        <Outlet></Outlet>

                    </div>
                </div>
            }
            {isRole === 'Student' &&
            // <NavLink to='/studenthome'>
                 <div className="flex md:justify-between md:flex-row bg-indigo-100/60 min-h-screen">
                    <div>

                        <Card className=" fixed top-4 left-4 h-[calc(100vh-2rem)] w-min  max-w-[20rem] py-4 px-2 shadow-xl shadow-blue-gray-900/5">
                            <div className="mb-2 flex justify-between items-center gap-1 px-2 py-4">

                                <Typography variant="h6" className='text-xl bg-clip-text bg-gradient-to-r from-green-500 to-indigo-600  text-transparent'>
                                    Sports Camp
                                </Typography>
                                <img src={image} alt="brand" className="h-24 w-20 " />
                            </div>
                            <List>
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                        </svg>

                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        <NavLink to='/'>Home</NavLink>
                                    </Typography>
                                </ListItem>
                                <Accordion
                                    open={open === 2}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 2}>
                                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                                                </svg>

                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                My Classes
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                <NavLink to='selected'>Selected</NavLink>
                                                <ListItemSuffix>
                                                    <Chip value={selectedClass?.length || 0} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                                                </ListItemSuffix>
                                            </ListItem>

                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                <NavLink to='enrolled'>Enrolled</NavLink>
                                                <ListItemSuffix>
                                                    <Chip value={enrolledClass.length || 0} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                                                </ListItemSuffix>
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <hr className="my-2 border-dashed border-indigo-200" />
                                {/* <ListItem>
                                    <ListItemPrefix>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                            <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                                        </svg>

                                    </ListItemPrefix>
                                    <NavLink to='payment'>Payment</NavLink>
                                </ListItem> */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                                        </svg>


                                    </ListItemPrefix>
                                    {/* <NavLink to={`history/${user?.email}`}>Payment History</NavLink> */}
                                    <NavLink to='history'>Payment History</NavLink>
                                </ListItem>
                                <ListItem onClick={handleLogOut}>
                                    <ListItemPrefix>

                                        <PowerIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Log Out
                                </ListItem>
                            </List>
                        </Card>
                    </div>
                    <div className=" w-9/12 mx-5 ps-8 mt-5   ">
                        <Outlet></Outlet>
                    </div>
                </div>
            // </NavLink>
               
            }
            {isRole === 'Instructor' &&
                <div className="flex md:justify-between md:flex-row bg-teal-100/60 min-h-screen">
                    <div>
                        <Card className=" fixed top-4 left-4 h-[calc(100vh-2rem)] w-min  max-w-[20rem] py-4 px-2 shadow-xl shadow-blue-gray-900/5">
                            <div className="mb-2 flex justify-between items-center gap-1 px-2 py-4">

                                <Typography variant="h6" className='text-xl bg-clip-text bg-gradient-to-r from-green-500 to-indigo-600  text-transparent'>
                                    Sports Camp
                                </Typography>
                                <img src={image} alt="brand" className="h-24 w-20 " />
                            </div>
                            <List>
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                        </svg>

                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        <NavLink to='/'>Home</NavLink>
                                    </Typography>
                                </ListItem>
                                <Accordion
                                    open={open === 2}
                                    icon={
                                        <ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 2}>
                                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                                                </svg>

                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                My Classes
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                <NavLink to='allclasses'>All Classes</NavLink>
                                                {/* <ListItemSuffix>
                                                    <Chip value={cart?.length || 0} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                                                </ListItemSuffix> */}
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                <NavLink to='addnew'>Add New Class</NavLink>
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <hr className="my-2 border-dashed border-indigo-200" />
                                {/* <ListItem>
                                    <ListItemPrefix>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                            <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                                        </svg>

                                    </ListItemPrefix>
                                    <NavLink to='payment'>Payment</NavLink>
                                </ListItem> */}
                                <ListItem onClick={handleLogOut}>
                                    <ListItemPrefix>

                                        <PowerIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Log Out
                                </ListItem>
                            </List>
                        </Card>
                    </div>
                    <div className=" w-9/12 mx- ps-2 min-h-screen">
                        <Outlet></Outlet>

                    </div>
                </div>
            }




        </div>



    );
};

export default DashboardLayout;