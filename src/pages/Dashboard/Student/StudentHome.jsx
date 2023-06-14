import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import person from '../../../assets/slider/person.png'
import useAxios from '../../../hooks/useAxios';

const StudentHome = () => {
    const {user}= useAuth()
    const [Axios] = useAxios()
    const [userProfile, setUserProfile] = useState([])
    useEffect(() => {
        Axios(`/users/${user.email}`)
            .then(res => {
                setUserProfile(res.data)

            }
            )
    }, [])
    return (
        <div className=' text-center mt-24 text-black/70' >
        <p className='text-4xl pb-8'> Welcome {user.displayName}</p>
        <p className='text-xl pb-8'>{userProfile.role}</p>
                 <div className='h-44 w-44 mx-auto'>
             <img className="h-full w-full rounded-full object-cover border border-gray-400" src={user?.photoURL ? user.photoURL : person} alt="user image" />
         </div>
     </div>
    );
};

export default StudentHome;