import { Card, CardHeader, CardBody, Typography, Button, CardFooter, } from "@material-tailwind/react";

const ClassesCard = ({data}) => {
    const {image,name,price,seatsAvailable,instructor}=data
    return (
        <div >
            <Card className="w-72  hover:scale-110 hover:duration-1000">
                            <CardHeader shadow={false} floated={false} className="h-36 rounded-none">
                                <img src={image} className="w-full  h-full object-cover hover:opacity-90 hover:scale-125 hover:duration-500" />
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
                                   <strong>Seats:</strong> {seatsAvailable}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button ripple={false} fullWidth={true}  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                                >
                                    Add Class
                                </Button>
                            </CardFooter>
                        </Card>
        </div>
    );
};

export default ClassesCard;