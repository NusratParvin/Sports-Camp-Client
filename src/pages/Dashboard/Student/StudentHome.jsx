import React from 'react';
import useAuth from '../../../hooks/useAuth';

const StudentHome = () => {
    const {user,loading}=useAuth()
    console.log(user,loading);
    return (
        <div>
            <div>Welcome {user.displayName}</div>
        </div>
    );
};

export default StudentHome;