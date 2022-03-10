import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PaintProtectionFilmInfography from '../components/service/PaintProtectionFilmInfography';

function PaintProtectionFilm() {
  return (
    <>
        <Header/>
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">paint protection film</h2>
                    </div>
                    <div className="sp-cont">
                        <section>
                            <div className="bs-section typ-center">
                                <div className="sec-head">
                                    <div className="sec-desc">
                                        <p>ULTRASHIELD Paint Protection Film (PPF) is a Top coated thermoplastic urethane sheet with amazing scratch resistance, stain resistance, self healing properties, hydrophobicity, high gloss and Optical clarity as its key features. The PPF is meticulously tested and proven to deliver the best protection even under the most difficult conditions.</p>
                                        <p>Now stop worrying about the scooter rider who is on a mission to scrape off the paint from your car. Drive eith peace.</p>
                                    </div>
                                </div>
                                <div className="sec-cont">
                                    <PaintProtectionFilmInfography/>
                                </div>
                            </div>
                        </section>
                        <div className="cm-container">
                            <section>
                                <div className="bs-section typ-center">
                                    <div className="sec-head">
                                        <h2 className="sec-title">BENEFITS OF PPF</h2>
                                    </div>
                                    <div className="sec-cont">
                                        <div className="mod-benefits">
                                            <ul className="list-wrap">
                                                <li className="item">
                                                    <p className="text">INVISIBLE PROTECTION</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">ANTI-FOULING</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">SOLVENT RESISTANCE</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">200 MICRON THICK 10-MICRON TOP COATED CERAMIC LAYER</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">NON-YELLOWING</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">COMPLETELY REMOVABLE PSA</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">SELF-HEALING TECHNOLOGY</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">HIGH GLOSS</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">PRESSURE SENSITIVE ADHESIVE (PSA) (EASY INSTALLATION)</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">EXCELLENT DURABILITY</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">WATER REPELLENT</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">CUSTOM CUT</p>
                                                </li>
                                                <li className="item">
                                                    <p className="text">UV RESISTANCE</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section">
                                    <div className="sec-cont">
                                        <div className="mod-video typ-lg">
                                            <div className="media-wrap">
                                                <div className="video"></div>
                                                <button className='btn'><span className="icon icn-play"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default PaintProtectionFilm