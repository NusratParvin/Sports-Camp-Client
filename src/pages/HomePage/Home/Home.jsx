import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import PopInstructors from '../PopInstructors/PopInstructors';
import PopClasses from '../PopClasses/PopClasses';
import Toggle from '../../Shared/Toggle';


const Home = () => {

    const [darkToggle, setDarkToggle] = useState(false)

    return (
        // <div >
        //     <Toggle/>
        //     <ThemeProvider theme="light">

        //     <Slider></Slider>
        //     <PopInstructors></PopInstructors>
        //     <PopClasses></PopClasses>
        //     </ThemeProvider>
        // </div>



        <div  class={` w-full bg-gray-300 relative ${darkToggle && 'dark'  }`}
        >
            <label class="toggleDarkBtn absolute -top-4">
                <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                <span class="slideBtnTg round"></span>
            </label>
            <div class=" bg-gray-100  text-white dark:bg-gray-900">
                {/* <img
                    class="w-full"
                    src="https://v1.tailwindcss.com/img/card-top.jpg"
                    alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                    <div class="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
                        The Coldest Sunset
                    </div>
                    <p class="text-gray-800 dark:text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                    </span>
                </div> */}
                <Slider></Slider>
                <PopInstructors></PopInstructors>
                <PopClasses></PopClasses>
            </div>
        </div>
    );
};

export default Home;