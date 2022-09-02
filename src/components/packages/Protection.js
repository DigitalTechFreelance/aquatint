import React from 'react';
import Videoplayer from '../common/Videoplayer';

function Protection({data}) {
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
                <div className="mod-video typ-lg">
                    <div className="title-wrap">
                        <h4 className="title">{data.protectionName}</h4>
                    </div>
                    <div className="media-wrap">
                        <div className="video">
                            <Videoplayer buttonClose={playState.buttonClose} playingStatus={handleVideoStatus} srcUrl={`http://13.233.247.201:1337/${data.videoUpload.data.attributes.url}`}/>
                        </div>
                    </div>
                    <div className="action-wrap">
                        <p>{data.catalogueInfo}</p>
                        <button type="button" className="btn btn-default">
                            <span className="icon icon-download"></span>
                            <span>catalogue</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Protection;