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

import testiImg1 from '../../assets/images/testimonial1.webp';
import testiImg2 from '../../assets/images/testimonial2.webp';
import testiImg3 from '../../assets/images/testimonial3.webp';

function TestimonialSlider({data}) {
  useSetBgImage(".setBgSrc", ".getBgSrc");
  return (
    <section>
        <div className="bs-section sec-last">
          <div className="sec-cont">
            <Swiper 
              slidesPerView={1}
              spaceBetween={30}
              navigation={true} 
              pagination={true}
              modules={[Navigation, Pagination]} 
              className="mySwiper bs-swiper typ-testimonials bs-testimonial"
            >
              {data.map((item, index)=>(
                <SwiperSlide key={index}>
                    <div className="mod-testimonial">
                      <div className="info-wrap">
                        <h3 className="title">{item.name}</h3>
                        <strong className="place">{item.info}</strong>
                        <div className="desc">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="img-wrap setBgSrc">
                        <img src={`http://localhost:1337${item.image.data.attributes.url}`} alt={item.image.data.attributes.alternativeText} title={item.image.data.attributes.name} className="getBgSrc"/>
                      </div>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
   
  )
}

export default TestimonialSlider;