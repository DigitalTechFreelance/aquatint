import React from 'react';
import tejasImg from '../../assets/images/tejas.webp';
import nikhilImg from '../../assets/images/nikhil.webp';
import lalletImg from '../../assets/images/lallet.webp';

function Team() {
  return (
    <div className="lyt-team">
        <ul className="team-wrap">
            <li className="team-item">
                <div className="mod-team">
                    <div className="img-wrap">
                        <img src={tejasImg} alt="Tejas Ingle" title="Tejas Ingle" height="100%" width="100%" />
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">Mr. Tejas Ingle</h3>
                        <p className="designation">Co-Founder, Aquatint Auto Detailing Studio LLP</p>
                    </div>
                </div>
            </li>
            <li className="team-item">
                <div className="mod-team">
                    <div className="img-wrap">
                        <img src={nikhilImg} alt="Nikhil Sagale" title="Nikhil Sagale" height="100%" width="100%" />
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">Mr. Nikhil Sagale</h3>
                        <p className="designation">Co-Founder, Aquatint Auto Detailing Studio LLP</p>
                    </div>
                </div>
            </li>
            <li className="team-item">
                <div className="mod-team">
                    <div className="img-wrap">
                        <img src={lalletImg} alt="Lallett Banthia" title="Lallett Banthia" height="100%" width="100%" />
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">Mr. Lallett Banthia</h3>
                        <p className="designation">Co-Founder, Aquatint Auto Detailing Studio LLP</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Team