import React from 'react';
import ReactMarkdown from 'react-markdown';

function Infogarphy({data}) {

  const {title, image, description}= data!==null && data

  return (
    <div className="bs-infography typ-about">
      <div className="info-wrap">
        <h3 className="title">{title}</h3>
        <ReactMarkdown className="desc rich-text" children={description} />
      </div>
      <div className="img-wrap">
        <img src={image.url} alt={image.alternativeText} title={image.name} width="100%" height="auto"/>
      </div>
    </div>
  )
}

export default Infogarphy;