import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import PopInstructors from '../PopInstructors/PopInstructors';
import PopClasses from '../PopClasses/PopClasses';


const Home = () => {

    const [darkToggle, setDarkToggle] = useState(false)

    return (
        <div >
            <Slider></Slider>
            <PopInstructors></PopInstructors>
            <PopClasses></PopClasses>
        </div>



        // <div  class={` w-full bg-gray-300 relative ${darkToggle && 'dark'  }`}
        // >
        //     <label class="toggleDarkBtn absolute -top-4">
        //         <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        //         <span class="slideBtnTg round"></span>
        //     </label>
        //     <div class=" bg-gray-100  text-white dark:bg-gray-900">

        //         <Slider></Slider>
        //         <PopInstructors></PopInstructors>
        //         <PopClasses></PopClasses>
        //     </div>
        // </div>
    );
};

export default Home;