import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import useSetBgImage from '../../hooks/useSetBgImage';
import Videoplayer from '../common/Videoplayer';

function BannerPpf(props) {

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



    return (
        <div className="bs-banner">
            <div className="video-wrap">
                <Videoplayer
                    buttonClose={false}
                    playingStatus={handleVideoStatus}
                    srcUrl={size.width > 768 ? 'https://www.youtube.com/watch?v=-AE2BTd5Vas' : 'https://www.youtube.com/shorts/RTY5pKUtq8I'}
                    muted={true}
                    autoPlay={true}
                    className="video-player"
                    height="100%"
                    loop={true}
                />
            </div>
            <div className="banner-info">
                <h2 className="banner-title">{props.bannerTitle}</h2>
            </div>
        </div>
    )
}

export default BannerPpf