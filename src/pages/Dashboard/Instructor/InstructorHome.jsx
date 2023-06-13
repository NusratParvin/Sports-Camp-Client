import React from 'react';
import useAuth from '../../../hooks/useAuth';

const InstructorHome = () => {
    const {user}= useAuth()
    return (
        
          <div className=' text-center mt-24 text-6xl text-black/70' >Welcome {user.displayName}
                <div className='h-54 w-36  mx-auto'>
                    <img className='w-full h-full object-cover' src={user?.photoURL ? user.photoURL : person} alt="" />

                </div>
            </div>
        
    );
};

export default InstructorHome;