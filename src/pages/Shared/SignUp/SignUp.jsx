import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';



const SignUp = () => {
    const { register, handleSubmit, reset, setValue, formState: { errors }, watch } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');


    const handleConfirmPasswordChange = (e) => {
        setValue('confirmPassword', e.target.value); // Update confirm password value
    };

    const createUSer = data => {
        const info = { ...data, role: "Student" }
        console.log(info);
        createUser(info.email, info.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser, 'loggedUSer');

                updateUserProfile(info.name, info.photoURL)
                    .then(() => {
                        console.log('profile info updated')
                        const newUser = {
                            name: info.name,
                            email: info.email,
                            password: info.password,
                            photoURL: info.photoURL,
                            role: info.role
                        }
                        console.log(newUser, 'newUser');
                       
                        fetch('https://summer-camp-server-ten-taupe.vercel.app/users',{
                            method:'POST',
                            headers:{'content-type':'application/json'},
                            body: JSON.stringify(newUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                                toast.success('You are Registered!')
                                navigate('/');
                            }
                        })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                toast('You are already registered with this email!');
                console.log(error.code, 'error in creating user')
            }
            )
    };

    return (

        <div className='  h-3/4' >
            <div className='containerx min-h-screen  object-cover'>
                <div className="py-12 lg:w-1/2 mx-auto  ">

                    <div className="bg-gray-300 rounded-b-lg pt-4 px-1 lg:px-4 border border-blue ">


                        <p className="text-center text-3xl 
                bg-clip-text bg-gradient-to-r from-green-600 to-indigo-600  text-transparent font-bold py-4 uppercase">Register Yourself</p>


                        <form onSubmit={handleSubmit(createUSer)} className="mt-1 mb-3">
                            <div className="w-full">
                                <div className="relative">
                                    <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-800  transition  rounded-md w-full   py-2   text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name" />
                                    {errors.name && <span className="text-red-600 mt-4 italic text-xs font-bold">Name is required</span>}
                                    <div className="absolute left-0 inset-y-0 flex pt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-700 p-1" viewBox="0 0 20 20" fill="currentColor">  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                                    </div>
                                </div>

                            </div>

                            <div className="relative mt-3">


                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-800  transition  rounded-md w-full   py-2   text-gray-800  leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" />
                                {errors.photoURL && <span className="text-red-600 mt-4 italic text-xs font-bold">PhotoURL is required</span>}
                                <div className="absolute left-0 inset-y-0 flex pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-700 p-1" viewBox="0 0 20 20" fill="currentColor" > <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative my-3">

                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email" className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-800  transition  rounded-md w-full py-2 text-gray-800  leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" />
                                {errors.email && <span className="text-red-600 mt-4 italic text-xs font-bold">Email is required</span>}
                                <div className="absolute left-0 inset-y-0 flex pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-700 p-1" viewBox="0 0 20 20" fill="currentColor" > <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                            </div>


                            <div className="relative mt-3">

                                <input type="password" className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-800   transition  rounded-md w-full   py-2   text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="Your Password" />
                                {errors.password?.type === 'required' && <p className="text-red-600 mt-4 italic text-xs font-bold">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600 mt-4 italic text-xs font-bold">Password must be 6 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600 mt-4 italic text-xs font-bold">Password must have one Uppercase and one Special letter!</p>}

                                <div className="absolute left-0 inset-y-0 flex pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-700 p-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mt-3">

                                <input type="password" className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-800   transition  rounded-md w-full   py-2   text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" {...register("confirmPassword", {
                                    required: true
                                })} placeholder="Confirm Password" onChange={handleConfirmPasswordChange}
                                />

                                <div className="absolute left-0 inset-y-0 flex pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-700 p-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                    </svg>
                                </div>
                                {password !== confirmPassword && confirmPassword && <p className="text-red-600 mt-4 italic text-xs font-bold">Passwords does not match!</p>}
                            </div>

                            <div className="flex items-center justify-center mt-8">
                                <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" > Create Account
                                </button>
                            </div>
                        </form>
                        <div className=" text-center pb-8">

                            <p className="text-sm text-center">Already a member?
                                <Link to='/login' className="text-indigo-400 hover:text-indigo-500 uppercase ps-2">Login Here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;