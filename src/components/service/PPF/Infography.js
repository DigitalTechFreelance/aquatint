import React from 'react';

function Infography({data}) {
  return (
    <section>
      <div className="bs-section typ-center">
          <div className="sec-cont cm-container">
            <div className="bs-infography typ-reverse typ-icon typ-2">
              <div className="info-wrap">
                <div className="lyt-icon-text typ-secondary">
                  <ul className="list-wrap">
                    {data.features.map((item, index)=>{
                        let icon=item.icon.replace(/_/g, "-");
                        return (
                          <li className="list-item" key={index}>
                            <div className="mod-icon-text">
                              <div className="icon-wrap">
                                <span className={`icon icon-${icon}`}></span>
                              </div>
                              <div className="text-wrap">
                                <h3 className="title">{item.name}</h3>
                              </div>
                            </div>
                          </li>
                        )
                    })}
                  </ul>
                </div>
              </div>
              <div className="img-wrap">
                <img src={data.image.url} alt={data.image.alternativeText} title={data.image.name} />
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Infography;