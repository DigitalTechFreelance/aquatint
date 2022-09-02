import React from 'react';
import ReactMarkdown from 'react-markdown';

function Service({data}) {
  return (
    <div className="sp-cont">
        {data.map((item, index)=>{
            return (
            <section>
                <div className={`bs-section ${item.subFeatures[0].description !==null && item.subFeatures[0].description?.length > 0 ? '': 'cm-no-pad-top'}`} key={index}>
                    <div className="sec-cont">
                        <div className="cm-container">
                            <div className={`bs-infography typ-grid-left ${item.subFeatures[0]?.description !==null && item.subFeatures[0].description?.length > 0 ? 'typ-vertical-center': '' }`}>
                                <div className="info-wrap">
                                    <ul className="mod-list typ-italic">
                                        <li className="list-item">
                                            <p>{item.name}</p>
                                            <ul className={`mod-list typ-bold ${item.subFeatures[0]?.description !==null && item.subFeatures[0].description?.length > 0 ? '': 'typ-grid'}`}>
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
                                    <img src={item.image.url} alt={item.image.alternativeText} title={item.image.name}/>
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