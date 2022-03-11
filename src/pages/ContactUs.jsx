import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';

function ContactUs() {
  return (
    <>
        <Header/>
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">CONTACT us</h2>
                    </div>
                    <div className="sp-cont">
                        <section>
                            <div className="bs-section">
                                <div className="sec-cont">
                                    <div className="mod-map"></div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="bs-section">
                                <div className="sec-head">
                                    <h2 className="sec-title">COMPANY INFO</h2>
                                </div>
                                <div className="sec-cont">
                                    <div className="bs-contact">
                                        <ul className="list-wrap">
                                            <li className="list-item">
                                                <h3 className="title">Address</h3>
                                                <ul className="list">
                                                    <li className="item">
                                                        <address>
                                                            <span className="title">pune</span>
                                                            <span className="address">AquaTint Auto Detailing Studio, Sr. no. 237/2, New DP road, Near Medipoint Hospital, Aundh, Pune: 411045. </span>
                                                        </address>
                                                    </li>
                                                    <li className="item">
                                                        <address>
                                                            <span className="title">KHARADI</span>
                                                            <span className="address">S.No. 52/A, Shree Ram Society, near Adi Corporation, near Chandan Nagar BRT stop, Nagar Road, Pune 411014. </span>
                                                        </address>
                                                    </li>
                                                    <li className="item">
                                                        <address>
                                                            <span className="title">BARAMATI</span>
                                                            <span className="address">Malegaon Road, Near Pandit Automotive, Kasba, Baramati, Pune - 413102.</span>
                                                        </address>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="list-item">
                                                <h3 className="title">CONTACT DETAILS</h3>
                                                <ul className="list">
                                                    <li className="item">
                                                        <h4 className="title">EMAIL</h4>
                                                        <a href="mailto:carcare@aquatintdetailing.com" className="link">carcare@aquatintdetailing.com</a>
                                                    </li>
                                                    <li className="item">
                                                        <h4 className="title">PHONE</h4>
                                                        <a href="tel:+917066457656" className="link">+91-7066457656</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="bs-section">
                                <div className="sec-head">
                                    <h2 className="sec-title">CUSTOMER DETAILS</h2>
                                </div>
                                <div className="sec-cont">
                                    <form className="bs-form">
                                        <div className="form-wrap">
                                            <div className="form-group">
                                                <TextField id="standard-basic" label="Name" variant="standard" />
                                            </div>
                                            <div className="form-group">
                                                <TextField id="standard-basic" label="E-Mail Id" variant="standard" />
                                            </div>
                                            <div className="form-group">
                                                <TextField id="standard-basic" label="Contact No." variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                                            </div>
                                            <div className="form-group">
                                                <TextField id="standard-basic" label="Vehicle" variant="standard" />
                                            </div>
                                            <div className="form-group">
                                                <TextField id="standard-basic" label="Verify" variant="standard" />
                                            </div>
                                            <div className="form-group">
                                                <span className="captcha"></span>
                                            </div>
                                            <div className="form-group">
                                                <TextareaAutosize
                                                    maxRows={4}
                                                    aria-label="maximum height"
                                                    placeholder="Message"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-action">
                                            <button type="button" className="btn btn-default">submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default ContactUs