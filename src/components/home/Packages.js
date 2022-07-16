import React from 'react';

function Packages({data}) {

  const {title1, title2, title3, image, packages, buttonText, buttonUrl, buttonUrlAltText} = data

  return (
    <section>
        <div className="bs-section">
            <div className="sec-cont">
                <div className="bs-infography typ-reverse typ-explore">
                    <div className="info-wrap">
                        <h3 className="title">
                            <span className="text-sm text-pos-1">{title1}</span>
                            <span className="text-lg text-pos-2">{title2}</span>
                            <span className="text-lg text-pos-3">{title3}</span>
                        </h3>
                        <ul className="feature-list">
                            {packages.length>0 && packages.data.map((item, index)=>(
                                <li key={index}>{item.packageName}</li>
                            ))}
                        </ul>
                        <a href={buttonUrl} className="btn btn-default"><span>{buttonText}</span></a>
                    </div>
                    <div className="img-wrap">
                        <img src={image.url} alt={image.alternativeText} title={image.name} />
                    </div>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Packages