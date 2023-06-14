import React, { Fragment, useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
import {
    Card,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { NavLink, } from 'react-router-dom';


const TABLE_HEAD = ["#", "Class Name", "Price", "Seats", "Enrolled", "Status", "Feedback", "Action"];



const AllClasses = () => {
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpen = () => {
        setOpen(true);
      };
  
      const handleOpenModal = (row) => {
          setSelectedRow(row);
          handleOpen();
        };
  
  
  const handleClose = () => {
    setOpen(false);
  };

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

            {/* <div className="text-center text-gray-800 text-2xl py-5">
                <p>My Classes</p>
            </div> */}
            <div className='pb-4 text-center'>
               <h2 className="mt-4  text-2xl font-semibold leading  text-black/70">Classes</h2>
            <small>{myClasses?.length} data found</small> 
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
                                            <Typography variant="small" color={item.status === 'Approved' ? 'green' : item.status === 'Pending' ? 'amber' : item.status === 'Denied' ? 'red' : 'blue-gray'} className="text-center ">
                                                {item.status}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Button size='sm' variant='text'onClick={() => handleOpenModal(item)}>
                                                Read
                                            </Button>


                                            <Dialog open={open} onClose={handleClose}>
        <div className="flex items-center justify-between">
          <DialogHeader>{selectedRow?.name}</DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={handleClose} />
        </div>
        <DialogBody divider>

        <Typography>
     {selectedRow?.feedback? selectedRow.feedback : "No Feedback"}
    </Typography>

        </DialogBody>
        <DialogFooter className="space-x-2">
        <Button variant="gradient" onClick={handleOpen}>
                                                        Ok, Got it
                                                    </Button>
        </DialogFooter>
      </Dialog>

                                        
                                            {/* <Dialog open={open} handler={handleOpen}>
                                                <DialogHeader>
                                                    <Typography variant="h5" color="blue-gray">
                                                        Your Attention is Required!
                                                    </Typography>
                                                </DialogHeader>
                                                <DialogBody divider className="grid place-items-center gap-4">
                                                   
                                                    <Typography className="text-center font-normal">
                                                        {item.feedback? item.feedback : "No feedback found!"}
                                                    </Typography>
                                                </DialogBody>
                                                <DialogFooter className="space-x-2">
                                                    <Button variant="gradient" onClick={handleOpen}>
                                                        Ok, Got it
                                                    </Button>
                                                </DialogFooter>
                                            </Dialog> */}
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