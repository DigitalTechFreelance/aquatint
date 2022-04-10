import React from 'react';
import WorkSlider from './WorkSlider';

function RecentWork({data}) {

  return (
    <section>
        <div className="bs-section">
            <div className="cm-container">
                <div className="sec-head">
                    <h2 className="sec-title">Our Recent Work</h2>
                </div>
            </div>
            <div className="sec-cont">
                <WorkSlider data={data}/>
            </div>
        </div>
    </section>

  )
}

export default RecentWork