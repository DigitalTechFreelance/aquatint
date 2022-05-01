import React from 'react';

function WhyUs({data}) {

  return (
    <section>
        <div className="bs-section">
            <div className="cm-container">
                <div className="wrapper-content">
                    <div className="sec-head">
                        <h2 className="sec-title">{data.title}</h2>
                    </div>
                    <div className="sec-cont">
                        <ul className="mod-list typ-icon">
                            {data.points.map((item, index)=>{
                                return (
                                    <li className="list-item" key={index}><p>{item.point}</p></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs