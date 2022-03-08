import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ServiceList from '../components/service/ServiceList';

function Services() {
  return (
    <>
        <Header/>
            <main>
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">services</h2>
                    </div>
                    <div className="sp-cont">
                        <ServiceList/>
                    </div>
                </div>
            </main>
        <Footer/>
    </>
  )
}

export default Services