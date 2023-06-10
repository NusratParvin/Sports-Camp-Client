
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
            className="relative h-full w-full rounded-xl opacity-90"
            src={image1}
          />
          {/* <div className="absolute top-40 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl bg-transparent py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            {/* <> */}
            {/* <Typography variant="h5" color="white">
              Sara Lamalo
            </Typography>
            <Typography color="gray" className="mt-2 font-normal">
              20 July 2022
            </Typography> */}
            {/* </div> */}
            {/* <Typography variant="h5" color="blue-gray">
              Growth
            </Typography> */}
          {/* </div> */} 
          {/* <div className="inset-0 h-full bg-black/40"><p className="absolute top-40 tracking-wider text-white text-5xl font-bold  uppercase animate-pulse ">
                      TALK WITH YOUR FEET. PLAY WITH YOUR HEART.

          </p>
          </div> */}
          <div className="absolute top-40 tracking-wide text-black text-opacity-50 text-5xl font-bold left-1/4 uppercase">
          TALK WITH YOUR FEET. PLAY WITH YOUR HEART.

          </div>
          {/* </figure> */}

        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-full w-full rounded-xl opacity-60" src={image2} alt="" />
            {/* <div class="absolute bottom-30 w-full h-36 px-5 py-3 bg-black/40 text-center text-white">Flower One Caption</div> */}
            <div className="absolute top-40 tracking-wide text-white text-opacity-80 text-5xl font-bold left-1/4 uppercase">
          TALK WITH YOUR FEET. PLAY WITH YOUR HEART.

          </div>

        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-full w-full rounded-xl  opacity-70" src={image3} alt="" />
<div class="absolute bottom-30 w-full h-1/3 px-5 py-3 bg-black/40 text-center text-white">
            Swimming keeps you healthy!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-full w-full rounded-xl opacity-60" src={image4} alt="" />
            <div className="absolute top-40 tracking-wide text-black text-opacity-50 text-5xl font-bold left-1/4 uppercase">
            Best sports academy <br/>for kids
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />

        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Slider;