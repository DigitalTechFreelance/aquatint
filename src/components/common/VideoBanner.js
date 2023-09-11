import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import useSetBgImage from '../../hooks/useSetBgImage';
import VideoPlayer from '../common/VideoPlayer';
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper";

function HomeBanner({ data }) {

  let size = useWindowSize();

  useSetBgImage(".setBgSrc", ".getBgSrc");
  const [playState, setPlayState] = React.useState({
    playing: false,
    buttonClose: false,
  });
  const handleVideoStatus = (videoPlayStatus) => {
    setPlayState({
      ...playState,
      playing: videoPlayStatus.playing,
      buttonClose: videoPlayStatus.buttonClose,
    });
  };

  const { title, desktopVideoUpload, mobileVideoUpload, desktopYoutubeLink, mobileYoutubeLink, desktopBannerImage, mobileBannerImage, youtubeVideoShow, videoShow, swiperShow, imageShow, multiplebanner } = data && data
  const desktopVideoUrl = videoShow ? desktopVideoUpload?.url : youtubeVideoShow ? JSON.parse(desktopYoutubeLink)?.url : null
  const mobileVideoUrl = videoShow ? mobileVideoUpload?.url : youtubeVideoShow? JSON.parse(mobileYoutubeLink)?.url : null
  return (
    <div 
    className={`bs-banner ${youtubeVideoShow || videoShow ? 'video-cont': '' }`}
     >
      {youtubeVideoShow || videoShow ? (
        <div className="video-wrap">
          <VideoPlayer
            buttonClose={false}
            playingStatus={handleVideoStatus}
            srcUrl={size.width > 768 ? desktopVideoUrl : mobileVideoUrl}
            muted={true}
            autoPlay={true}
            className="video-player"
            height="100%"
            loop={true}
          />
        </div>
      ) : imageShow ? (
        <div className='img-wrap'>
          <img src={size.width > 768 ? desktopBannerImage?.url : mobileBannerImage?.url} alt="Coating Car" title="Coating Car" />
        </div>
      ) : swiperShow ? (
        <Swiper
          slidesPerView={1}
          effect={"fade"}
          speed={3000}
          pagination={true}
          modules={[Pagination, Autoplay, EffectFade]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          className="mySwiper bs-banner-slider"
        >
          {multiplebanner && multiplebanner.Banner.length > 0 ? multiplebanner.Banner.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='bsl-media-wrap'>
                  <img src={size.width > 768 ? item.desktopImage.url : item.mobileImage.url} alt={item.desktopImage.name} title={item.desktopImage.name} />
                </div>
              </SwiperSlide>
            )
          }) : null}
          
          {/* <SwiperSlide>
            <div className='bsl-media-wrap'>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Coating Car" title="Coating Car" />
            </div>
            <div className='bsl-info-wrap'>
              {size.width > 768 ? (
                <Fade left distance="20px" delay={800} duration={800}>
                  <h2 className="bsl-title">next level detailing</h2>
                  <p className="bsl-desc">car exterior & interior detailing</p>
                  <a href="#" className="bsl-action btn btn-default"><span>get in touch</span></a>
              </Fade>
              ) : (
                <Fade bottom distance="20px" delay={800} duration={800}>
                  <h2 className="bsl-title">next level detailing</h2>
                  <p className="bsl-desc">car exterior & interior detailing</p>
                  <a href="#" className="bsl-action btn btn-default"><span>get in touch</span></a>
                </Fade>
              )}
            </div>
          </SwiperSlide> */}
        </Swiper>
      ) : null}

      <div className="banner-info">
        <Fade bottom distance="20px" delay={800} duration={800}>
          <h2 className="banner-title">{title}</h2>
        </Fade>
      </div>
    </div >
  )
}

export default HomeBanner