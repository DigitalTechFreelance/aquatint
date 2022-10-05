import React from 'react';
import ReactMarkdown from 'react-markdown';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function Infogarphy({ data }) {

  const { title, image, description } = data !== null && data

  return (
    <div className="bs-infography typ-about">
      <Fade left distance="100px" delay={500} duration={800}>
        <div className="info-wrap">
          <h3 className="title">{title}</h3>
          <ReactMarkdown className="desc rich-text" children={description} />
        </div>
      </Fade>
      <Slide right distance="20px" delay={500} duration={800}>
        <div className="img-wrap">
          <img src={image.url} alt={image.alternativeText} title={image.name} width="100%" height="auto" />
        </div>
      </Slide>
    </div>
  )
}

export default Infogarphy;