



import React from 'react';
import premiumPackageImg from '../../assets/images/premium-package.webp';

function Packages() {

  return (
    <section>
        <div className="bs-section">
            <div className="sec-cont">
                <div className="bs-infography typ-reverse typ-explore">
                    <div className="info-wrap">
                        <h3 className="title">
                            <span className="text-sm text-pos-1">explore our</span>
                            <span className="text-lg text-pos-2">premium</span>
                            <span className="text-lg text-pos-3">packages</span>
                        </h3>
                        <ul className="feature-list">
                            <li>COMPREHENSIVE PACKAGE</li>
                            <li>SIGNATURE PACKAGE</li>
                            <li>ESSENTIAL PACKAGE</li>
                        </ul>
                        <a href="/essential-package" className="btn btn-default"><span>explore</span></a>
                    </div>
                    <div className="img-wrap">
                        <img src={premiumPackageImg} alt="Coating Car" title="Coating Car" />
                    </div>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Packages