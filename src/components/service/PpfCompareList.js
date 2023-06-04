import React from 'react';
import Fade from 'react-reveal/Fade';

function PpfCompareList({ data }) {
    return (
        <section>
            <div className="bs-section typ-center">
                <div className="sec-head">
                    <Fade bottom distance="20px" delay={500} duration={800}>
                        <h2 className="sec-title">
                            {data.title}
                        </h2>
                    </Fade>
                </div>
                <div className="sec-cont">
                    <div className="bs-compare">
                        <ul className="comapre-list-wrap">
                            {data.Type.map((item, index) => {
                                return (
                                    <Fade bottom distance="20px" delay={200 + (300 * (index + 1))} duration={800} key={index}>
                                        <li className="item">
                                            <div className="img-wrap">
                                                <img src={item.image.url} alt={item.image.alternativeText} title={item.image.name} className="" />
                                            </div>
                                            <div className="mod-list">
                                                <ul className="details-list">
                                                    {item.points.map((ele, i) => (
                                                        <li className="item" key={i}>
                                                            {i === 0 && <h4 className="title">{item.title}</h4>}
                                                            <p>{ele.point}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </li>
                                    </Fade>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PpfCompareList