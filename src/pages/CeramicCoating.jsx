import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CeramicCoatingInfogarphy from '../components/service/CeramicCoatingInfogarphy';
// import videosrc from '../assets/video/dummy-video.mp4';
import Flybutton from '../components/common/Flybutton';
import { Helmet } from "react-helmet";
import Videoplayer from '../components/common/Videoplayer';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';

function CeramicCoating() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLeadFormOpen(true);
        }, 15000)
    }, [])

    const [leadFormOpen, setLeadFormOpen] = useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);

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
                <title>Premium car ceramic coating studio - Best in class paint protection coatings</title>
                <meta name="keywords" content="Car detailing, Car polishing, Car coating, Teflon coating, Ceramic coating, Ceramic coating near me, Ceramic coating in Pune, Ceramic coating in Nashik, Ceramic coating price, Ceramic glass coating, Ceramic glass coating for cars, 9H ceramic coating, Ceramic coating for cars, Car ceramic coating near me, Nano coating for cars, Opti coat, Opti coat ceramic coating, Ceramic pro, 9H ceramic pro, 10H ceramic coating, 10H ceramic pro, Nano ceramic, Nano ceramic coating, Nano ceramic coating for cars, 3M ceramic coating, Brotomotive, Brotomotive ceramic coating, Graphene coating, Graphene ceramic coating, 3M ceramic coating price, Benefit of ceramic coating, Ceramic coating cost, Ceramic paint coating, Sio2 ceramic coating, SIC ceramic coating, Ceramic pro, Bike ceramic coating"></meta>
                <meta name="description" content="9H is a Permanent Ceramic Paint Coating that features a High Gloss finish, unmatched Super Hydrophobic Effect, Scratch Resistance, Chemical Resistance, UV Resistance, Thermal Resistance and Anti-Graffiti." />
            </Helmet>
            <main>
                <div className="lyt-content">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">CERAMIC COATING</h2>
                            <div className="sp-desc">
                                <p>Gloss-Coat is the latest generation, semi-permanent coating that will provide the user with an amazing level of gloss and slickness from the paint work and durability of 3-4 years. It is topped up with a polymer-based sealant which helps with the quick curing of the Gloss Coat.</p>
                                <p>The ceramic coating is resistant to detergents and harsh chemicals and produces a surface that is less prone to swirl marks and scratches.</p>
                            </div>
                        </div>
                        <div className="sp-cont">
                            <section>
                                <div className="bs-section">
                                    <div className="sec-cont">
                                        <div className="mod-video typ-lg typ-primary">
                                            <div className="media-wrap">
                                                <div className="video">
                                                    <Videoplayer
                                                        buttonClose={false}
                                                        playingStatus={handleVideoStatus}
                                                        srcUrl={'https://www.youtube.com/watch?v=6J5SZzJd5bk'}
                                                    />
                                                </div>
                                                {/* <button className='btn'><span className="icon icon-play"></span></button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section cm-no-pad-top">
                                    <div className="sec-cont">
                                        <CeramicCoatingInfogarphy />
                                    </div>
                                </div>
                            </section>
                            <div className="cm-container">
                                <section>
                                    <div className="bs-section typ-center">
                                        <div className="sec-head">
                                            <h2 className="sec-title">CERAMIC COATING SERVICES &amp; PACKAGES</h2>
                                        </div>
                                        <div className="sec-cont">
                                            <ul className="lyt-info">
                                                <li className="info-item">
                                                    <a href="#" className="mod-info">
                                                        <div className="info-wrap">
                                                            <h3 className="title">NANO CERAMIC COATING</h3>
                                                        </div>
                                                        <div className="mod-warranty">
                                                            <span className="count">1</span>
                                                            <span className="text">year warranty</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="info-item">
                                                    <a href="#" className="mod-info">
                                                        <div className="info-wrap">
                                                            <h3 className="title">GLOSS COAT</h3>
                                                        </div>
                                                        <div className="mod-warranty">
                                                            <span className="count">2</span>
                                                            <span className="text">year warranty</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="bs-section typ-center">
                                        <div className="sec-head">
                                            <h2 className="sec-title">PREMIUM PACKAGES</h2>
                                        </div>
                                        <div className="sec-cont">
                                            <ul className="lyt-info">
                                                <li className="info-item">
                                                    <a href="/comprehensive-package" className="mod-info typ-bg">
                                                        <div className="info-wrap">
                                                            <h3 className="title">COMPREHENSIVE PACKAGE</h3>
                                                            <p className="sub-title">Interior + exterior protection</p>
                                                        </div>
                                                        <div className="mod-warranty">
                                                            <span className="count">3</span>
                                                            <span className="text">year warranty</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="info-item">
                                                    <a href="/signature-package" className="mod-info typ-bg">
                                                        <div className="info-wrap">
                                                            <h3 className="title">SIGNATURE PACKAGE</h3>
                                                            <p className="sub-title">Interior + exterior protection</p>
                                                        </div>
                                                        <div className="mod-warranty">
                                                            <span className="count">5</span>
                                                            <span className="text">year warranty</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="info-item">
                                                    <a href="/essential-package" className="mod-info typ-bg">
                                                        <div className="info-wrap">
                                                            <h3 className="title">ESSENTIAL PACKAGE</h3>
                                                            <p className="sub-title">Ceramic + ppf dual protection</p>
                                                        </div>
                                                        <div className="mod-warranty">
                                                            <span className="count">3</span>
                                                            <span className="text">year warranty</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="bs-section typ-center">
                                        <div className="sec-head">
                                            <h2 className="sec-title">PREPARATION PROCESS</h2>
                                        </div>
                                        <div className="sec-cont">
                                            <ul className="mod-list typ-number">
                                                <li className="list-item">
                                                    <p>DECONTAMINATION</p>
                                                    <ul className="mod-list typ-disc">
                                                        <li className="item"><p>Alkaline pre wash(3pH) : Acts as a detergent that removes dirt/sand/greas</p></li>
                                                        <li className="item"><p>3pH Acidic foam wash: Removes limescale particles that are deposited on the bodywork</p></li>
                                                        <li className="item"><p>Iron Decontamination: Removes city pollution from body & alloys</p></li>
                                                        <li className="item"><p>Neutralized Foam wash</p></li>
                                                        <li className="item"><p>Engine bay detailing, Tar marks, Hard water marks & Mineral deposits removal from body & Alloys</p></li>
                                                    </ul>
                                                </li>
                                                <li className="list-item">
                                                    <p>Surface Preparation</p>
                                                    <ul className="mod-list typ-disc">
                                                        <li className="item"><p>Inspect the paint for defects</p></li>
                                                        <li className="item"><p>Multistage compounding for scratch removal</p></li>
                                                        <li className="item"><p>Swirl mark removal with D.A Polisher</p></li>
                                                        <li className="item"><p>Revive Headlamps / Tail Lamps</p></li>
                                                        <li className="item"><p>Cleansing exterior plastic trims to obtain factory finish</p></li>
                                                    </ul>
                                                </li>
                                                <li className="list-item">
                                                    <p>CERAMIC COATING APPLICATION</p>
                                                    <ul className="mod-list typ-disc">
                                                        <li className="item"><p>Isopropyl alcohol solution for removing polish residue, waxes and silicone to prepare the paint work prior to coating</p></li>
                                                        <li className="item"><p>Application of ceramic coating Gloss Coat</p></li>
                                                        <li className="item"><p>Application of ceramic sealant as a curing time booster</p></li>
                                                    </ul>
                                                </li>
                                                <li className="list-item">
                                                    <p>Interior Cleaning</p>
                                                    <ul className="mod-list typ-disc">
                                                        <li className="item"><p>Deep vacuum & wipe down full interior to remove dust</p></li>
                                                        <li className="item"><p>Apply premium protectant on dashboard, seats & plastics</p></li>
                                                        <li className="item"><p>Clean rubber mattings</p></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <Flybutton />
            <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />
        </>
    )
}

export default CeramicCoating