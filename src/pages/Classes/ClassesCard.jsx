import { Card, CardHeader, CardBody, Typography, Button, CardFooter, } from "@material-tailwind/react";
import classNames from 'classnames';
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useRole from "../../hooks/useRole";


const ClassesCard = ({ data }) => {
    const { _id, image, name, price, seatsAvailable, instructor,studentsEnrolled } = data
    const existingClassNames = 'w-72  hover:scale-110 hover:duration-1000'; // Replace with your existing class names
    const redBackgroundClassName = seatsAvailable == 0 ? 'bg-red-300 ' : '';
    const className = classNames(existingClassNames, redBackgroundClassName);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    // const []

    const { user } = useAuth()
    const [, refetch] = useCart()
    const location = useLocation()
    const navigate = useNavigate()
    const [isRole] = useRole()

useEffect(()=>{
    if(isRole!=="Student"){
        setButtonDisabled(true);
    }
},[])
    const handleAddToCart = classData => {
        console.log(classData);

        if (user && user.email) {
            const cartItem = { classId: _id, name, image, price, seatsAvailable, email: user.email }
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        toast.success(`${classData.name} added to your cart !`)
                        setButtonDisabled(true);
                                            }
                })
        }
        else {
            toast.error("Please login first to enroll!")
            navigate('/login', { state: { from: location } })
        }
    }



    return (
        <div >
            <Card className={className} >
                <CardHeader shadow={false} floated={false} className="h-36 rounded-none ">
                    <img src={image} className="w-full h-full object-cover hover:opacity-90 hover:scale-125 hover:duration-500
                    " />
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-2">
                        <Typography color="indigo" className="font-bold text-sm">
                            {name}
                        </Typography>
                        <Typography color="red" className=" font-bold text-sm">
                            ${price}
                        </Typography>
                    </div>
                    <Typography variant="small" color="gray" className="font-normal opacity-80">
                        <strong> Instructor:</strong> {instructor}
                        <br />
                        <strong>Available Seats:</strong> {seatsAvailable}
                        <br />
                        <strong>Students Enrolled:</strong> {studentsEnrolled}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={() => handleAddToCart(data)} ripple={false} fullWidth={true} className='bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100' disabled={buttonDisabled}
                    >
                        Add Class
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ClassesCard;