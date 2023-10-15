import React from 'react';
import VideoPlayer from '../common/VideoPlayer';

function Protection({ data }) {
    const [playState, setPlayState] = React.useState({
        playing: false,
        buttonClose: false,
    });

    const handleVideoStatus = (videoPlayStatus) => {
        setPlayState({ ...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose })
    }
    const videoUrl = data?.videoUpload !== null ? data?.videoUpload?.url : JSON.parse(data?.youtubeLink)?.url
    function gtag_report_conversion(url) {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    }
    
    const onClickEvent = (url)=>{
        const isBrowser = typeof window !== "undefined"
        if (isBrowser) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-929250397/VGh-CJma6OsYEN34jLsD',
                'event_callback': gtag_report_conversion(url)
            });
      }
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
                                <VideoPlayer buttonClose={playState.buttonClose} playingStatus={handleVideoStatus} srcUrl={videoUrl} />
                            </div>
                        </div>
                        <div className="action-wrap">
                            <p>{data.catalogueInfo}</p>
                            <a href={data.catalogue.url} className="btn btn-default" onClick={()=> onClickEvent(data.catalogue.url)}>
                                <span className="icon icon-download"></span>
                                <span>catalogue</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Protection;