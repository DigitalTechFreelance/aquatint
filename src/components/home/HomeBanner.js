import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';  
import ReactPlayer from "react-player";
import bannerImgDesktop from '../../assets/images/home-banner.webp';
import bannerImgTablet from '../../assets/images/home-banner.webp';
import bannerImgMobile from '../../assets/images/home-banner.webp';
import useSetBgImage from '../../hooks/useSetBgImage';
// import Videoplayer from '../components/common/Videoplayer';
import videosrc from '../../assets/video/copy-of-final.mp4';
import videoSrcMobile from '../../assets/video/comp2.mp4';

function HomeBanner(props: any) {

  let size = useWindowSize();

  useSetBgImage(".setBgSrc", ".getBgSrc");
  const [playState, setPlayState] = React.useState({
    playing: false,
    buttonClose: false,
});

const handleVideoStatus = (videoPlayStatus) => {
    setPlayState({...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose})
}

  return (
    <div className="bs-banner">
        {/* <div className="banner-image-wrap setBgSrc">
            <picture>
                <source media="(min-width: 1025px)" srcSet={bannerImgDesktop} />
                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={bannerImgTablet} />
                <source media="(max-width: 767px)" srcSet={bannerImgMobile} />
                <img className="getBgSrc" src=""
                    alt="growth banner image" title="growth banner image" />
            </picture>
        </div> */}
        <div className="video-wrap">
          <video
            src={size.width > 768 ? videosrc : videoSrcMobile}
            controls
            muted={false}
            volume
            autoPlay={"autoplay"}
            preload="auto"
            loop 
            className='video-player'
          > </video>
        </div>
        <div className="banner-info">
            <h2 className="banner-title">{props.bannerTitle}</h2>
        </div>
    </div>
  )
}

export default HomeBanner