import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PaintProtectionFilmInfography from '../components/service/PaintProtectionFilmInfography';
import Videoplayer from '../components/common/Videoplayer';
import videosrc from '../assets/video/mini-cooper-red.mp4';
import Flybutton from '../components/common/Flybutton';
import TileGridPPF from '../components/service/TileGridPPF';
import HomeBanner from '../components/home/HomeBanner';
import PpfCompareList from '../components/service/PpfCompareList';
import PpfWorkSlider from '../components/service/PpfWorkSlider';
import { Helmet } from "react-helmet";

function PaintProtectionFilm() {
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>PPF-Paint protection film - Ultimate scratchproof protection for your car</title>
                <meta name="keywords" content="paint protection film, clear bra, ppf car, car paint protection, paint protection, ppf film, xpel paint protection film, paint protection film near me, ppf coating, ppf wrap, paint protection film cost, car paint protection film, 3m paint protection film, clear bra car, car protection film, protection film, ppf near me, ppf coating price, clear bra near me, paint protection film installers near me, clear paint protection film, ppf coating near me, clear wrap car, ppf car protection, ppf cost, ppf car wrap, best paint protection film, car paint protection near me, paint protection film price, clear protective film, xpel paint protection film cost, paint film, clear bra paint protection, clear protective film for cars, ppf protection, car ppf cost, car ppf near me, clear bra installers near me, 3m coating for car, ppf on car, best ppf film, ppf wrap cost, 3m ceramic coating cost, paint protection near me, ppf car coating, ppf paint protection, ppf car cost, ppf coating cost, clear bra cost, ppf wrap near me, auto paint protection, ppf film cost, ppf film near me, 3m film for car, ppf paint protection film, vehicle paint protection, clear bra car cost, auto paint protection film, clear bra wrap, ppf ceramic coating, ppf installer, clear bra car cost near me, ppf car near me, paint protection coating, clear film for cars, xpel protective film, ppf film for cars, best paint protection, protective car wrap, ppf car protection cost, ppf paint, cost of ppf on car, ppf and ceramic coating, ppf coating for cars price, ppf protection film, paint protection film installers, ppf car wrap near me, paint protection film cost near me, scratch protection film, ppf price for car, ppf coating for car, tpu ppf, ppf and ceramic coating near me, best car paint protection film, clear coat paint protection, 3m ppf price, ppf in cars, ppf paint protection film cost, ppf car price, automotive paint protection film, clear paint protection, car film protection near me, paint protection film ppf, full ppf, clear bra car near me, automotive protective film, bumper protection film, paint protection cost, invisible car bra, paint protection wrap, paint protection wrap, ppf clear bra, clear bra for cars near me, car paint protection film price, ppf car protection price, clear bra paint protection near me, clear vehicle wrap, clear car wrap near me, clear bra installer, clear shield for cars, vehicle protection film, ppf cost for car, ppf tpu"></meta>
                <meta name="description" content="International PPF film products at aquatint gives you ultimate scratchproof protection with high gloss finish on the car. Self healing properties gives brand new finish of your car forever. Ask for Ultrashield X, Garware PPF, llumar, Xpel, Stek brand PPF at affordable prices. " />
            </Helmet>
            <main>
                <div className="lyt-content">
                    <HomeBanner bannerTitle={'Paint Protection Flim'} />
                    <section>
                        <div className="bs-section cm-no-pad-top cm-no-pad-bottom">
                            <div className="sec-cont">
                                <div className="bs-band typ-gradiant">
                                    <div className="text-wrap">
                                        <p>ULTRASHIELD Paint Protection Film (PPF) is a Top coated thermoplastic urethane sheet with amazing scratch resistance, stain resistance, self healing properties, hydrophobicity, high gloss and Optical clarity as its key features. The PPF is meticulously tested and proven to deliver the best protection even under the most difficult conditions.</p>
                                        <p>Now stop worrying about the scooter rider who is on a mission to scrape off the paint from your car. Drive eith peace.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="lyt-single-page typ-2">
                        <div className="sp-cont">
                            <section>
                                <div className="bs-section typ-center">
                                    <div className="sec-cont cm-container">
                                        <PaintProtectionFilmInfography />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section typ-center">
                                    <div className="cm-container">
                                        <div className="sec-head">
                                            <h2 className="sec-title">BENEFITS OF PPF</h2>
                                        </div>
                                        <div className="sec-cont">
                                            <TileGridPPF />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <section>
                        <div className="bs-section">
                            <div className="sec-cont">
                                <div className="mod-video typ-lg">
                                    <div className="title-wrap fixed-width">
                                        <h4 className="title typ-white">everything you need to know about paint protection film</h4>
                                    </div>
                                    <div className="media-wrap">
                                        <div className="video">
                                            <Videoplayer buttonClose={playState.buttonClose} playingStatus={handleVideoStatus} srcUrl={videosrc} />
                                        </div>
                                        <button className='btn'><span className="icon icon-play"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="bs-section typ-center">
                            <div className="sec-head">
                                <h2 className="sec-title">Where Should I Apply Paint Protection Flim</h2>
                            </div>
                            <div className="sec-cont">
                                <PpfCompareList />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="bs-section">
                            <div className="cm-container">
                                <div className="sec-head">
                                    <h2 className="sec-title">Our Recent Work</h2>
                                </div>
                            </div>
                            <div className="sec-cont">
                                <PpfWorkSlider />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
            <Flybutton />
        </>
    )
}

export default PaintProtectionFilm