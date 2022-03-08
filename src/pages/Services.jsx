import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ServiceInfo from '../components/service/ServiceInfo';

function Services() {
  return (
    <>
    <Header/>
    <main>
      <div className="lyt-service">
        <ul className="service-list-wrap">
          <li className="item typ-odd">
            <ServiceInfo/>
          </li>
          <li className="item typ-even">
            <ServiceInfo/>
          </li>
        </ul>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Services