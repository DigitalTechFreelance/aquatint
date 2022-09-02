import React from 'react';

function Team({data}) {
  return (
    <div className="lyt-team">
        <ul className="team-wrap">
            {data !== undefined && data.length>0 && data.map((item, index)=>{
                return (
                  item.isActive && (
                    <li className="team-item" key={index}>
                        <div className="mod-team">
                            <div className="img-wrap">
                                <img src={`http://13.233.247.201:1337/${item.image.data.attributes.url}`} alt={item.image.data.attributes.alternativeText} title={item.image.data.attributes.name} height="100%" width="100%" />
                            </div>
                            <div className="info-wrap">
                                <h3 className="title">{item.name}</h3>
                                <p className="designation">{item.designation}</p>
                            </div>
                        </div>
                    </li>)
                )
            })}
        </ul>
    </div>
  )
}

export default Team