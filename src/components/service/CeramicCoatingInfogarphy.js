import React from 'react';
import infoImg from '../../assets/images/coating-car.webp';

function CeramicCoatingInfogarphy() {
  return (
    <div className='bs-infography typ-icon'>
      <div className="info-wrap">
        <div className="lyt-icon-text">
          <ul className="list-wrap">
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-shield"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">UV PROTECTION</h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-gloss"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">INCREDIBLE GLOSS</h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-hammer"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">9H HARDNESS</h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-durability"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">3-4 YEARS DURABILITY</h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-super-hydrophobic"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">SUPER HYDROPHOBIC</h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-chemical-resistance"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">RESISTANCE TO CHEMICALS</h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-ceramic-protection"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">SUPERIOR CERAMIC PROTECTION.</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="img-wrap">
        <img src={infoImg} alt="Coating Car" title="Coating Car" />
      </div>
    </div>
  )
}

export default CeramicCoatingInfogarphy;