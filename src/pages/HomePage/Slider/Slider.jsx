
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
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { Typography } from "@material-tailwind/react";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}

        effect={"fade"}

        // crossFade="true"
        fadeEffect={{
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
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="relative h-full w-full opacity-90"
            src={image1}  />
          <div class="absolute bottom-30 w-full h-1/3 px-5 bg-black/40 text-center text-white text-opacity-60 text-5xl font-bold tracking-wide uppercase py-10 animate-pulse">
           TALK WITH YOUR FEET
          <br/>
           PLAY WITH YOUR HEART.
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-full w-full opacity-60" src={image2} alt="" />
            {/* <div class="absolute bottom-30 w-full h-36 px-5 py-3 bg-black/40 text-center text-white">Flower One Caption</div> */}
            <div class="absolute bottom-30 w-full h-1/3 px-5 bg-black/40 text-center text-white text-opacity-60 text-5xl font-bold tracking-wide uppercase py-14 animate-pulse">
          Basketball can be your favourite !

          </div>

        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-full w-full  opacity-70" src={image3} alt="" />
<div class="absolute bottom-30 w-full h-1/3 px-5 bg-black/40 text-center text-white text-opacity-60 text-5xl font-bold  uppercase py-14 tracking-wide animate-pulse">
            Swimming keeps you healthy!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-full w-full opacity-60" src={image4} alt="" />
           <div class="absolute bottom-30 w-full h-1/3 px-5 bg-black/40 text-center text-white text-opacity-60 text-5xl font-bold  uppercase py-14 tracking-wide">
            Best sports academy <br/>for kids
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
          <div class="absolute bottom-30 w-full h-1/3 px-5 bg-black/40 text-center text-white text-opacity-60 text-5xl font-bold  uppercase py-14 tracking-wide animate-pulse">
           Enjoyable swimming  <br/>classes for kids
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Slider;