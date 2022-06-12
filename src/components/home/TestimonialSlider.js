import React, { useRef, useState } from 'react';
import useSetBgImage from '../../hooks/useSetBgImage';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

//assets

import tomJoseph from '../../assets/images/testimonials/tom-joseph.webp';
import sameerSharma from '../../assets/images/testimonials/sameer-sharma.webp';
import ajayGodambe from '../../assets/images/testimonial3.webp';
import satyeshPati from '../../assets/images/testimonials/satyesh-patil.webp';
import anupamGupta from '../../assets/images/testimonial3.webp';

function TestimonialSlider() {
  useSetBgImage(".setBgSrc", ".getBgSrc");
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      speed={1500}
      navigation={true}
      pagination={true}
      autoHeight={true}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      className="mySwiper bs-swiper typ-testimonials bs-testimonial"
    >
      <SwiperSlide>
        <div className="mod-testimonial">
          <div className="info-wrap">
            <h3 className="title">Mr. Ajay Godambe</h3>
            <strong className="place">Pune, India</strong>
            <div className="desc">
              <p>No Competition!</p>
              <p>Class leading detailers with a focused approach and expert guidance.</p>
              <p>My goto place for over 5 years.</p>
            </div>
          </div>
          <div className="img-wrap">
            {/* <img src={ajayGodambe} alt="Testimonial 1" title="testimonial 1" className="getBgSrc" /> */}
            <span className="testi-initials">A</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mod-testimonial">
          <div className="info-wrap">
            <h3 className="title">Mr. Satyesh Patil</h3>
            <strong className="place">Pune, India</strong>
            <div className="desc">
              <p>Positive: Professionalism, Punctuality, Quality, Value</p>
              <p>I have been visiting them since 2018 and today got opti coat pro coating done on my VW Polo TSI. Marvelous work, super finish upto quality standards. Very commited team to detailing.</p>
            </div>
          </div>
          <div className="img-wrap setBgSrc">
            <img src={satyeshPati} alt="Satyesh Patil" title="Satyesh Patil" className="getBgSrc" />
            {/* <span className="testi-initials">S</span> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mod-testimonial">
          <div className="info-wrap">
            <h3 className="title">Mr. Tom Joseph</h3>
            <strong className="place">Pune, India</strong>
            <div className="desc">
              <p>One of the finest car detailers in India. They suggested me to go for a special steam wash. I had driven the car all the way from Kerala to Pune and after the 1 hour long procedure my car was looking as if it is ceramic coated. I was attended by Mr.Lallett &amp; I’m greatly impressed by the way he has trained the team.</p>
            </div>
          </div>
          <div className="img-wrap setBgSrc">
            <img src={tomJoseph} alt="Tom Joseph" title="Tom Joseph" className="getBgSrc" />
            {/* <span className="testi-initials">T</span> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mod-testimonial">
          <div className="info-wrap">
            <h3 className="title">Mr. Anupam Gupta</h3>
            <strong className="place">Pune, India</strong>
            <div className="desc">
              <p>Thank you so much lallett, you and your team are extremely professional. The best part is you and your team doesn’t differentiate between luxury and normal car. Irrespective of which car they are detailing. The attention to detail by each indivisual was superb.  No other detailer is as professional as you guys are.</p>
            </div>
          </div>
          <div className="img-wrap">
            {/* <img src={anupamGupta} alt="Testimonial 3" title="testimonial 3" className="getBgSrc" /> */}
            <span className="testi-initials">A</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mod-testimonial">
          <div className="info-wrap">
            <h3 className="title">Mr. Sameer Sharma</h3>
            <strong className="place">Pune, India</strong>
            <div className="desc">
              <p>Ever seen 10+ year old Octavia sparkling brand new in its original OEM paint? Sounds impossible, right? That’s what Aquatint does & having seen that, all my cars are maintained only at Aquatint since last 5 years. They are the best fitness doctors for your car’s paint & leather. The amount of passion &amp; efforts they bring to make your car sparkle brand new is unmatchable.</p>
            </div>
          </div>
          <div className="img-wrap setBgSrc">
            <img src={sameerSharma} alt="Sameer Sharma" title="Sameer Sharma" className="getBgSrc" />
            {/* <span className="testi-initials">S</span> */}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default TestimonialSlider;