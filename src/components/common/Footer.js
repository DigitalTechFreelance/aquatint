import React from 'react';
import _ from 'lodash';

function Footer({data}) {
  console.log("data footer", data)
  const {footerMenus, socialLinks, contacts, email, phoneNo}= data
  return (
    <div className="bs-footer">
      <div className="cm-container">
        <div className="footer-item-wrap">
          <div className="footer-item">
            <h4 className="title"><span>Links</span></h4>
            <ul className="footer-list">
              <li className="footer-list-item"><a href="/about-us">About us</a></li>
              <li className="footer-list-item"><a href="/services">Services</a></li>
              <li className="footer-list-item"><a href="/ceramic-coating">Ceramic Coating</a></li>
              <li className="footer-list-item"><a href="/paint-protection-film">PPF</a></li>
              <li className="footer-list-item"><a href="/franchise-with-us">Franchise</a></li>
              <li className="footer-list-item"><a href="/contact-us">Contact</a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="title"><span>Our Services</span></h4>
            <ul className="footer-list">
              <li className="footer-list-item"><a href="/washing-services">Washing Services</a></li>
              <li className="footer-list-item"><a href="/detailing-services">Detailing Services</a></li>
              <li className="footer-list-item"><a href="/clarity-coat">Clarity Coatings</a></li>
              <li className="footer-list-item"><a href="/paint-protection-film">Paint Protection Flim</a></li>
              <li className="footer-list-item"><a href="/customisation-service">Customisation Services</a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="title"><span>Contact</span></h4>
            <div className="address-list">
                {_.chunk(contacts, 2).map((item, index)=>{
                  return (
                      <ul className="footer-list" key={index}>
                        {item.map((ele, ind)=>{
                          return(
                            ele.isActive && (
                            <li className="footer-list-item" key={ind}>
                              <p>
                                <span className="address-title">{ele.studioName} : </span>
                                <span className="address-desc">
                                  {ele.address}
                                </span>
                              </p>
                            </li>
                            )
                          )
                        })}
                      </ul>
                  )
                })}
              <ul className="footer-list">
                <li className="footer-list-item">
                  <p>
                    <span className="address-title">Email : </span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </li>
                <li className="footer-list-item">
                  <p>
                    <span className="address-title">Phone : </span>
                    <a href={`tel:${phoneNo}`}>{phoneNo}</a>
                  </p>
                </li>
                <li className="footer-list-item">
                  <p className="icon-text-wrap">
                    <span className="icon icon-mail"></span>
                    <span className="text">Connect With us</span>
                  </p>
                  <div className="social-icon-wrap">
                    {socialLinks.map((item, index)=>{
                      return (
                        item.isActive && (
                          <div className="social-icon" key={index}>
                            <a href={item.link}>
                              <span className={`icon icon-${item.icon}`}></span>
                            </a>
                          </div>
                        )
                      )
                    })}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer