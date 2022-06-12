import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import DetailingServiceTabs from '../components/service/DetailingServiceTabs';
import { Helmet } from "react-helmet";

function DetailingServices() {
  React.useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top notch car interior cleaning service - Premium treatment for clean interior</title>
        <meta name="keywords" content="Car interior cleaning, Car cleaning, Car cleaning near me, Car interior detailing, Car interior detailing near me, Interior detailing, Interior car wash, Car deep cleaning, Car interior steam clean, Car sanitization, Car interior saitization, Car steam sanitization, Car germ cleaning, Car seat cleaning, Car cleaning in Pune, Car cleaning in Nashik, Car cleaning in Baramati"></meta>
        <meta name="description" content="Get spotless and hygienic car interiors with aquatints interior detailing service | Deep cleans all inside surfaces of the car | Steam cleaning to eleminate 99% germs & bacteria | Fresh & new look interiors" />
      </Helmet>
      <main>
        <div className="lyt-content">
          <div className="cm-container">
            <div className="lyt-single-page">
              <div className="sp-head">
                <h2 className="sp-title">Detailing Services</h2>
              </div>
              <div className="sp-cont">
                <DetailingServiceTabs />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default DetailingServices