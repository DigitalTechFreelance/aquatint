import React from 'react';
import WorkSlider from './WorkSlider';
import Fade from 'react-reveal/Fade';

function RecentWork({ data }) {

    return (
        <section>
            <div className="bs-section">
                <div className="cm-container">
                    <div className="sec-head">
                        <Fade bottom distance="20px" delay={500} duration={800}>
                            <h2 className="sec-title">Our Recent Work</h2>
                        </Fade>
                    </div>
                </div>
                <div className="sec-cont">
                    <Fade bottom distance="20px" delay={800} duration={800}>
                        <WorkSlider data={data} />
                    </Fade>
                </div>
            </div>
        </section>

    )
}

export default RecentWork