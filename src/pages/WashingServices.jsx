import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import WashingService from '../components/service/WashingService';
import WashingServiceCompareList from '../components/service/WashingServiceCompareList';

function WashingServices() {
  return (
    <>
      <Header/>
        <main>
            <div className="lyt-single-page">
                <div className="sp-head">
                    <h2 className="sp-title">Washing Services</h2>
                </div>
                <div className="sp-cont">
                    <WashingService/>
                </div>
            </div>
            <section>
              <div className="bs-section typ-center">
                <div className="sec-head">
                    <h2 className="sec-title">Compare Services</h2>
                </div>
                <div className="sec-cont">
                    <WashingServiceCompareList/>
                </div>
              </div>
            </section>
        </main>
      <Footer/>
    </>
  )
}

export default WashingServices