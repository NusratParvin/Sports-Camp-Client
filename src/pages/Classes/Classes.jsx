import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';

const Classes = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })

    console.log(classes);

    return (
        <div >
            <div className='w-full h-[450px] relative mb-24'>
                <img className='h-full w-full object-cover object-center ' src="https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <div className='absolute w-1/2 bg-black/80 h-28 -bottom-11 mx-auto left-1/4  text-white text-center py-6'>
                   <p className='text-4xl'>Find All Classes </p> 
                    <hr className='my-1' />
                    <p >Join before they filled up!</p>
                </div>
            </div>
            
            <div className=' grid grid-cols-4 gap-7 mx-12 mt-10 mb-14 flex-wrap border'>
                {classes.map(cl => (
                    <ClassesCard key={cl._id} data={cl}></ClassesCard>
                ))}
            </div>
            
        </div>
    );
};

export default Classes;