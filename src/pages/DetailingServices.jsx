import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import DetailingServiceTabs from '../components/service/DetailingServiceTabs';
import DetailingServiceCompareList from '../components/service/DetailingServiceCompareList';

function DetailingServices() {
  return (
    <>
      <Header/>
        <main>
            <div className="lyt-content">
                <div className="cm-container">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">Detailing Services</h2>
                        </div>
                        <div className="sp-cont">
                            <DetailingServiceTabs/>
                        </div>
                    </div>
                    <section>
                    <div className="bs-section typ-center">
                        <div className="sec-head">
                            <h2 className="sec-title">Compare Services</h2>
                        </div>
                        <div className="sec-cont">
                            <DetailingServiceCompareList/>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </main>
      <Footer/>
    </>
  )
}

export default DetailingServices