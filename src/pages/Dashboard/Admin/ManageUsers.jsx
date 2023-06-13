import { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { Fade } from 'react-awesome-reveal';
import { Button } from '@material-tailwind/react';
import { toast } from 'react-toastify';

const ManageUsers = () => {
    const [Axios] = useAxios()
    const [userData, setUserData] = useState([])
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        Axios('/users')
            .then(res => {
                setUserData(res.data)
            })
            .catch(err => { console.log(err) })
    }, [Axios])

    // const makeInstructor = (user) => {
    //     // Make API request to update the user role as 'Instructor'
    //     Axios.put(`/users/${user._id}`, { role: 'Instructor' })
    //         .then(res => {
    //             const updatedUserData = userData.map(item => {
    //                 if (item._id === user._id) {
    //                     return { ...item, role: 'Instructor' };
    //                 }
    //                 return item;
    //             });
    //             console.log(res);
    //             setUserData(updatedUserData);
    //             setDisable(true)
    //             if (res.data.modifiedCount > 0) {
    //                     toast.success(`${user.name} is Instructor now!`)
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };

    // const makeAdmin = (user) => {
    //     // Make API request to update the user role as 'Admin'
    //     Axios.put(`/users/${user._id}`, { role: 'Admin' })
    //         .then(res => {
    //             const updatedUserData = userData.map(item => {
    //                 if (item._id === user._id) {
    //                     return { ...item, role: 'Admin' };
    //                 }
    //                 return item;
    //             });
    //             console.log(res);
    //             setUserData(updatedUserData);
    //             setDisable(true)
    //             if (res.data.modifiedCount > 0) {
    //                 toast.success(`${user.name} is Admin now!`)
    //         }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };

    const makeInstructor = (user) => {
        Axios.put(`/users/${user._id}`, { role: 'Instructor' })
            .then(res => {
                const updatedUserData = userData.map(item => {
                    if (item._id === user._id) {
                        return { ...item, role: 'Instructor', disable: 'Instructor' };
                    }
                    return item;
                });
                setUserData(updatedUserData);
                if (res.data.modifiedCount > 0) {
                    toast.success(`${user.name} is Instructor now!`);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const makeAdmin = (user) => {
        Axios.put(`/users/${user._id}`, { role: 'Admin' })
            .then(res => {
                const updatedUserData = userData.map(item => {
                    if (item._id === user._id) {
                        return { ...item, role: 'Admin', disable: 'Admin' };
                    }
                    return item;
                });
                setUserData(updatedUserData);
                if (res.data.modifiedCount > 0) {
                    toast.success(`${user.name} is Admin now!`);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };


    return (

        <section class="container mx-auto p-6 font-mono">
            <div class="w-full mb-8 overflow-hidden shadow-lg">
                <div class="w-full ">
                    <table class="w-full">
                        <thead>
                            <tr class="text-xs font-semibold tracking-wide text-left text-gray-900 bg-cyan-700 uppercase border-b border-gray-600">
                                <th class="px-4 py-3">#</th>
                                <th class="px-4 py-3">Profile</th>
                                {/* <th class="px-4 py-3">Name</th> */}
                                <th class="px-4 py-3">Email</th>
                                <th class="px-4 py-3">Status</th>
                                <th class="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white text-xs">
                            {userData.map((singleUser, index) => (

                                <tr class="text-gray-700 " key={index}>
                                    <td class="px-3 text-ms font-semibold border">{index + 1}</td>
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                                <img class="object-cover w-full h-full rounded-full" src={singleUser.photoURL} alt="" loading="lazy" />
                                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p class="font-semibold text-black">{singleUser.name}</p>
                                                <p class="text-xs text-gray-600">{singleUser._id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    {/* <td class="px-3 text-ms font-semibold border"></td> */}

                                    <td class="px-4 py-3 text-ms font-semibold border">{singleUser.email}</td>
                                    {/* <td class="px-4 py-3 text-xs border">
                                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{singleUser.role}</span>
                                    </td> */}

                                    <td class="px-4 py-3 text-xs border">
                                        {singleUser.role === 'Student' && (
                                            <span class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-sm">
                                                {singleUser.role}
                                            </span>
                                        )}
                                        {singleUser.role === 'Instructor' && (
                                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                {singleUser.role}
                                            </span>
                                        )}
                                        {singleUser.role === 'Admin' && (
                                            <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                                                {singleUser.role}
                                            </span>
                                        )}
                                    </td>


                                    <td class="px-4 py-3 text-sm border flex gap-3">
                                        
                                        {singleUser.disable === 'Admin' ? (
                                            <Button disabled onClick={() => makeAdmin(singleUser)} size="sm" variant="outlined" color="red" className="px-2" >
                                                Admin
                                            </Button>
                                        ) :
                                            (
                                                <Button onClick={() => makeAdmin(singleUser)} size="sm" variant="outlined" color="red" className="px-2" >
                                                    Admin
                                                </Button>
                                            )
                                        }
                                        {singleUser.disable === 'Instructor' ? (
                                            <Button disabled onClick={() => makeInstructor(singleUser)} size="sm" variant="outlined" color="green" className="px-2 mr-2" >
                                                Instructor
                                            </Button>
                                        ) :
                                            (
                                                <Button onClick={() => makeInstructor(singleUser)} size="sm" variant="outlined" color="green" className="px-2 mr-2" >
                                                    Instructor
                                                </Button>
                                            )
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageUsers;