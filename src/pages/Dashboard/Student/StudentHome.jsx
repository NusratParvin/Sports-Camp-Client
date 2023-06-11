import React from 'react';
import useAuth from '../../../hooks/useAuth';
import person from '../../../assets/slider/person.png'

const StudentHome = () => {
    const { user, loading } = useAuth()
    console.log(user, loading);
    return (
        <div>
            <div className=' text-center mt-24 text-6xl text-white' >Welcome {user.displayName}
                <div className='h-54 w-36  mx-auto'>
                    <img className='w-full h-full object-cover' src={user?.photoURL? user.photoURL:person  } alt="" />

                </div>
            </div>
        </div>
    );
};

export default StudentHome;