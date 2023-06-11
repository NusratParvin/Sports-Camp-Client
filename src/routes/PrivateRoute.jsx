import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Progress } from "@material-tailwind/react";


const PrivateRoute = ({ children }) => {

    const { user ,loading } = useAuth()
    const location = useLocation()
console.log(loading);
    if(loading){
        return <Progress className='w-56 mx-auto mt-72' value={50} label="Loading" />
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default PrivateRoute;