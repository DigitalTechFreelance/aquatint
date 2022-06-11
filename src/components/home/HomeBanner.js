import React, { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import useSetBgImage from '../../hooks/useSetBgImage';
// import Videoplayer from '../components/common/Videoplayer';
import videosrc from '../../assets/video/copy-of-final.mp4';
import videoSrcMobile from '../../assets/video/comp2.mp4';
import ReactPlayer from 'react-player';

function HomeBanner(props) {

  let size = useWindowSize();

  useSetBgImage(".setBgSrc", ".getBgSrc");
  const [playState, setPlayState] = React.useState({
    playing: false,
    buttonClose: false,
  });

  const handleVideoStatus = (videoPlayStatus) => {
    setPlayState({ ...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose })
  }

  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    setAutoPlay(true)
  }, [autoPlay]);

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
        {/* <ReactPlayer
          url={`${size.width > 768 ? 'https://www.youtube.com/watch?v=-FR6ZosRGyk' : 'https://www.youtube.com/shorts/45PegK6fcLU'}`}
          loop={true}
          // height={window.innerWidth>=767 ? "40.8rem" : "auto" }
          width="100%"
          playing={autoPlay}
          muted={true}
          className="video-player"
        /> */}
      </div>
      <div className="banner-info">
        <h2 className="banner-title">{props.bannerTitle}</h2>
      </div>
    </div>
  )
}

export default HomeBanner