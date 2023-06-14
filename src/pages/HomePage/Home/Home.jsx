import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import PopInstructors from '../PopInstructors/PopInstructors';
import PopClasses from '../PopClasses/PopClasses';
import Facilities from '../Facilities/Facilities';
import Gallery from '../Gallery/Gallery';


const Home = () => {

    const [darkToggle, setDarkToggle] = useState(false)

    return (
        <div >
            <Slider></Slider>
            <PopClasses></PopClasses>
            <Facilities></Facilities>
            <Gallery></Gallery>
            <PopInstructors></PopInstructors>

        </div>


    );
};

export default Home;