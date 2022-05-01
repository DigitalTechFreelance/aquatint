import React from 'react';


function Process({data}) {
  return (
    <section>
        <div className="bs-section typ-center">
            <div className="sec-head">
                <h2 className="sec-title">{data.sectionTitle}</h2>
            </div>
            <div className="sec-cont">
                <ul className="mod-list typ-number">
                    {data.features.map((item, index)=>{
                        return (
                            <li className="list-item" key={index}>
                                <p>{item.point}</p>
                                <ul className="mod-list typ-disc">
                                    {item.subPoints.map((ele, ind)=>{
                                        return(
                                            <li className="item" key={ind}><p>{ele.point}</p></li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Process;