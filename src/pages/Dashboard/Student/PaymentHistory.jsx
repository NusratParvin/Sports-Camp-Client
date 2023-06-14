import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';
import { Card, Typography } from "@material-tailwind/react";
import moment from 'moment';


const TABLE_HEAD = ["#", "Class Name", "Tansaction ID", "Price", "Date"];

const PaymentHistory = () => {
    const [Axios] = useAxios()
    const [history, setHistory] = useState([])

    useEffect(() => {
        Axios.get('/history')
            .then(res => {
                console.log(res.data);
                setHistory(res.data)
            })
            .catch(error => {
                toast.error(error)            // Handle any error that occurs during the request
            });
    }, [])


    return (

        <div className="w-full mx-auto ">

<div className='py-4 text-center'>
               <h2 className="-mt-4  text-2xl font-semibold leading  text-black/70">Transaction History</h2>
            <small> A total of {history?.length} transactions have been recorded</small> 
            </div>
            {
                history.length !== 0 ?

                    <div className='mt-0 w-full mx-auto'>
                        <Card className=" overflow-x-scroll h-full w-full">
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map(({ _id, price, date, className, transactionId }, index) => {
                                        const isLast = index === history.length - 1;
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
                                                        {className}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue" className="font-normal">
                                                        {transactionId}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-bold">
                                                        ${price}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                                                        {moment(date).format('DD/MM/YY')}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                    :
                    <div className="text-center mt-8">No Payment History.</div>

            }
        </div>
    );
};

export default PaymentHistory;