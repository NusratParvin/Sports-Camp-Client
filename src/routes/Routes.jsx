import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Shared/Login/Login";
import { SignInMethod } from "firebase/auth";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Home from "../pages/HomePage/Home/Home";
import Error from "../pages/Error/Error";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
      path: "/",
      element: <Home></Home>
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
    
])