import React from 'react';
import Videoplayer from './VideoPlayer';

function VideoSection({ handleVideoStatus, data }) {
    return (
        <section>
            <div className="bs-section">
                <div className="sec-cont">
                    <div className="mod-video typ-lg">
                        <div className="title-wrap fixed-width">
                            <h4 className="title typ-white">{data.title}</h4>
                        </div>
                        <div className="media-wrap">
                            <div className="video">
                                <Videoplayer
                                    buttonClose={false}
                                    playingStatus={handleVideoStatus}
                                    srcUrl={JSON.parse(data?.youtubeLink)?.url}
                                />
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