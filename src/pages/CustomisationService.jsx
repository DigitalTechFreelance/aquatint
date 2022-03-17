import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import dentingImg from '../assets/images/denting.webp';
import sunFilmImg from '../assets/images/sun-film.webp';

function CustomisationService() {
  return (
    <>
        <Header/>
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">CUSTOMISATION SERVICES</h2>
                    </div>
                    <div className="sp-cont">
                        <section>
                            <div className="bs-section cm-no-pad-top">
                                <div className="sec-cont">
                                    <div className="cm-container">
                                        <div className="bs-infography typ-grid-left">
                                            <div className="info-wrap">
                                                <ul className="mod-list typ-italic">
                                                    <li className="list-item">
                                                        <p>DENTING & PAINTING</p>
                                                        <ul className="mod-list typ-bold typ-grid">
                                                            <li className="item">
                                                                <p className="title">No Paint Defects</p>
                                                                <ul className="mod-list typ-disc">
                                                                    <li className="item"><p>Fully equipped paint booth</p></li>
                                                                    <li className="item"><p>No dust particles</p></li>
                                                                    <li className="item"><p>No Pinholes</p></li>
                                                                    <li className="item"><p>No smudges</p></li>
                                                                </ul>
                                                            </li>
                                                            <li className="item">
                                                                <p className="title">Water based/Solvent based Paints</p>
                                                                <ul className="mod-list typ-disc">
                                                                    <li className="item"><p>Environment friendly</p></li>
                                                                    <li className="item"><p>Used by all premium OEM’s</p></li>
                                                                    <li className="item"><p>Hence, perfect colour match</p></li>
                                                                </ul>
                                                            </li>
                                                            <li className="item">
                                                                <p className="title">Computerized color matching</p>
                                                                <ul className="mod-list typ-disc">
                                                                    <li className="item"><p>No tinting or fade out</p></li>
                                                                    <li className="item"><p>We Spray OEM color codes</p></li>
                                                                </ul>
                                                            </li>
                                                            <li className="item">
                                                                <p className="title">SATA Jet X 5500 HVLP</p>
                                                                <ul className="mod-list typ-disc">
                                                                    <li className="item"><p>German spray guns for a fine uniform spray & an impeccable finish</p></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="img-wrap">
                                                <img src={dentingImg} alt=" image will come here" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="bs-section">
                                <div className="sec-cont">
                                    <div className="cm-container">
                                        <div className='bs-infography typ-grid-left typ-vertical-center'>
                                            <div className="info-wrap">
                                                <ul className="mod-list typ-italic">
                                                    <li className="list-item">
                                                        <p>Sun Films</p>
                                                        <ul className="mod-list typ-bold">
                                                            <li className="item">
                                                                <p className="title">ULTRASHIELDX WINDOW FILM</p>
                                                                <p>The Ultrashield Nano Ceramic Tint has tiny ceramic materials which are designed with spectral technology. It creates a shield over the glass and prevents large amount of rays and heat from entering the cabin. With ultrashield glass tint, immense heat rejection is achieved while enhancing the clarity of vision.</p>
                                                            </li>
                                                            <li className="item">
                                                                <p className="title">CHAMELEON AUTOMOTIVE WINDOW FILM</p>
                                                                <p>Designed for usage on the inside glass surface of cars. These products can reach Dynamic Effects - colour shifts when it is viewed from different angles.</p>
                                                                <ul className="mod-list typ-disc">
                                                                    <li className="item"><p>Changing colours following different angles</p></li>
                                                                    <li className="item"><p>Metal-free design with no electronic interference</p></li>
                                                                    <li className="item"><p>Good heat rejection capability</p></li>
                                                                    <li className="item"><p>Up to 99+% UV protection</p></li>
                                                                    <li className="item"><p>Excellent shrink, easy installation</p></li>
                                                                </ul>
                                                            </li>
                                                            <li className="item">
                                                                <p className="title">NANO-CERAMIC TINT</p>
                                                                <p>Designed for usage on the inside glass surface of cars. These products can reach Dynamic Effects - colour shifts when it is viewed from different angles.</p>
                                                                <ul className="mod-list typ-disc">
                                                                    <li className="item"><p>Superb durability - resistance to salt content in environment</p></li>
                                                                    <li className="item"><p>UV rejection. 100 percent dye-free & 100% metal-free</p></li>
                                                                    <li className="item"><p>Natural tone with low reflectivity</p></li>
                                                                    <li className="item"><p>High total solar energy rejection</p></li>
                                                                    <li className="item"><p>Scratch resistant hard coat</p></li>
                                                                </ul>
                                                            </li>
                                                            <li className="item">
                                                                <p className="title">WINDSCREEN PROTECTION FILM</p>
                                                                <p>Windshield protection film is a highly effective specially manufactured based on ULTRASHIELDX’s outstanding Optical Design Technology and advanced coating technology. Unlike conventional window films, Windshield Protection is applied to the outside of the vehicles windshield to provide safe driving against the impact of various external road hazards such as stone chips, doubling up windshield’s strength. In addition, it prevents the scattering of glass fragments when the windshield is damaged due to strong impact, thus minimizing the secondary damage to the passengers. </p>
                                                                <p>ULTRASHIELDX’s Windshield  Protection Film aims to lead industry’s standards with advanced hydrophobic, anti-fouling and scratch-resistance performance.</p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="img-wrap">
                                                <img src={sunFilmImg} alt=" image will come here" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default CustomisationService