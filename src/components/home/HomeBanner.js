import React, { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import useSetBgImage from '../../hooks/useSetBgImage';
// import ReactPlayer from 'react-player';
import Videoplayer from '../common/Videoplayer';
import gif1 from '../../assets/images/offering-ceramic-coating1.gif';

function HomeBanner(props) {

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
  const isMobileDevice = window.innerWidth <= 820 ? true : false;



  return (
    <div className="bs-banner">
      {!isMobileDevice ?
      <div className="video-wrap">
        <Videoplayer
          buttonClose={false}
          playingStatus={handleVideoStatus}
          srcUrl={size.width > 768 ? 'https://www.youtube.com/watch?v=-FR6ZosRGyk' : 'https://www.youtube.com/shorts/45PegK6fcLU'}
          muted={true}
          autoPlay={true}
          className="video-player"
          height="100%"
          loop={true}
        />
      </div> 
      : 
      <div className="img-wrap">
        <img src={gif1} alt="home banner" title="home banner" className="" />
      </div>
      }
      <div className="banner-info">
        <h2 className="banner-title">{props.bannerTitle}</h2>
      </div>
    </div>
  )
}

export default HomeBanner