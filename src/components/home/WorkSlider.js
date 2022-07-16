import React from 'react';
import useSetBgImage from '../../hooks/useSetBgImage';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";


function WorkSlider({data}) {

    useSetBgImage(".setBgSrc", ".getBgSrc");
console.log("data work", data)
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
         {data.map((item, index)=>(
            item.isActive && 
            <SwiperSlide key={index}>
                <div className="bs-tile typ-video setBgSrc">
                    {item.image.data !== null &&
                    <div className="img-wrap">
                        <img src={`http://localhost:1337${item.image.url}`} alt={item.image.alternativeText} title={item.image.name} className="getBgSrc" />
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