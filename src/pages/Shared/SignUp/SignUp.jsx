import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';



const SignUp = () => {
    const { register, handleSubmit, reset,setValue, formState: { errors } , watch} = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const password = watch('password');
  const confirmPassword = watch('confirmPassword');


  const handleConfirmPasswordChange = (e) => {
    setValue('confirmPassword', e.target.value); // Update confirm password value
  };

    const createUSer = data => {
        const info = {...data,role:"Student"}
        console.log(info);
        createUser(info.email, info.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser, 'loggedUSer');

                updateUserProfile(info.name, info.photoURL)
                    .then(() => {
                        console.log('profile info updated')
                        const newUser ={ 
                            name: info.name, 
                            email:info.email,
                            password: info.password,
                            photoURL:info.photoURL,
                            role:info.role
                        }
                        console.log(newUser,'newUser');
                        fetch(`http://localhost:5000/users/${info.email}`,{
                            method:'PUT',
                            headers:{'content-type':'application/json'},
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.upsertedCount) {
                                    reset();
                                    toast('Successfully Signed Up!');
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error =>{ 
                toast('You are already registered with this email!');
                console.log(error.code, 'error in creating user')}
            )
    };

    return (

        <div className='  h-3/4' >
        <div className='containerx h-full  object-contain'>
            <div className="p-8 lg:w-1/2 mx-auto ">
                {/* <div className=" bg-gray-400  rounded-t-lg p-8">
                    <p className="text-center text-base  text-black font-normal">Sign up with</p>
                    <div>
                        <div className=" flex items-center justify-center space-x-4 mt-3">
                            <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-900 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 mr-3" >
                                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                                Github
                            </button>
                            <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-900 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48">
                                    <path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                    <path fill="#e53935" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                                    <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                    <path fill="#1565c0" d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                                </svg>                  Google
                            </button>
                        </div>
                    </div>
                </div> */}
                <div className="bg-gray-300 rounded-b-lg pt-4 pb-8 px-4 lg:px-24">
                    <p className="text-center text-3xl 
                bg-clip-text bg-gradient-to-r from-green-600 to-indigo-600  text-transparent font-bold py-4 uppercase">Register Yourself</p>


                    <form  onSubmit={handleSubmit(createUSer)} className="mt-6">
                        <div className="relative">
                            {/* <input id="username" type="text" placeholder="Email" /> */}

                            <input  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-800  transition  rounded-md w-full   py-2   text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"  type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name" />
                            {errors.name && <span className="text-red-600 mt-4 italic text-xs font-bold">Name is required</span>}
                            <div className="absolute left-0 inset-y-0 flex pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-700 p-1" viewBox="0 0 20 20" fill="currentColor">  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                            </div>
                        </div>

                        <div className="relative mt-3">              
                         
                         
                         <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-800  transition  rounded-md w-full   py-2   text-gray-800  leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"/>
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
                                })} placeholder="Your Password"  />
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
                            required: true  })} placeholder="Confirm Password" onChange={handleConfirmPasswordChange} 
                             />
                            
      <div className="absolute left-0 inset-y-0 flex pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-700 p-1" viewBox="0 0 20 20" fill="currentColor">  
                                 <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                </svg>
                            </div>
                            {password !==confirmPassword && confirmPassword && <p className="text-red-600 mt-4 italic text-xs font-bold">Passwords does not match!</p>}
                        </div>
                        {/* <p className="mt-4 italic text-xs font-bold text-green-700">strong</p> */}

                        <div className="flex items-center justify-center mt-8">
                            <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" > Create Account
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">

                        <p className="text-sm text-center" htmlFor="remember">Already a member?
                            <Link to='/login' className="text-indigo-400 hover:text-indigo-500 uppercase ps-2">Login Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
</div>
    );
};

export default SignUp;