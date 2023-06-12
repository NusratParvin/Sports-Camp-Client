import React, { Fragment, useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
// import InsClassCard from './InsClassCard';
import {
    
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    
  } from "@material-tailwind/react";

import {
    Button,

} from "@material-tailwind/react";
import { NavLink,  } from 'react-router-dom';


const TABLE_HEAD = ["#", "Class Name", "Price", "Seats", "Enrolled", "Status", "Feedback", "Action"];



const AllClasses = () => {

    const [Axios] = useAxios()
    const { user } = useAuth()
    const [myClasses, setMyClasses] = useState([])


    useEffect(() => {
        Axios(`/allclasses?email=${user?.email}`)
            .then(res => {
                setMyClasses(res.data)
            })
    }, [Axios])

    console.log(myClasses);





    return (

        <div className="w-11/12 mx-auto">

            <div className="text-center text-gray-800 text-2xl py-5">
                <p>My Classes</p>
            </div>



            <div className="w-full">
                <Card className="overflow-x-hidden h-full w-full">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-300 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="indigo"
                                            className="text-center leading-none opacity-90 font-bold "
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {myClasses.map((item, index) => {
                                const isLast = index === myClasses.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={item._id}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                {index + 1}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-center">
                                                ${item.price}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-center">
                                                {item.seatsAvailable}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-center">
                                                {item.studentsEnrolled}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color={status === 'Approved' ? 'green' : status === 'Pending' ? 'amber' : item.status === 'Denied' ? 'red' : 'blue-gray'} className="text-center ">
                                                {item.status}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className=" text-center">
                                                {item.feedback}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" className="font-medium">
                                                <NavLink to={`/dashboard/update/${item._id}`}>
                                                    <Button variant="text" className="text-indigo-500" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>

                                                    </Button>
                                                    </NavLink>
                                                    {/* <UpdateClass open={open} handler={handleOpen} classInfo= {item }></UpdateClass> */}


            
                                                  


                                                   
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </div>




        </div>

    );
};

export default AllClasses;