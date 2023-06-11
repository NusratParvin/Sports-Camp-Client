import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";


const PopClassCard = ({ data }) => {
    const { _id, image, name, price, seatsAvailable, instructor, studentsEnrolled } = data

    return (
        <div>
            <Card
                shadow={false}
                className="relative grid h-64 w-full items-end justify-center overflow-hidden text-center hover:scale-110 duration-700  hover:opacity-80"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    // className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                    className="absolute inset-0 m-0 h-full w-full rounded-none"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', opacity:'0.9'
                    }}
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-2 md:px-6">
                    <Typography
                        variant="h5"
                        color="white"
                        className="mb-12 font-medium text-xl "
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="h6"
                        color="white"
                        className="mb-2 font-medium text-sm "
                    >
                       Price: ${price}
                    </Typography>
                    <Typography
                        variant="h6"
                        color="white"
                        className="mb-2 font-medium text-sm "
                    >
                       Seats Available: ${seatsAvailable}
                    </Typography>
                    <Typography variant="h6" className="mb-4 text-gray-400 text-sm font-normal">
                        Instructor: {instructor}
                    </Typography>
                    {/* <Avatar
                        size="xl"
                        variant="circular"
                        alt="candice wu"
                        className="border-2 border-white"
                        src=""
                    /> */}
                </CardBody>
            </Card>
        </div>
    );
};

export default PopClassCard;