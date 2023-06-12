import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
// import InsClassCard from './InsClassCard';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { Button, ButtonGroup } from "@material-tailwind/react";


const TABLE_HEAD = ["#", "Class Name", "Price", "Available Seats", "Currently Enrolled", "Status"];



const AllClasses = () => {
    const [Axios] = useAxios()
    const { user } = useAuth()
    const [myClasses, setMyClasses] = useState([])

    useEffect(() => {
        Axios(`/allclasses?email=${user?.email}`)
            .then(res => {

                setMyClasses(res.data)
                //  return res
            })
    }, [])

    console.log(myClasses);

    return (

        <div className="w-10/12 mx-auto">

            <div className="text-center text-gray-800 text-2xl py-5">
                <p>My Classes</p>
            </div>



            <div className="">
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
                            {myClasses.map(({ _id, name, price, seatsAvailable, status, studentsEnrolled }, index) => {
                                const isLast = index === myClasses.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={_id}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                {index + 1}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-center">
                                                ${price}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-center">
                                                {seatsAvailable}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-center">
                                                {studentsEnrolled}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className=" text-center">
                                                {status}
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