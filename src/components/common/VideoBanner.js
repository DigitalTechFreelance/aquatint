import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import useSetBgImage from '../../hooks/useSetBgImage';
import Videoplayer from '../common/Videoplayer';

function HomeBanner({data}) {

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

  const {title, desktopVideoUpload, mobileVideoUpload, desktopYoutubeLink, mobileYoutubeLink} = data && data
  const desktopVideoUrl = desktopVideoUpload !== null? desktopVideoUpload?.data?.url : JSON.parse(desktopYoutubeLink).url
  const mobileVideoUrl = mobileVideoUpload !== null? mobileVideoUpload?.data?.url : JSON.parse(mobileYoutubeLink).url
  
  return (
    <div className="bs-banner">
      <div className="video-wrap">
        <Videoplayer
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
      <div className="banner-info">
        <h2 className="banner-title">{title}</h2>
      </div>
    </div>
  )
}

export default HomeBanner