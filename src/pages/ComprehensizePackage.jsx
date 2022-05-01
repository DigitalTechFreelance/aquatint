import React from 'react';
import CoatingInfogarphy from '../components/packages/Infogarphy';
import Videoplayer from '../components/common/Videoplayer';
import videosrc from '../assets/video/dummy-video.mp4';

function ComprehensizePackage() {
    const [playState, setPlayState] = React.useState({
        playing: false,
        buttonClose: false,
    });
    
    const handleVideoStatus = (videoPlayStatus) => {
        setPlayState({...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose})
    }
  return (
    <>
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">COMPREHENSIVE <span className="cm-line-break">PACKAGE</span></h2>
                        <div className="sp-desc">
                            <p>That pearlescent paint surfaces of the body looks gorgeous! But do not forget other surfaces of the body that complement the lovely colour. The chrome inserts, the plastic trims, lenses and those alloys, the interior leathers too age with time which shows up in the form of fading, yellowing, paling of dye etc. It’s best to have them covered when still new.</p>
                            <p>Get all the surfaces, in and out, protected with ceramic coatings.</p>
                        </div>
                    </div>
                    <div className="sp-cont">
                        <section>
                            <div className="bs-section typ-center">
                                <div className="sec-cont">
                                    <CoatingInfogarphy />
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
                                            <h4 className="title">COMPLETE CERAMIC PROTECTION</h4>
                                        </div>
                                        <div className="media-wrap">
                                            <div className="video">
                                                <Videoplayer buttonClose={playState.buttonClose} playingStatus={handleVideoStatus} srcUrl={videosrc}/>
                                            </div>
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
    </>
  )
}

export default ComprehensizePackage