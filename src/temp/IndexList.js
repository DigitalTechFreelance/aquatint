import React from "react";
import "./demo.css";
import logoImg from '../assets/images/logo.png';

function IndexList() {
    return (
        <>

            <div className="header-logo-wrap">
                <img
                    className="logo"
                    src={logoImg}
                    alt="Aquatint Application"
                />
            </div>

            <div className="siteContainer">
                <div className="flex-cont">
                    <div className="flex-item">
                        <h1 className="title">Pages</h1>
                        <ul className="custAcc">
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/home">Home Page</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/about-us">About Us</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/services">Services</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/paint-protection-film">Paint Protection Film</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/customisation-service">Customisation Services</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/franchise-with-us">Franchise With Us</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/contact-us">Contact Us</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-item">
                        <h1 className="title">Services</h1>
                        <ul className="custAcc">
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/washing-services">Washing Services</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/detailing-services">Detailing Services</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-item">
                        <h1 className="title">Coating</h1>
                        <ul className="custAcc">
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/ceramic-coating">Ceramic Coating</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/clarity-coat">Clarity Coating</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-item">
                        <h1 className="title">Packages</h1>
                        <ul className="custAcc">
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/comprehensive-package">Comprehensive Package</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/signature-package">Signature Package</a>
                                </div>
                            </li>
                            <li className="opn">
                                <div className="lbl">
                                    <a href="/essential-package">Essential Package</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexList;
