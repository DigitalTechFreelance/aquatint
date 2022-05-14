import React from 'react';
import washServiceImg from '../../assets/images/wash-service.webp';
import detailServiceImg from '../../assets/images/detail-service.webp';
import coatServiceImg from '../../assets/images/coat-service.webp';

function PackageList() {
  return (
    <div className="lyt-service typ-packages">
        <ul className="list-wrap">
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap">
                        <img src={washServiceImg} alt="Wash Service"/>
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">COMPREHENSIVE <span className="cm-line-break">package</span></h3>
                        <a href="/comprehensive-package" className="btn btn-default"><span>see more</span></a>
                        <span className="water-mark">COMPREHENSIVE</span>
                    </div>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap">
                        <img src={detailServiceImg} alt="detailing services"/>
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">SIGNATURE <span className="cm-line-break">package</span></h3>
                        <a href="/signature-package" className="btn btn-default"><span>see more</span></a>
                        <span className="water-mark">SIGNATURE</span>
                    </div>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap">
                        <img src={coatServiceImg} alt="ceramic coating"/>
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">ESSENTIAL <span className="cm-line-break">package</span></h3>
                        <a href="/essential-package" className="btn btn-default"><span>see more</span></a>
                        <span className="water-mark">ESSENTIAL</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default PackageList