import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Progress } from "@material-tailwind/react";
import InstructorHome from '../pages/Dashboard/Instructor/InstructorHome';
import InstructorRoute from './InstructorRoute';
import StudentHome from '../pages/Dashboard/Student/StudentHome';
import useRole from '../hooks/useRole';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isRole] = useRole()
    const location = useLocation()

    if (loading) {
        return <Progress className='w-56 mx-auto mt-72' value={50} label="Loading" />
    }

    if (user) {
        return children
    }
  

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;