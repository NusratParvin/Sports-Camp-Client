import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import { Fade } from "react-awesome-reveal";


const Classes = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })

    return (
        <div >
            <div className='md:w-full w-screen h-[450px] relative mb-24'>
                <Fade className='h-full w-full' duration={1500} >
                    <img className='h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    </Fade>
                <div className='absolute w-1/2 bg-black/80 h-28 -bottom-11 mx-auto left-1/4  text-white text-center py-6'>
                    <Fade duration={2000} direction="left"><p className='text-4xl'>Find All Classes </p> </Fade>
                    <hr className='my-1' />
                    <Fade duration={3000} direction="right"> <p >Join before they filled up!</p></Fade>
                </div>
            </div>

            <div className=' grid grid-cols-3 gap-10 mt-10 mb-14 flex-wrap w-4/5 mx-auto'>

                {classes.map(cl => (
                    <Fade duration={2000}>
                    <ClassesCard key={cl._id} data={cl}></ClassesCard>
                    </Fade>
                ))}
            </div>

        </div>
    );
};

export default Classes;