import React from 'react';
import ReactMarkdown from 'react-markdown';
import Slide from 'react-reveal/Slide';

function Infogarphy({ data }) {

  const { title, description, buttonLink, buttonText, image } = data
  return (
    <section>
      <div className="bs-section typ-infography cm-paddtop-30 bs-pattern pattern-orange patter-pos-1">
        <div className="cm-container">
          <div className="sec-cont">
            <div className='bs-infography typ-franchise'>
              <Slide left distance="20px" delay={500} duration={800}>
                <div className="info-wrap">
                  <h3 className="title">{title}</h3>
                  <ReactMarkdown className="desc rich-text" children={description} />
                  <a href={buttonLink} className="btn btn-default"><span>{buttonText}</span></a>
                </div>
              </Slide>
              <Slide right distance="20px" delay={500} duration={800}>
                <div className="img-wrap">
                  <img src={image.url} alt={image.alternativeText} title={image.name} />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Infogarphy;