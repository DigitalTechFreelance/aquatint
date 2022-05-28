import React from 'react';
import partialProtectionImg from '../../assets/images/partial-protection.png';
import trackPackImg from '../../assets/images/track-pack.png';
import fullCarProtection from '../../assets/images/full-car-protection.png';

function PpfCompareList() {
  return (
    <div className="bs-compare">
        <ul className="comapre-list-wrap">
            <li className="item">
                <div className="img-wrap">
                    <img src={partialProtectionImg} alt="partial protection" title="partial protection" className="" />
                </div>
                <div className="mod-list">
                    <ul className="details-list">
                        <li className="item">
                            <h4 className="title">partial protection</h4>

                            <p>Protect the high impact areas of your vehicle with this partial protection package</p>
                        </li>
                        <li className="item">
                            <p>This package includes a full front & rear bumper, mirror, door cups,door edges</p>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="item">
                <div className="img-wrap">
                    <img src={trackPackImg} alt="Track pack" title="Track pack" className="" />
                </div>
                <div className="mod-list">
                    <ul className="details-list">
                        <li className="item">
                            <h4 className="title">track pack</h4>
                            <p>This is our most important application. It's for those who want extensive frontal protection and don't want the "line" from the Partial Protection Package across the hood of affect the appearance of their vehicle.</p>
                        </li>
                        <li className="item">
                            <p>The Package includes the full front bumper,rear bumper, head lights, full fenders and bonnet plus the side mirror caps.</p>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="item">
                <div className="img-wrap">
                    <img src={fullCarProtection} alt="full car protection" title="full car protection" className="" />
                </div>
                <div className="mod-list">
                    <ul className="details-list">
                        <li className="item">
                            <h4 className="title">Full car protection</h4>
                            
                            <p>This package provides peace of mind that the entire painted surface of your vehicle is protected from impacts</p>
                        </li>
                        <li className="item">
                            <p>Your vehicle will always look amazing and glossy since the self-healing feature of the film shakes off minor towel-induced swirl marks.</p>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default PpfCompareList