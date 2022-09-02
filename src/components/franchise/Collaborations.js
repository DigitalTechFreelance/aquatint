import React from 'react';

function Collaborations({data}) {

  return (
    <section>
    <div className="bs-section">
        <div className="cm-container">
            <div className="wrapper-content">
                <div className="sec-head">
                    <h2 className="sec-title">COLLABORATIONS</h2>
                </div>
                <div className="sec-cont">
                    <div className="bs-infography typ-vertical">
                        <div className="info-wrap">
                            <div className="desc">
                                <p>{data.info}</p>
                            </div>
                        </div>
                        <div className="img-wrap">
                            <ul className="mod-logo-list">
                                {data.logos.map((item, index) =>{
                                    return (
                                        <li className="logo-item" key={index}>
                                            <img className="m-logo" src={`http://13.233.247.201:1337/${item.image.data.attributes.url}`} alt={item.image.data.attributes.alternativeText} title={item.image.data.attributes.name}  />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Collaborations