import React from 'react';
import Fade from 'react-reveal/Fade';


function Process({ data }) {
    return (
        <section>
            <div className="bs-section typ-center">
                <div className="sec-head">
                    <Fade bottom distance="20px" delay={500} duration={800}>
                        <h2 className="sec-title">{data.sectionTitle}</h2>
                    </Fade>
                </div>
                <div className="sec-cont">
                    <ul className="mod-list typ-number">
                        {data.features.map((item, index) => {
                            return (
                                <Fade bottom distance="20px" delay={200 + (100 * (index + 1))} duration={800}>
                                    <li className="list-item" key={index}>
                                        <p>{item.point}</p>
                                        <ul className="mod-list typ-disc">
                                            {item.subPoints.map((ele, ind) => {
                                                return (
                                                    <li className="item" key={ind}><p>{ele.point}</p></li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </Fade>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Process;