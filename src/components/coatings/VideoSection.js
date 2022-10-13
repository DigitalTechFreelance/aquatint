import React from 'react';
import VideoPlayer from '../common/Videoplayer';

function VideoSection({ data }) {
    const [playState, setPlayState] = React.useState({
        playing: false,
        buttonClose: false,
    });

    const handleVideoStatus = (videoPlayStatus) => {
        setPlayState({ ...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose })
    }
    const videoUrl = data?.videoUpload !== null ? data?.videoUpload?.url : JSON.parse(data?.youtubeLink)?.url
    return (
        <section>
            <div className="bs-section">
                <div className="sec-cont">
                    <div className="mod-video typ-lg typ-primary">
                        <div className="media-wrap">
                            <div className="video">
                                <VideoPlayer buttonClose={playState.buttonClose} playingStatus={handleVideoStatus} srcUrl={videoUrl} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection;