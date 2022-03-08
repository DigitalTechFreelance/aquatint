import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Banner from '../components/aboutUs/Banner';
import Infogarphy from '../components/aboutUs/Infogarphy';
import Team from '../components/aboutUs/Team';
import OurVision from '../components/aboutUs/OurVision';

function AboutUs() {
  return (
    <>
        <Header/>
            <main>
                <div className="lyt-content">
                    <Banner/>
                    <section>
                      <div className="bs-section">
                        <div className="sec-cont">
                          <Infogarphy/>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="bs-section typ-center">
                        <div className="sec-head">
                          <h2 className="sec-title">our team</h2>
                        </div>
                        <div className="sec-cont">
                          <Team/>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="bs-section">
                        <div className="sec-cont">
                          <OurVision/>
                        </div>
                      </div>
                    </section>
                </div>
            </main>
        <Footer/>
    </>
  )
}

export default AboutUs