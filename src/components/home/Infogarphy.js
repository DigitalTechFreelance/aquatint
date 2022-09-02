import React from 'react';
// import franchiseImg from '../../assets/images/franchise.webp';
import ReactMarkdown from 'react-markdown';

function Infogarphy({data}) {

  const {title, description, buttonAltText, buttonLink, buttonText, image} = data
  return (
    <section>
    <div className="bs-section typ-infography cm-paddtop-30 bs-pattern pattern-orange patter-pos-1">
      <div className="cm-container">
        <div className="sec-cont">
          <div className='bs-infography typ-franchise'>
            <div className="info-wrap">
                <h3 className="title">{title}</h3>
                <ReactMarkdown className="desc rich-text" children={description} />
                <a href={buttonLink} className="btn btn-default"><span>{buttonText}</span></a>
            </div>
            <div className="img-wrap">
              <img src={`http://13.233.247.201:1337/${image.data.attributes.url}`} alt={image.data.attributes.alternativeText} title={image.data.attributes.name}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default Infogarphy;