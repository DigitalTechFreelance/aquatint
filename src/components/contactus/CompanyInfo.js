import React from 'react';

function CompanyInfo({data}) {
  return (
    <section>
        <div className="bs-section">
            <div className="sec-head">
                <h2 className="sec-title">COMPANY INFO</h2>
            </div>
            <div className="sec-cont">
                <div className="bs-contact">
                    <ul className="list-wrap">
                        <li className="list-item">
                            <h3 className="title">Address</h3>
                            <ul className="list">
                                {data.addresses.map((item, index)=>{
                                    return (
                                        item.isActive && (
                                        <li className="item" key={index}>
                                            <address>
                                                <span className="title">{item.studioName}</span>
                                                <span className="address">{item.address}</span>
                                            </address>
                                        </li> )
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="list-item">
                            <h3 className="title">CONTACT DETAILS</h3>
                            <ul className="list">
                                <li className="item">
                                    <h4 className="title">EMAIL</h4>
                                    <a href={`mailto:${data.emailId}`} className="link">{data.emailId}</a>
                                </li>
                                <li className="item">
                                    <h4 className="title">PHONE</h4>
                                    <a href={`tel:${data.phoneNo}`} className="link">{data.phoneNo}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CompanyInfo