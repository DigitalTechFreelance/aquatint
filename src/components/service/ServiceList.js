import React from 'react';
import washServiceImg from '../../assets/images/wash-service.webp';
import detailServiceImg from '../../assets/images/detail-service.webp';
import coatServiceImg from '../../assets/images/coat-service.webp';
import filmServieImg from '../../assets/images/film-service.webp';
import customizeServiceImg from '../../assets/images/customize-service.webp';

function ServiceList() {
  return (
    <div className="lyt-service">
        <ul className="list-wrap">
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap">
                        <img src={washServiceImg} alt="Wash Service" alt="Wash Service" />
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">wash <span className="cm-line-break">services</span></h3>
                        <ul className="feature-list">
                            <li className="feature-item">insta gloss</li>
                            <li className="feature-item">pro wash</li>
                            <li className="feature-item">ceramic wash</li>
                        </ul>
                        <button type="button" className="btn btn-default"><span>see more</span></button>
                        <span className="water-mark">wash</span>
                    </div>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap">
                        <img src={detailServiceImg} alt="detailing services" alt="detailing services" />
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">detailing <span className="cm-line-break">services</span></h3>
                        <ul className="feature-list">
                            <li className="feature-item">exterior detailing</li>
                            <li className="feature-item">interior detailing</li>
                        </ul>
                        <button type="button" className="btn btn-default"><span>see more</span></button>
                        <span className="water-mark">detail</span>
                    </div>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap">
                        <img src={coatServiceImg} alt="ceramic coating" alt="ceramic coating" />
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">ceramic <span className="cm-line-break">coating</span></h3>
                        <ul className="feature-list">
                            <li className="feature-item">gloss coat</li>
                            <li className="feature-item">nano ceramic coating</li>
                            <li className="feature-item">premium packages</li>
                        </ul>
                        <button type="button" className="btn btn-default"><span>see more</span></button>
                        <span className="water-mark">protect</span>
                    </div>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap">
                        <img src={filmServieImg} alt="paint protection film (ppf)" alt="paint protection film (ppf)" />
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">paint protection <span className="cm-line-break">film (ppf)</span></h3>
                        <ul className="feature-list">
                            <li className="feature-item">gloss coat</li>
                            <li className="feature-item">nano ceramic coating</li>
                            <li className="feature-item">premium packages</li>
                        </ul>
                        <button type="button" className="btn btn-default"><span>see more</span></button>
                        <span className="water-mark">protect</span>
                    </div>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap">
                        <img src={customizeServiceImg} alt="customisation services" alt="customisation services" />
                    </div>
                    <div className="info-wrap">
                        <h3 className="title">customisation <span className="cm-line-break">services</span></h3>
                        <ul className="feature-list">
                            <li className="feature-item">denting &amp; painting</li>
                            <li className="feature-item">sun films</li>
                            <li className="feature-item">clarity coat</li>
                        </ul>
                        <button type="button" className="btn btn-default"><span>see more</span></button>
                        <span className="water-mark">customise</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ServiceList