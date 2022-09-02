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
                                            <img className="m-logo" src={item.image.url} alt={item.image.alternativeText} title={item.image.name}  />
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