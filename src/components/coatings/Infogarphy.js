import React from 'react';


function Infogarphy({data}) {
  return (
    <section>
      <div className="bs-section typ-center">
        <div className="sec-cont cm-container">
            <div className='bs-infography typ-clarity-futureof'>
              <div className="info-wrap">
                <h3 className="title">{data.title}</h3>
                <div className="desc">
                  <p>{data.description}</p>
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

export default Infogarphy;