import React from 'react';

function Features({data}) {
  return (
    <section>
        <div className="bs-section cm-no-pad-top">
          <div className="sec-cont">
            <div className='bs-infography typ-icon'>
              <div className="info-wrap">
                <div className="lyt-icon-text">
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
                <img src={`http://localhost:1337${data.image.data.attributes.url}`} alt={data.image.data.attributes.alternativeText} title={data.image.data.attributes.name} />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Features;