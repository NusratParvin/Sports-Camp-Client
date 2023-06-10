import React from 'react';
import Slider from '../Slider/Slider';
import PopInstructors from '../PopInstructors/PopInstructors';
import PopClasses from '../PopClasses/PopClasses';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <PopInstructors></PopInstructors>
            <PopClasses></PopClasses>
        </div>
    );
};

export default Home;