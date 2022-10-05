import React from 'react';
import useSetBgImage from '../../hooks/useSetBgImage';
import Fade from 'react-reveal/Fade';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";



function TestimonialSlider({ data }) {
  useSetBgImage(".setBgSrc", ".getBgSrc");
  return (
    <section>
      <div className="bs-section sec-last">
        <div className="sec-cont">
          <Fade bottom distance="20px" delay={500} duration={800}>
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
              {data.map((item, index) => {
                const nameInitial = item.name.split(' ')[1].charAt(0);
                return (
                  <SwiperSlide key={index}>
                    <div className="mod-testimonial">
                      <div className="info-wrap">
                        <h3 className="title">{item.name}</h3>
                        <strong className="place">{item.info}</strong>
                        <div className="desc">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      {item.image !== null ? (
                        <div className="img-wrap setBgSrc">
                          <img src={item.image.url} alt={item.image.alternativeText} title={item.image.name} className="getBgSrc" />
                        </div>
                      ) : (
                        <div className="img-wrap">
                          <span className="testi-initials">{nameInitial}</span>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Fade>
        </div>
      </div>
    </section>

  )
}

export default TestimonialSlider;