import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import InstructorsCard from './InstructorsCard';
const Instructors = () => {

    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-ten-taupe.vercel.app/instructors');
            return res.json();
        }
    })


    return (
        <div >
            <div className='md:w-full w-screen h-[500px] relative mb-24 '>
                <Fade className='h-full w-full' duration={1500} >
                    <img className='h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1526494661200-9d7cfd4b2404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                </Fade>
                <div className='absolute w-1/2 bg-black/80 h-28 -bottom-11 mx-auto left-1/4  text-white text-center py-6'>
                    <Fade duration={2000} direction="top"><p className='text-4xl'> Our Instructors </p> </Fade>
                    <hr className='my-1' />
                    <Fade duration={3000} direction="bottom"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></Fade>
                </div>

            </div>

            <div className=' bg-blue-100 dark:bg-gray-900 dark:text-white/70  py-6'>
                <div className=' grid md:grid-cols-3 grid-cols-1 gap-7 mx-12 mt-10 mb-14 flex-wrap'>

                    {instructors.map(ins => (
                        <Fade duration={2000}>
                            <InstructorsCard key={ins._id} data={ins}></InstructorsCard>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;