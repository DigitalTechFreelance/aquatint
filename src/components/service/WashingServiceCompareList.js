import React from 'react'

function WashingServiceCompareList({data}) {
  return (
    <div className="bs-compare">
        <ul className="comapre-list-wrap">
            {data.map((item, index)=> {
                return (
                    item.isActive && (
                    <li className="item" key={index}>
                        <h4 className="title">{item.serviceName}</h4>
                        <div className="mod-list">
                            <ul className="details-list">
                                {item.featurePoints.map((ele, i)=>(
                                    <li className="item" key={i}>
                                    <p>{ele.point}</p>
                                    {ele.subPoints && ele.subPoints?.length>0 && (
                                        <ul className="sub-list-wrap">
                                            {ele.subPoints.map((point, index)=>(
                                                <li className="sub-item" key={index}>{point.point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    )
                )
            })}
            {/* <li className="item">
                <h4 className="title">INSTA GLOSS</h4>
                <div className="mod-list">
                    <ul className="details-list">
                        <li className="item">
                            <p>High Pressure Foam/Steam Wash</p>
                            <ul className="sub-list-wrap">
                                <li className="sub-item">Engine bay steam clean</li>
                                <li className="sub-item">Door jambs cleaning</li>
                                <li className="sub-item">Wheel cleaning</li>
                                <li className="sub-item">Floor mat cleaning</li>
                            </ul>
                        </li>
                        <li className="item">
                            <p>Spray on wax application</p>
                        </li>
                        <li className="item">
                            <p>Dressing</p>
                            <ul className="sub-list-wrap">
                                <li className="sub-item">Plastic trim dressing</li>
                                <li className="sub-item">Tyre dressing</li>
                            </ul>
                        </li>
                        <li className="item">
                            <p>Interior vacuum &amp; wet wipe</p>
                        </li>
                        <li className="item">
                            <p>Glass Cleaning</p>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="item">
                <h4 className="title">PRO WASH</h4>
                <div className="mod-list">
                    <ul className="details-list">
                        <li className="item">
                            <p>All Services of INSTA-GLOSS</p>
                        </li>
                        <li className="item">
                            <p>Tar Marks removal from body &amp; alloys</p>
                        </li>
                        <li className="item">
                            <p>Bug stains removal</p>
                        </li>
                        <li className="item">
                            <p>Claying on painted surface to reduce roughness</p>
                        </li>
                        <li className="item">
                            <p>Premium Carnauba Wax application</p>
                        </li>
                        <li className="item">
                            <p>Interior Plastic &amp; Dashboard premium dressing</p>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="item">
                <h4 className="title">CERAMIC WASH</h4>
                <div className="mod-list">
                    <ul className="details-list">
                        <li className="item">
                            <p>All services of PRO-WASH</p>
                        </li>
                        <li className="item">
                            <p>Alkaline pre wash</p>
                            <ul className="sub-list-wrap">
                                <li className="sub-item">Removes organic dirt</li>
                            </ul>
                        </li>
                        <li className="item">
                            <p>Acidic foam wash</p>
                            <ul className="sub-list-wrap">
                                <li className="sub-item">Removes lime scale</li>
                            </ul>
                        </li>
                        <li className="item">
                            <p>Iron decontamination</p>
                            <ul className="sub-list-wrap">
                                <li className="sub-item">Removes metal oxides, brake dust etc.</li>
                            </ul>
                        </li>
                        <li className="item">
                           <p>Tar and Bug stains removal</p>
                        </li>
                        <li className="item">
                            <p>Neutralized foam wash</p>
                            <ul className="sub-list-wrap">
                                <li className="sub-item"> Neutral maintenance wash with high lubrication action</li>
                            </ul>
                        </li>
                        <li className="item">
                            <p>Application of Nano Ceramic Sealant for uv protection and high gloss finish</p>
                        </li>
                        <li className="item">
                            <p>Gloss enhancer application</p>
                        </li>
                    </ul>
                </div>
            </li> */}
        </ul>
    </div>
  )
}

export default WashingServiceCompareList