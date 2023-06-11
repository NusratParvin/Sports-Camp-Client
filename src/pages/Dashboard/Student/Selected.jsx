import { Button, ButtonGroup, Card, Typography } from "@material-tailwind/react";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const TABLE_HEAD = ["#", "Class Name","Price", "Available Seats",  "Payment","Delete"];

const Selected = () => {
    const [cart, refetch] = useCart()
    console.log(cart);

    const handleDelete = id => {console.log(id);
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
                        else{
                            toast.error("not deleted")
                        }
                    })
                }
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
    }

    return (
        <div className="w-4/5 mx-auto">

        <div className="text-center text-gray-800 text-3xl py-5">
<p>Selected Classes</p>
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
                        {cart.map(({ _id,name, price, seatsAvailable }, index) => {
                            const isLast = index === cart.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={_id}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-bold">
                                            {index+1}
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
                                        <Typography  variant="small" color="blue" className="font-medium text-center">
                                        <Button variant="text" color="indigo">Pay Now</Button>
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small"  className="font-medium">
                                        <Button onClick={()=>handleDelete(_id)} className="text-red-500" variant="text">X</Button>
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

export default Selected;