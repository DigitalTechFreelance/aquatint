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
                <img src={`http://13.233.247.201:1337/${data.image.data.attributes.url}`} alt={data.image.data.attributes.alternativeText} title={data.image.data.attributes.name} />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Infogarphy;