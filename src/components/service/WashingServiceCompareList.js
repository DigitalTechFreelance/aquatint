import React from 'react';
import Fade from 'react-reveal/Fade';

function WashingServiceCompareList({ data }) {
    return (
        <div className="bs-compare">
            <ul className="comapre-list-wrap">
                {data.map((item, index) => {
                    return (
                        item.isActive && (
                            <Fade bottom distance="20px" delay={200 + (300 * (index + 1))} duration={800} key={index}>
                                <li className="item">
                                    <h4 className="title">{item.serviceName}</h4>
                                    <div className="mod-list">
                                        <ul className="details-list">
                                            {item.featurePoints.map((ele, i) => (
                                                <li className="item" key={i}>
                                                    <p>{ele.point}</p>
                                                    {ele.subPoints && ele.subPoints?.length > 0 && (
                                                        <ul className="sub-list-wrap">
                                                            {ele.subPoints.map((point, index) => (
                                                                <li className="sub-item" key={index}>{point.point}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
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

export default WashingServiceCompareList