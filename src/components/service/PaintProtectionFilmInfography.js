import React from 'react';
import infoImg from '../../assets/images/film-protection.webp';

function PaintProtectionFilmInfography() {
  return (
    <div className='bs-infography typ-reverse'>
      <div className="info-wrap">
        <div className="lyt-icon-text typ-secondary">
          <ul className="list-wrap">
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
                  <span className="icon icon-resale-value"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">RETAINS RESALE VALUE</h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-durability"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">EXCELLENT DURABILITY</h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-paint"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">RETAINS THE FACTORY PAINT FINISH </h3>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="mod-icon-text">
                <div className="icon-wrap">
                  <span className="icon icon-sponge"></span>
                </div>
                <div className="text-wrap">
                  <h3 className="title">EASY CLEANING</h3>
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

export default PaintProtectionFilmInfography;