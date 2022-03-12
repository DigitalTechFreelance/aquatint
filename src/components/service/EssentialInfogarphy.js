import React from 'react';
import infoImg from '../../assets/images/essential-package.webp';


function EssentialInfogarphy() {
  return (
    <div className="bs-infography typ-reverse">
      <div className="info-wrap">
        <h3 className="title">
          <span className="text-lg">ceramic</span>
          <span className="text-lg">coating</span>
          <span className="text-lg">ppf</span>
          <span className="text-sm">(paint protection film)</span>
        </h3>
      </div>
      <div className="img-wrap">
        <img src={infoImg} alt="Coating Car" title="Coating Car" />
      </div>
    </div>
  )
}

export default EssentialInfogarphy;