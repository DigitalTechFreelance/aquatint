import React from 'react';


function Warranty({data}) {
  return (
    <section>
        <div className="bs-section">
            <div className="sec-cont">
                <div className="bs-band typ-warranty">
                    <div className="mod-warranty">
                        <span className="count">{data}</span>
                        <span className="text">years warranty</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Warranty;