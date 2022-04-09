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

import testiImg1 from '../../assets/images/testimonial1.webp';
import testiImg2 from '../../assets/images/testimonial2.webp';
import testiImg3 from '../../assets/images/testimonial3.webp';

function TestimonialSlider() {
  useSetBgImage(".setBgSrc", ".getBgSrc");
  return (
    <section>
        <div className="bs-section sec-last">
          <div className="sec-cont">
            <Swiper 
              slidesPerView={1}
              spaceBetween={30}
              navigation={true} 
              modules={[Navigation]} 
              className="mySwiper bs-swiper typ-testimonials bs-testimonial"
            >
              <SwiperSlide>
                  <div className="mod-testimonial">
                    <div className="info-wrap">
                      <h3 className="title">Mr. John Doe</h3>
                      <strong className="place">Pune, India</strong>
                      <div className="desc">
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
                      </div>
                    </div>
                    <div className="img-wrap setBgSrc">
                      <img src={testiImg1} alt="Testimonial 1" title="testimonial 1" className="getBgSrc"/>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="mod-testimonial">
                    <div className="info-wrap">
                      <h3 className="title">Mr. John Doe</h3>
                      <strong className="place">Pune, India</strong>
                      <div className="desc">
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
                      </div>
                    </div>
                    <div className="img-wrap setBgSrc">
                      <img src={testiImg2} alt="Testimonial 2" title="testimonial 2" className="getBgSrc"/>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="mod-testimonial">
                    <div className="info-wrap">
                      <h3 className="title">Mr. John Doe</h3>
                      <strong className="place">Pune, India</strong>
                      <div className="desc">
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
                      </div>
                    </div>
                    <div className="img-wrap setBgSrc">
                      <img src={testiImg3} alt="Testimonial 3" title="testimonial 3" className="getBgSrc"/>
                    </div>
                  </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
   
  )
}

export default TestimonialSlider;