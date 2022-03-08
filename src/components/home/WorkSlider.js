import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function WorkSlider() {
  return (
    <Swiper 
        slidesPerView={3}
        spaceBetween={36}
        loop={true}
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
    >
        <SwiperSlide>
            <div className="bs-tile typ-video">
                <div className="img-wrap">
                    <img />
                </div>
                <div className="action-wrap">
                    <a href="#" type="button" className="link" data-video-src="">1</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bs-tile typ-video">
                <div className="img-wrap">
                    <img />
                </div>
                <div className="action-wrap">
                    <a href="#" type="button" className="link" data-video-src="">2</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bs-tile typ-video">
                <div className="img-wrap">
                    <img />
                </div>
                <div className="action-wrap">
                    <a href="#" type="button" className="link" data-video-src="">3</a>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default WorkSlider