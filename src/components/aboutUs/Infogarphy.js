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
        <img src={`http://13.233.247.201:1337/${image.data.attributes.url}`} alt={image.data.attributes.alternativeText} title={image.data.attributes.name} width="100%" height="auto"/>
      </div>
    </div>
  )
}

export default Infogarphy;