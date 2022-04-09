import React from 'react';
import franchiseImg from '../../assets/images/franchise.webp';

function Infogarphy() {
  return (
    <div className='bs-infography'>
        <div className="info-wrap">
          <h3 className="title">Franchise With Us</h3>
          <div className="desc">
            <p>Aquatint is a premium detailing studio for cars and bikes. We use state of art technology &amp; choicest products for the finest detailing experience. We deploy International standards for detailing which allows us to deliver a top notch experience to our clients</p>
            <p>With us, you can expect up to 60% return on investment in the first year itself.</p>
          </div>
          <a href="/franchise-with-us" className="btn btn-default"><span>Learn More</span></a>
      </div>
      <div className="img-wrap">
        <img src={franchiseImg} alt=" image will come here" />
      </div>
    </div>
  )
}

export default Infogarphy;