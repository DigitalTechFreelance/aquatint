import React from 'react';
import Fade from 'react-reveal/Fade';


function PackagesYearly({ data }) {
    return (
        <section>
            <div className="bs-section typ-center">
                <div className="sec-head">
                    <Fade bottom distance="20px" delay={500} duration={800}>
                        <h2 className="sec-title">{data.sectionTitle}</h2>
                    </Fade>
                </div>
                <div className="sec-cont">
                    <ul className="lyt-info">
                        {data.packagesWarrenty.map((item, index) => {
                            return (
                                item.isActive && (
                                    <Fade bottom distance="20px" delay={200 + (100 * (index + 1))} duration={800}>
                                        <li className="info-item" key={index}>
                                            <div className={`mod-info ${item.subtitle !== null && item.subtitle !== '' ? 'typ-bg' : ''}`}>
                                                <div className="info-wrap">
                                                    <h3 className="title">{item.name}</h3>
                                                    {item.subtitle !== null && item.subtitle !== '' && <p className="sub-title">{item.subtitle}</p>}
                                                </div>
                                                <div className="mod-warranty">
                                                    <span className="count">{item.yearsWarrenty}</span>
                                                    <span className="text">year warranty</span>
                                                </div>
                                            </div>
                                        </li>
                                    </Fade>
                                )
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PackagesYearly;