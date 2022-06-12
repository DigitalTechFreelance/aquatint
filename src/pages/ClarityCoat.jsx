import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ClarityCoatingInfogarphy from '../components/service/ClarityCoatingInfogarphy';
import videosrc from '../assets/video/dummy-video.mp4';
import VideoPlayer from '../components/common/Videoplayer';

function ClarityCoat() {
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
                    <div className="lyt-single-page typ-2">
                        <div className="sp-head">
                            <h2 className="sp-title">clarity coat</h2>
                            <div className="sp-desc">
                                <p>
                                    It's a Sprayable paint protection system that not only looks and feels like regular automotive paint but one that provides unrivalled protection from everyday road debris we're used to. With the highedt grade materials and years of testing, we have developed this best in class product that is successfully being used Globally.
                                </p>
                            </div>
                        </div>
                        <div className="sp-cont">
                            <section>
                                <div className="bs-section typ-center">
                                    <div className="sec-cont cm-container">
                                        <ClarityCoatingInfogarphy />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section typ-gradiant-orange">
                                    <div className="cm-container">
                                        <div className="sec-head">
                                            <h2 className="sec-title">BENEFITS OF CLARITY COAT</h2>
                                        </div>
                                        <div className="sec-cont">
                                            <div className="mod-benefits typ-clarity-benefits">
                                                <ul className="list-wrap">
                                                    <li className="item">
                                                        <p className="text">protection upto 350 microns</p>
                                                    </li>
                                                    <li className="item">
                                                        <p className="text">has no hidden knife cuts</p>
                                                    </li>
                                                    <li className="item">
                                                        <p className="text">no glue residue after removal</p>
                                                    </li>
                                                    <li className="item">
                                                        <p className="text">show zero edges or lines</p>
                                                    </li>


                                                </ul>
                                                <ul className="list-wrap">
                                                    <li className="item">
                                                        <p className="text">can be sanded and polished to a fine finish</p>
                                                    </li>
                                                    <li className="item">
                                                        <p className="text">customizable in any colour available</p>
                                                    </li>
                                                    <li className="item">
                                                        <p className="text">won't yellow after certain period of time</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section">
                                    <div className="sec-cont">
                                        <div className="mod-video typ-lg typ-orange">
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

export default ClarityCoat