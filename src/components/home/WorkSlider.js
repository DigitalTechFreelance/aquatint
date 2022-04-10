import React, { useRef, useState } from 'react';
import useSetBgImage from '../../hooks/useSetBgImage';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

//assets
import tileImg from '../../assets/images/offering-wash.webp';

function WorkSlider({data}) {

    useSetBgImage(".setBgSrc", ".getBgSrc");

  return (
    <Swiper 
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper bs-swiper typ-tile"
    >
         {data.map((item, index)=>(
            item.isActive && 
            <SwiperSlide key={index}>
                <div className="bs-tile typ-video setBgSrc">
                    {item.image.data !== null &&
                    <div className="img-wrap">
                        <img src={`http://localhost:1337${item.image.data.attributes.url}`} alt={item.image.data.attributes.alternativeText} title={item.image.data.attributes.name} className="getBgSrc" />
                    </div>
                    }
                    
                    <div className="action-wrap">
                        <a href="#" type="button" className="link" data-video-src="">
                            <span className="icon icon-play2"></span>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        ))} 
       
    </Swiper>
  )
}

export default WorkSlider