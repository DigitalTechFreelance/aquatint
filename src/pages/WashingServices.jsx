import React from 'react';
import WashingService from '../components/service/WashingService';
import WashingServiceCompareList from '../components/service/WashingServiceCompareList';

function WashingServices() {
  return (
    <>
        <main>
            <div className="lyt-content">
              <div className="cm-container">
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
              </div>
            </div>
        </main>
    </>
  )
}

export default WashingServices