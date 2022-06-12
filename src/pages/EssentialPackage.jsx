import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import EssentialInfogarphy from '../components/service/EssentialInfogarphy';
import videosrc from '../assets/video/dummy-video.mp4';
import VideoPlayer from '../components/common/Videoplayer';

function EssentialPackage() {
    const [playState, setPlayState] = React.useState({
        playing: false,
        buttonClose: false,
    });

    const handleVideoStatus = (videoPlayStatus) => {
        setPlayState({ ...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose })
    }
    return (
        <>
            <Header />
            <main>
                <div className="lyt-content">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">ESSENTIAL PACKAGE</h2>
                            <div className="sp-desc">
                                <p>The Essential package combines ceramic coating with the scratch proof Paint Protection Film (PPF). The most scratch prone areas like the bumpers, bonnet, mirrors, door edges and door handle cups are covered with PPF. The complete body is coated with the Gloss Coat.</p>
                            </div>
                        </div>
                        <div className="sp-cont">
                            <section>
                                <div className="bs-section typ-center">
                                    <div className="sec-cont">
                                        <EssentialInfogarphy />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section">
                                    <div className="sec-cont">
                                        <div className="bs-band typ-warranty">
                                            <div className="mod-warranty">
                                                <span className="count">3</span>
                                                <span className="text">years warranty</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section">
                                    <div className="sec-cont">
                                        <div className="mod-video typ-lg">
                                            <div className="title-wrap">
                                                <h4 className="title typ-white">DUAL PROTECTION</h4>
                                            </div>
                                            <div className="media-wrap">
                                                <div className="video">
                                                    <VideoPlayer
                                                        buttonClose={false}
                                                        playingStatus={handleVideoStatus}
                                                        srcUrl={videosrc}
                                                    />
                                                </div>
                                                <button className='btn'><span className="icon icon-play"></span></button>
                                            </div>
                                            <div className="action-wrap">
                                                <p>For more information, kindly download our Service Catalogue</p>
                                                <button type="button" className="btn btn-default">
                                                    <span className="icon icon-download"></span>
                                                    <span>catalogue</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default EssentialPackage