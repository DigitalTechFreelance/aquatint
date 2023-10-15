import React from 'react';
import Fade from 'react-reveal/Fade';

function ServiceList({ data }) {
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
        <div className="lyt-service">
            <ul className="list-wrap">
                {data !== undefined && data.length > 0 && data.map((item, index) => {
                    return (
                        item.isActive && (
                            <Fade bottom distance="20px" delay={500} duration={800} key={index}>
                                <li className="list-item" >
                                    <div className="bs-service">
                                        <div className="img-wrap">
                                            <img src={item.image.url} alt={item.image.alternativeText} title={item.image.name} />
                                        </div>
                                        <div className="info-wrap">
                                            <h3 className="title">{item.serviceName1} <span className="cm-line-break">{item.serviceName2}</span></h3>
                                            <ul className="feature-list">
                                                {item.typeName.map((ele, i) => (
                                                    <li className="feature-item" key={i}>{ele.point}</li>
                                                ))}
                                            </ul>
                                            <a href={item.buttonUrl} className="btn btn-default" onClick={()=> onClickEvent(item.buttonUrl)}><span>{item.buttonText}</span></a>
                                            <span className="water-mark">{item.backgroundWatemark}</span>
                                        </div>
                                    </div>
                                </li>
                            </Fade>
                        )
                    )
                })}
            </ul>
        </div>
    )
}

export default ServiceList