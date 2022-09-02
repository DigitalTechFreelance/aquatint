import React from 'react';

function PpfCompareList({data}) {
  return (
    <section>
        <div className="bs-section typ-center">
            <div className="sec-head">
                <h2 className="sec-title">
                    {data.title}
                </h2>
            </div>
            <div className="sec-cont">
                <div className="bs-compare">
                    <ul className="comapre-list-wrap">
                        {data.Type.map((item, index)=>{
                            return (
                                <li className="item" key={index}>
                                <div className="img-wrap">
                                    <img src={item.image.url} alt={item.image.alternativeText} title={item.image.name} className="" />
                                </div>
                                <div className="mod-list">
                                    <ul className="details-list">
                                        {item.points.map((ele, i)=>(
                                            <li className="item" key={i}>
                                                {i===0 && <h4 className="title">{item.title}</h4>}
                                            <p>{ele.point}</p>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
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