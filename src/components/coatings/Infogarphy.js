import React from 'react';
import FadeReveal from 'react-reveal/Fade';


function Infogarphy({ data }) {
  return (
    <section>
      <div className="bs-section typ-center">
        <div className="sec-cont cm-container">
          <div className='bs-infography typ-clarity-futureof'>
            <FadeReveal left distance="20px" delay={500} duration={800}>
              <div className="info-wrap">
                <h3 className="title">{data.title}</h3>
                <div className="desc">
                  <p>{data.description}</p>
                </div>
              </div>
            </FadeReveal>
            <FadeReveal right distance="20px" delay={500} duration={800}>
              <div className="img-wrap">
                <img src={data.image.url} alt={data.image.alternativeText} title={data.image.name} />
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infogarphy;