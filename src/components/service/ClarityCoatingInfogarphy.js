import React from 'react';
import infoImg from '../../assets/images/coating-car.webp';


function ClarityCoatingInfogarphy() {
  return (
    <div className='bs-infography typ-clarity-futureof'>
      <div className="info-wrap">
        <h3 className="title">the future of colour change &amp; customisation</h3>
        <div className="desc">
          <p>We all lnow the Pro's and Con's of traditional 'Vinyl Wrap'. Clarity Coat takes all of that away and enables paint like finish that you'd never believe was removable.</p>
        </div>
      </div>
      <div className="img-wrap">
        <img src={infoImg} alt="Coating Car" title="Coating Car" />
      </div>
    </div>
  )
}

export default ClarityCoatingInfogarphy;