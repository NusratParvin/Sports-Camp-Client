import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Shared/Login/Login";
import { SignInMethod } from "firebase/auth";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Home from "../pages/HomePage/Home/Home";
import Error from "../pages/Error/Error";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashboardLayout from "../layouts/DashboardLayout";
import StudentHome from "../pages/Dashboard/Student/StudentHome";
import PrivateRoute from "./PrivateRoute";
import Selected from "../pages/Dashboard/Student/Selected";
import Enrolled from "../pages/Dashboard/Student/Enrolled";
import Payment from "../pages/Dashboard/Student/Payment";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import InstructorRoute from "./InstructorRoute";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome";
import AllClasses from "../pages/Dashboard/Instructor/AllClasses";
import AddNew from "../pages/Dashboard/Instructor/AddNew";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import StudentRoute from "./StudentRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <Error></Error>,
    children: [
      {
        path: 'studenthome',
        element: <StudentRoute><StudentHome></StudentHome></StudentRoute>
      },
      {
        path: 'selected',
        element: <StudentRoute><Selected></Selected></StudentRoute>
      },
      {
        path: 'enrolled',
        element:<StudentRoute><Enrolled></Enrolled></StudentRoute> 
      },
      {
        path: 'payment/:id',
        element: <StudentRoute><Payment></Payment></StudentRoute>
      },
      {
        path: 'history',
        element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute> 
      },
      {
        path: 'instructorhome',
        element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
      },
      {
        path: 'allclasses',
        element: <InstructorRoute><AllClasses></AllClasses></InstructorRoute>
      },
      {
        path: 'addnew',
        element: <InstructorRoute><AddNew></AddNew></InstructorRoute>
      },
      {
        path: 'update/:id',
        element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>
      },
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome></AdminHome> </AdminRoute>
      },
      {
        path: 'manageclasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>

      },
      {
        path: 'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },

    ]
  }

])