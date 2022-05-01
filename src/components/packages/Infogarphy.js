import React from 'react';


function Infogarphy({data}) {
  return (
    <section>
      <div className="bs-section typ-center">
        <div className="sec-cont">
          <div className={`bs-infography typ-reverse ${data.features.length>0? 'typ-7coatings': 'typ-essential'}`}>
            <div className="info-wrap">
              {data.features.length>0? (
                  <div className="bs-list">
                    {data.coatingName !== null && data.coatingName !== "" && <h4 className="title">{data.coatingName}</h4>}
                    {data.features.length>0 && (<ul className="list-wrap">
                      {data.features.map((item, index)=>{
                        return (
                          <li className="item" key={index}>{item.point}</li>
                        )
                      })}
                    </ul>)}
                  </div>
              ):(
                <h3 className="title">
                  <span className="text-md">{data.text1}</span>
                  <span className="text-md">{data.text2}</span>
                  <span className="text-xl">{data.text3}</span>
                  <span className="text-sm">{data.text4}</span>
                </h3>
              )}
            </div>
            <div className="img-wrap">
              <img src={`http://localhost:1337${data.image.data.attributes.url}`} alt={data.image.data.attributes.alternativeText} title={data.image.data.attributes.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infogarphy;