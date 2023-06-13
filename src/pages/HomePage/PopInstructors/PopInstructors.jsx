import React from 'react';
import PopInstructorsCard from './PopInstructorsCard';
import { useQuery } from '@tanstack/react-query';
import { Fade } from 'react-awesome-reveal';
import classnames from 'classnames';



const PopInstructors = () => {
    const componentClasses = classnames('bg-gray-100', 'dark:bg-gray-900');
    // const className = classNames( redBackgroundClassName);



    const { data: popInstructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['popInstructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/popInstructors');
            return res.json();
        }
    })
    console.log(popInstructors, 'popinstructors');
    return (
        <div className={componentClasses}>

            {/* <div class="bg-gray-200 w-full  flex-row justify-center items-center grid grid-cols-3 gap-3 "> */}


            <section className="py-6 mt-16 bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Coaching team</p>
                    <h1 className="text-3xl text-black/70 mb-12 font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
                    <div className="grid grid-cols-3 justify-center mt-8">

                        {
                            popInstructors.map(ins =>
                                <Fade duration={2000}>
                                    <PopInstructorsCard key={ins._id} instructors={ins} ></PopInstructorsCard>
                                </Fade>
                            )
                        }

                    </div>
                </div>
            </section>

            {/* </div> */}



        </div>
    );
}

export default PopInstructors;