import React from 'react';
import _ from 'lodash';

function Footer({data}) {
  const {footerMenus, socialLinks, contacts, email, phoneNo}= data
  return (
    <div className="bs-footer">
      <div className="cm-container">
        <div className="footer-item-wrap">
          {footerMenus.map((item, index)=>{
            return (
              item.isActive &&(
                <div className="footer-item" key={index}>
                <h4 className="title"><span>{item.name}</span></h4>
                <ul className="footer-list">
                  {item.submenus.map((ele, i)=>(
                    <li className="footer-list-item" key={i}><a href={ele.link}>{ele.name}</a></li>
                  ))}
                </ul>
              </div>
              )
            )
          })}
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
                            <a href={item.link} target="_blank">
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