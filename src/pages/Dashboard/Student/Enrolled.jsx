import { Button, ButtonGroup, Card, Typography } from "@material-tailwind/react";
import useCart from "../../../hooks/useCart";

const TABLE_HEAD = ["#", "Class Name", "Price", "Available Seats", "Status"];

const Enrolled = () => {
    const [cart, refetch] = useCart()
    
    const enrolledClass= cart.filter(cl=>cl.status==="Paid")
    console.log(enrolledClass[0],'status');

    return (
        <div className="w-4/5 mx-auto">

<div className='py-4 text-center'>
               <h2 className="-mt-4  text-2xl font-semibold leading  text-black/70">Enrolled Classes</h2>
            <small>{enrolledClass?.length} booked for you</small> 
            </div>

            {enrolledClass.length!==0 ?

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
                            {enrolledClass.map(({ _id, name, price, seatsAvailable,status }, index) => {
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
                                            <Typography variant="small" color="green" className="font-bold text-center">
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
            :
            <div className="text-center mt-8">No data.</div>

                        }

        </div>
    );
};

export default Enrolled;