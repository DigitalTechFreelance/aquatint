import React from 'react';
import ReactMarkdown from 'react-markdown';

function Service({data}) {
  return (
    <div className="sp-cont">
        {data.map((item, index)=>{
            return (
            <section>
                <div className={`bs-section ${item.subFeatures[0].description !==null ? '': 'cm-no-pad-top'}`} key={index}>
                    <div className="sec-cont">
                        <div className="cm-container">
                            <div className={`bs-infography typ-grid-left ${item.subFeatures[0].description !==null ? 'typ-vertical-center': '' }`}>
                                <div className="info-wrap">
                                    <ul className="mod-list typ-italic">
                                        <li className="list-item">
                                            <p>{item.name}</p>
                                            <ul className={`mod-list typ-bold ${item.subFeatures[0].description !==null ? '': 'typ-grid'}`}>
                                                {item.subFeatures.map((ele, i)=>{
                                                    return (
                                                        <li className="item" key={i}>
                                                            <p className="title">{ele.point}</p>
                                                            {ele.description!== null && <ReactMarkdown className="rich-text" renderers={{ root: React.Fragment }} children={ele.description}/>}
                                                            {ele.subPoints.length > 0 && (
                                                                <ul className="mod-list typ-disc">
                                                                    {ele.subPoints.map((point, ind)=>{
                                                                        return (
                                                                            <li className="item" key={ind}><p>{point.point}</p></li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="img-wrap">
                                    <img src={`http://13.233.247.201:1337/${item.image.data.attributes.url}`} alt={item.image.data.attributes.alternativeText} title={item.image.data.attributes.name}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
        })}
    </div>
  )
}

export default Service;