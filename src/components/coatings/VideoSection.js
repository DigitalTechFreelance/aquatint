import React from 'react';
import Videoplayer from '../common/Videoplayer';

function VideoSection({data}) {
    const [playState, setPlayState] = React.useState({
        playing: false,
        buttonClose: false,
    });
    
    const handleVideoStatus = (videoPlayStatus) => {
        setPlayState({...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose})
    }

  return (
    <section>
        <div className="bs-section">
            <div className="sec-cont">
                <div className="mod-video typ-lg typ-orange">
                    <div className="media-wrap">
                        <div className="video">
                            <Videoplayer buttonClose={playState.buttonClose} playingStatus={handleVideoStatus} srcUrl={`http://localhost:1337${data.url}`}/>
                        </div>
                        <button className='btn'><span className="icon icon-play"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoSection;