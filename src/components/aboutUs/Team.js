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
                                <img src={item.image.url} alt={item.image.alternativeText} title={item.image.name} height="100%" width="100%" />
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