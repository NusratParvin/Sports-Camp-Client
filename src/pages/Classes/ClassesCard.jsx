import { Card, CardHeader, CardBody, Typography, Button, CardFooter, } from "@material-tailwind/react";
import classNames from 'classnames';
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useRole from "../../hooks/useRole";
import useAxios from "../../hooks/useAxios";


const ClassesCard = ({ data }) => {
    const [isRole] = useRole()

    const { _id, image, name, price, seatsAvailable, instructor, studentsEnrolled } = data
    const existingClassNames = 'w-72  hover:scale-110 hover:duration-1000'; // Replace with your existing class names
    const seatClassName = seatsAvailable <= 0 ? 'bg-red-300 ' : '';
    // const notStudentClassName = (isRole === "Admin" || "Instructor")? 'bg-red-300 ' : '';
    const className = classNames(existingClassNames, seatClassName);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const { user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (isRole !== "Student") {
    //         setButtonDisabled(true);
    //     } else {
    //         setButtonDisabled(false);
    //     }
    // }, []);


    // useEffect(() => {
    //     if (seatsAvailable ===0) {
    //         setButtonDisabled(true);
    //     }
    //     else{
    //         setButtonDisabled(false)
    //     }
    // }, [data])
    useEffect(() => {
        if (seatsAvailable <= 0 || isRole === "Admin" || isRole === "Instructor") {
          setButtonDisabled(true);
        } else {
          setButtonDisabled(false);
        }
      }, [seatsAvailable, isRole]);
    
      const handleSelectCourse = () => {
        if (isAuthenticated) {
          // User is logged in, proceed with selecting the course
          // Add your logic here
          // Example: navigate to a specific page or perform an action
        } else {
          // User is not logged in, display a toast or navigate to the login page
          toast.error("Please log in to select the course");
          navigate("/login");
        }
      };
    

    const handleUser = () => { 
        toast("login first")
    setButtonDisabled(true) }
    const handleAddToCart = classData => {
        if (user && user.email) {
            const cartItem = {
                classId: _id,
                name,
                image,
                price,
                seatsAvailable,
                email: user.email,
                status:"Not Paid"
            };
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(cartItem),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch();
                        toast.success(`${classData.name} added to your cart!`);
                        setButtonDisabled(true);
                    }
                });
        } else {
            toast.error('Please login first to enroll!');
            setButtonDisabled(true)
            // navigate('/login', { state: { from: location } });
        }
    };




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
                    {/* {
                        (isRole !== "Student") ? 
                            <Button
                                fullWidth={true} disabled={buttonDisabled}
                                className="bg-gray-900/50 text-gray-900 hover:bg-indigo-400  cursor"
                                onClick={() => handleUser()}
                            >
                                Login
                            </Button>:
                            (
                                (seatsAvailable === 0 ? (
                                    <Button
                                        fullWidth={true} disabled={buttonDisabled}
                                        className="bg-blue-gray-900/20 text-blue-gray-900 opacity-50 cursor-not-allowed"
                                        
                                    >
                                        No Seats Available
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => handleAddToCart(data)}
                                        ripple={false}
                                        fullWidth={true} disabled={buttonDisabled}
                                        className="bg-blue-gray-900230 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                                    >
                                        Add Class
                                    </Button>
                                )
                                ))
                    } */}

{isRole !== "Student" ? (
            <Button
              fullWidth={true}
              disabled={buttonDisabled}
              className="bg-gray-900/50 text-gray-900 hover:bg-indigo-400 cursor"
              onClick={() => handleAddToCart()}
            >
              Select Course
            </Button>
          ) : (
            <Button
              onClick={() => handleAddToCart(data)}
              fullWidth={true}
              disabled={buttonDisabled}
              className="bg-blue-gray-900/30 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
            >
              Add Class
            </Button>
          )}
                </CardFooter>
            </Card>
        </div>
    );
};

export default ClassesCard;