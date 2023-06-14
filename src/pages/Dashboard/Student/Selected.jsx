import { Button, ButtonGroup, Card, Typography } from "@material-tailwind/react";
import useCart from "../../../hooks/useCart";
import { toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from "react-router-dom";


const TABLE_HEAD = ["#", "Class Name", "Price", "Available Seats", "Payment", "Delete"];

const Selected = () => {
    const [cart, refetch] = useCart()
    
    const selectedClasses = cart.filter(singleClass=> singleClass.status !== "Paid")
    console.log(selectedClasses[0]);

    const handleDelete = id => {
        console.log(id);
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`http://localhost:5000/cart/${id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    refetch();
                                    toast.success("Deleted Successfully!")
                                }
                                else {
                                    toast.error("Not deleted")
                                }
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    }

    return (
        <div className="w-11/12 mx-auto">

<div className='py-4 text-center'>
               <h2 className="-mt-4  text-2xl font-semibold leading  text-black/70">Selected Classes</h2>
            <small>{selectedClasses?.length} in wishlist</small> 
            </div>

            {selectedClasses.length!==0 ?
                 <div className=" w-full">
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
                            {selectedClasses.map(({ _id, name, price, seatsAvailable }, index) => {
                                const isLast = index === cart.length - 1;
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
                                            <Typography variant="small" color="blue" className="font-medium text-center">
                                                <Link to={`/dashboard/payment/${_id}`}>
                                                    <Button variant="text" color="indigo">Pay Now</Button>

                                                </Link>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" className="font-medium">
                                                <Button onClick={() => handleDelete(_id)} className="text-red-500" variant="text">X</Button>
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
            <div className="text-center mt-8">No Classes Selected.</div>
            }
           

        </div>
    );
};

export default Selected;