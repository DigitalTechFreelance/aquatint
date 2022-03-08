import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function TestimonialSlider() {
  return (
    <Swiper 
    slidesPerView={1}
    spaceBetween={30}
    navigation={true} 
    modules={[Navigation]} 
    className="mySwiper"
    >
      <SwiperSlide>
        <div className="bs-testimonial">
          <div className="mod-testimonial">
            <div className="info-wrap">
              <h3 className="title">
              </h3>
              <div className="desc">
                <p>

                </p>
              </div>
            </div>
            <div className="img-wrap">
              <img src="" alt="slider-img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bs-testimonial">
          <div className="mod-testimonial">
            <div className="info-wrap">
              <h3 className="title">
              </h3>
              <div className="desc">
                <p> </p>
              </div>
            </div>
            <div className="img-wrap">
              <img src="" alt="slider-img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bs-testimonial">
          <div className="mod-testimonial">
            <div className="info-wrap">
              <h3 className="title">
              </h3>
              <div className="desc">
                <p></p>
              </div>
            </div>
            <div className="img-wrap">
              <img src="" alt="slider-img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default TestimonialSlider;