import React from 'react';
import infoImg from '../../assets/images/what-we-do.webp';

function Infogarphy() {
  return (
    <div className="bs-infography typ-about">
      <div className="info-wrap">
        <h3 className="title">WHAT WE DO</h3>
        <div className="desc">
          <p>Aquatint Auto Detailing Studio offers a premium detailing service for all types of cars and 2-wheelers. Detailing involves immaculate cleaning, corrections and polishing the car and restoring to off-the-lot appearance. At Aquatuint, we use the latest stateof art technology and products to get the best quality of service to our customers. While doing so, we are also contributing our bit to Mother Nature by restricting the use of water to a minimum and using eco-friendly products.</p>
        </div>
      </div>
      <div className="img-wrap">
        <img src={infoImg} alt="What we do" title="What we do" width="100%" height="auto"/>
      </div>
    </div>
  )
}

export default Infogarphy;