import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Fade } from 'react-awesome-reveal';
import PopClassCard from './PopClassCard';

const PopClasses = () => {

    const { data: popClasses = [], isLoading: loading } = useQuery({
        queryKey: ['popClasses'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-ten-taupe.vercel.app/popClasses');
            return res.json();
        }
    })
    

    return (
        <div>
            <div className='w-full mx-auto' >
                <p className=' text-3xl font-bold text-center text-black/70 mb-8 mt-24'>Popular Courses</p>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pb-14 flex-wrap w-10/12 mx-auto'>

                    {popClasses.slice(0, 6).map(cl => (
                        <Fade duration={2000}>
                            <PopClassCard key={cl._id} data={cl}></PopClassCard>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopClasses;