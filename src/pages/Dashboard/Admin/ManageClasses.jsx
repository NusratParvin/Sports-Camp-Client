import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { IconButton } from "@material-tailwind/react";
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";



const ManageClasses = () => {
    const [classes, setClasses] = useState([])
    const [feedbackData, setFeedbackData] = useState("");
    const [selectedRow, setSelectedRow] = useState(null);
      const [open, setOpen] = useState(false);
    const [Axios] = useAxios()

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

useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get('https://summer-camp-server-ten-taupe.vercel.app/classes/admin');
        const data = res.data;
        setClasses(data.map((cl) => ({ ...cl, disabled: false })));
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);


  const handleApprove = (data) => {
    console.log(data.status);
    if (data.status === "Denied" || data.status === "Pending") {
      Axios.put(`/classes/${data._id}`, { status: 'Approved' })
        .then(res => {
          const updatedClasses = classes.map((cl) => {
            if (cl._id === data._id) {
              return { ...cl, status: 'Approved', disabled: true };
            }
            return cl;
          });
  
          setClasses(updatedClasses);
  
          if (res.data.modifiedCount > 0) {
            toast.success(`${data.name} is approved!`);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else if (data.status === "Approved") {
      console.log('clicked app');
      toast.warning(`${data.name} is already approved!`);
    }
  };

    const handleSendFeedback = () => {
        console.log(feedbackData, selectedRow._id);
            Axios.put(`/classes/feedback/${selectedRow._id}`, { feedback: feedbackData })
                .then(res => {
                     if (res.data.modifiedCount > 0) {
                        toast.success(`Feedback sent for ${selectedRow.name} `);
                        setFeedbackData('')
                    }
                })
                .catch(err => {
                    console.log(err);
                });
   
handleClose()
    };


const handleDeny = (data) => {
  if (data.status === "Approved" || data.status === "Pending") {
    Axios.put(`/classes/${data._id}`, { status: 'Denied' })
      .then(res => {
        const updatedClasses = classes.map((cl) => {
          if (cl._id === data._id) {
            return { ...cl, status: 'Denied', disabled: true };
          }
          return cl;
        });

        setClasses(updatedClasses);

        if (res.data.modifiedCount > 0) {
          toast.success(`${data.name} is denied!`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    toast.warning(`${data.name} is already denied!`);
  }
};


    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <div className='pb-4 text-center'>
               <h2 className="-mt-4  text-2xl font-semibold leading  text-black/70">Classes</h2>
            <small>{classes?.length} data found</small> 
            </div>
            
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs bg-white/80 px-4">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-700 bg-teal-600">
                        <tr className="text-left">
                            <th className="p-3"> #</th>
                            <th className="p-3">Image</th>
                            <th className="p-3">Class Name</th>
                            <th className="p-3">Instructor</th>
                            {/* <th className="p-3 text-right">Instructor Email</th> */}
                            <th className="p-3">Available Seats</th>
                            <th className="p-3 ">Price</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cl, index) => (
                                <tr key={cl._id} className="border-b border-opacity-80 border-cyan-700/60 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <img src={cl.image} alt="" className='w-8 h-8 object-cover' />
                                        {/* <p></p> */}
                                    </td>
                                    <td className="p-3">
                                        <p>{cl.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className='font-bold uppercase'>{cl.instructor}</p>
                                        <p className="dark:text-gray-400">{cl.email}</p>

                                    </td>
                                    {/* <td className="p-3">
        <p className="dark:text-gray-400">{cl.email}</p>
      </td> */}
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{cl.seatsAvailable}</p>
                                    </td>
                                    <td className="p-3 ">
                                        <p className='font-bold'>${cl.price}</p>
                                    </td>
                                    <td className="p-3">

                                        {cl.status === 'Approved' && (
                                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm">
                                                {cl.status}
                                            </span>
                                        )}
                                        {cl.status === 'Pending' && (
                                            <span class="px-2 py-1 font-semibold leading-tight text-yellow-700 rounded-sm">
                                                {cl.status}
                                            </span>
                                        )}
                                        {cl.status === 'Denied' && (
                                            <span class="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm">
                                                {cl.status}
                                            </span>
                                        )}
                                    </td>

                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 flex justify-between gap-4 items-center">
                                           
                                            <IconButton disabled={cl.disabled} onClick={() => handleApprove(cl)} size="sm" variant="text" className='w-4 h-4'  color='teal'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>

                                            </IconButton>
                                            <IconButton disabled={cl.disabled} onClick={() => handleDeny(cl)}  size="sm" variant="text" className='w-4 h-4' color='red'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                </svg>

                                            </IconButton>
                                            <IconButton onClick={() => handleOpenModal(cl)} size="sm" variant="text" className='w-4 h-4'  color='blue'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                                                    <path fill-rule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                                </svg>

                                            </IconButton>

<Dialog open={open} onClose={handleClose}>
        <div className="flex items-center justify-between">
          <DialogHeader>{selectedRow?.name}</DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={handleClose} />
        </div>
        <DialogBody divider>

<Textarea color="indigo" label="Feedback"  value={feedbackData}
              onChange={(e) => setFeedbackData(e.target.value)}/>

        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="gradient" color="green" onClick={handleSendFeedback}>
            Send
          </Button>
        </DialogFooter>
      </Dialog>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageClasses;