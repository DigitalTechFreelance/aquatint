import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PaintProtectionFilmInfography from '../components/service/PaintProtectionFilmInfography';
// import Videoplayer from '../components/common/Videoplayer';
// import videosrc from '../assets/video/mini-cooper-red.mp4';
import Flybutton from '../components/common/Flybutton';
import TileGridPPF from '../components/service/TileGridPPF';
import HomeBanner from '../components/home/HomeBanner';

function PaintProtectionFilm() {
    // const [playState, setPlayState] = React.useState({
    //     playing: false,
    //     buttonClose: false,
    // });
    
    // const handleVideoStatus = (videoPlayStatus) => {
    //     setPlayState({...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose})
    // }

  return (
    <>
        <Header/>
        <main>
            <div className="lyt-content">
                <HomeBanner bannerTitle={'Paint Protection Flim'}/>
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
                                    <PaintProtectionFilmInfography/>
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
                                        <TileGridPPF/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        <Flybutton/>
    </>
  )
}

export default PaintProtectionFilm