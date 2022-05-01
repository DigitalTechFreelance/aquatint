import React from 'react';
import _ from 'lodash';


function Benefits({data}) {
  return (
    <section>
        <div className="bs-section typ-gradiant-orange">
            <div className="cm-container">
                <div className="sec-head">
                    <h2 className="sec-title">{data.sectionTitle}</h2>
                </div>
                <div className="sec-cont">
                    <div className="mod-benefits typ-clarity-benefits">
                        {_.chunk(data.points, 4).map((item, index)=>{
                            return (
                                <ul className="list-wrap" key={index}>
                                    {item.map((ele, ind)=>{
                                        return (
                                            <li className="item" key={ind}>
                                                <p className="text">{ele.point}</p>
                                            </li>
                                        )
                                    })}
                                </ul> 
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits;