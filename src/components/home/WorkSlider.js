import React, { useRef, useState } from 'react';
import useSetBgImage from '../../hooks/useSetBgImage';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

//assets
import tileImg from '../../assets/images/offering-wash.webp';

function WorkSlider() {

    useSetBgImage(".setBgSrc", ".getBgSrc");

  return (
    <Swiper 
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={true} 
        pagination={true}
        modules={[Navigation, Pagination]} 
        breakpoints={{
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 15
            }
        }}
        className="mySwiper bs-swiper typ-tile"
    >
        <SwiperSlide>
            <div className="bs-tile typ-video setBgSrc">
                <div className="img-wrap">
                    <img src={tileImg} alt="recent work 1" title="recent work 1" className="getBgSrc" />
                </div>
                <div className="action-wrap">
                    <a href="#" type="button" className="link" data-video-src="">
                        <span className="icon icon-play2"></span>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bs-tile typ-video setBgSrc">
                <div className="img-wrap">
                    <img src={tileImg} alt="recent work 2" title="recent work 2" className="getBgSrc"/>
                </div>
                <div className="action-wrap">
                    <a href="#" type="button" className="link" data-video-src="">
                    <span className="icon icon-play2"></span>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bs-tile typ-video setBgSrc">
                <div className="img-wrap">
                    <img src={tileImg} alt="recent work 3" title="recent work 3" className="getBgSrc"/>
                </div>
                <div className="action-wrap">
                    <a href="#" type="button" className="link" data-video-src="">
                    <span className="icon icon-play2"></span>
                    </a>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default WorkSlider