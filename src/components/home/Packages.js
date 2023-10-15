import React from 'react';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

function Packages({ data }) {

    const { title1, title2, title3, image, packages, buttonText, buttonUrl } = data
    function gtag_report_conversion(url) {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    }
    
    const onClickEvent = (url)=>{
        const isBrowser = typeof window !== "undefined"
        if (isBrowser) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-929250397/VGh-CJma6OsYEN34jLsD',
                'event_callback': gtag_report_conversion(url)
            });
      }
    }
    return (
        <section>
            <div className="bs-section">
                <div className="sec-cont">
                    <div className="bs-infography typ-reverse typ-explore">
                        <div className="info-wrap">
                            <h3 className="title">
                                <LightSpeed right distance="20px" duration={500} delay={300}>
                                    <span className="text-sm text-pos-1">{title1}</span>
                                </LightSpeed>
                                <LightSpeed right distance="20px" duration={500} delay={400}>
                                    <span className="text-lg text-pos-2">{title2}</span>
                                </LightSpeed>
                                <LightSpeed right distance="20px" duration={500} delay={500}>
                                    <span className="text-lg text-pos-3">{title3}</span>
                                </LightSpeed>
                            </h3>
                            <ul className="feature-list">
                                {packages && packages.length > 0 && packages.map((item, index) => (
                                    <LightSpeed right delay={500 + (150 * (index + 1))} duration={500} distance="20px" key={index}>
                                        <li >{item.packageName}</li>
                                    </LightSpeed>
                                ))}
                            </ul>
                            <Fade duration={500} delay={1100}>
                                <a href={buttonUrl} className="btn btn-default" onClick={()=> onClickEvent(buttonUrl)}><span>{buttonText}</span></a>
                            </Fade>
                        </div>
                        <Fade left distance="20px" duration={500} delay={100}>
                            <div className="img-wrap">
                                <img src={image.url} alt={image.alternativeText} title={image.name} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages