import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CoatingInfogarphy2 from '../components/service/CoatingInfogarphy2';

function SignaturePackage() {
  return (
    <>
        <Header/>
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">SIGNATURE PACKAGE</h2>
                    </div>
                    <div className="sp-cont">
                        <section>
                            <div className="bs-section typ-center">
                                <div className="sec-head">
                                    <div className="sec-desc">
                                        <p>The Signature Package is the best your car can ask for. All the exterior and interior surfaces of your car are coated and protected in this package.</p>
                                        <p>The Signature Package will leave no stone unturned. You can retain that brand new finish of your car forever.</p>
                                    </div>
                                </div>
                                <div className="sec-cont">
                                    <CoatingInfogarphy2 />
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="bs-section">
                                <div className="sec-cont">
                                    <div className="bs-band typ-gradiant">
                                        <div className="mod-warranty">
                                            <span className="count">5</span>
                                            <span className="text">years warranty</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="bs-section">
                                <div className="sec-cont">
                                    <div className="mod-video typ-lg">
                                        <div className="title-wrap">
                                            <h4 className="title">COMPLETE CERAMIC PROTECTION</h4>
                                        </div>
                                        <div className="media-wrap">
                                            <div className="video"></div>
                                            <button className='btn'><span className="icon icn-play"></span></button>
                                        </div>
                                        <div className="action-wrap">
                                            <p>For more information, kindly download our Service Catalogue</p>
                                            <button type="button" className="btn btn-default">
                                                <span className="icon icon-dowload"></span>
                                                catalogue
                                            </button>
                                        </div>
                                    </div>
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

export default SignaturePackage