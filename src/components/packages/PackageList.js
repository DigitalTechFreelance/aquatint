import React from 'react';

function PackageList({data}) {
  return (
    <div className="lyt-service typ-packages">
        <ul className="list-wrap">
            {data.map((item, index)=>{
                return (
                    <li className="list-item" key={index}>
                        <div className="bs-service">
                            <div className="img-wrap">
                                <img src={item.image.url} alt={item.image.alternativeText} title={item.image.name}/>
                            </div>
                            <div className="info-wrap">
                                <h3 className="title">{item.packageName1}<span className="cm-line-break">{item.packageName2}</span></h3>
                                <a href={item.buttonUrl} className="btn btn-default"><span>{item.buttonText}</span></a>
                                <span className="water-mark">{item.backgroundWatemark}</span>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default PackageList