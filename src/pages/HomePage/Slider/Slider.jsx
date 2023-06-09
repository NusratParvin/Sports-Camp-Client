
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import image1 from "../../../assets/slider/football-3024154_1920.jpg"
import image2 from "../../../assets/slider/basket (1).jpg"
import image3 from "../../../assets/slider/pexels-oleksandr-pidvalnyi-1227571.jpg"
import image4 from "../../../assets/slider/basket (2).jpg"
import image5 from "../../../assets/slider/coach-teaching-kid-indoor-swimming-pool-how-swim-dive-swimming-lesson-kids-development.jpg"
import './Slider.css'

// import required modules
import {  EffectFade,Autoplay, Pagination, Navigation } from "swiper";
import { Typography } from "@material-tailwind/react";

const Slider = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        effect={"fade"}
        
            // crossFade="true"
            fadeEffect= {{
                crossFade: true
              }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade,Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            {/* <img  src={image1} alt="" /> */}
            {/* <figure className="relative h-full w-full"> */}
      <img
        className="relative h-full w-full rounded-xl"
        src={image1}
      />
      <div className="absolute top-40 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        {/* <> */}
          <Typography variant="h5" color="blue-gray">
            Sara Lamalo
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        {/* </div> */}
        <Typography variant="h5" color="blue-gray">
          Growth
        </Typography>
      </div>
    {/* </figure> */}
            
        </SwiperSlide>
        <SwiperSlide>
        <img  src={image2} alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img  src={image3} alt="" />

        </SwiperSlide>
        <SwiperSlide>           
             <img  src={image4} alt="" />
</SwiperSlide>
        <SwiperSlide>
        <img src={image5} alt="" />

        </SwiperSlide>

      </Swiper>
            
        </div>
    );
};

export default Slider;