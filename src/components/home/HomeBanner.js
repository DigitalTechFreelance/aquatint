import React from 'react';
import useWindowSize from '../../hooks/useWindowSize'; 
import useSetBgImage from '../../hooks/useSetBgImage';
// import Videoplayer from '../components/common/Videoplayer';
import videosrc from '../../assets/video/copy-of-final.mp4';
import videoSrcMobile from '../../assets/video/comp2.mp4';

function HomeBanner(props) {

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
        <div className="video-wrap">
          <video
            src={size.width > 768 ? videosrc : videoSrcMobile}
            controls
            muted={true}
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