import React from 'react'

function ServiceList() {
  return (
    <div className="lyt-service">
        <ul className="list-wrap">
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap"></div>
                    <div className="info-wrap">
                        <h3 className="title">wash services</h3>
                        <ul className="feature-list">
                            <li className="feature-item">insta gloss</li>
                            <li className="feature-item">pro wash</li>
                            <li className="feature-item">ceramic wash</li>
                        </ul>
                        <button type="button" className="btn btn-default">see more</button>
                    </div>
                    <span className="water-mark">wash</span>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap"></div>
                    <div className="info-wrap">
                        <h3 className="title">detailing services</h3>
                        <ul className="feature-list">
                            <li className="feature-item">exterior detailing</li>
                            <li className="feature-item">interior detailing</li>
                        </ul>
                        <button type="button" className="btn btn-default">see more</button>
                    </div>
                    <span className="water-mark">detail</span>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap"></div>
                    <div className="info-wrap">
                        <h3 className="title">ceramic coating</h3>
                        <ul className="feature-list">
                            <li className="feature-item">gloss coat</li>
                            <li className="feature-item">nano ceramic coating</li>
                            <li className="feature-item">premium packages</li>
                        </ul>
                        <button type="button" className="btn btn-default">see more</button>
                    </div>
                    <span className="water-mark">protect</span>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap"></div>
                    <div className="info-wrap">
                        <h3 className="title">paint protection film (ppf)</h3>
                        <ul className="feature-list">
                            <li className="feature-item">gloss coat</li>
                            <li className="feature-item">nano ceramic coating</li>
                            <li className="feature-item">premium packages</li>
                        </ul>
                        <button type="button" className="btn btn-default">see more</button>
                    </div>
                    <span className="water-mark">protect</span>
                </div>
            </li>
            <li className="list-item">
                <div className="bs-service">
                    <div className="img-wrap"></div>
                    <div className="info-wrap">
                        <h3 className="title">customisation services</h3>
                        <ul className="feature-list">
                            <li className="feature-item">denting &amp; painting</li>
                            <li className="feature-item">sun films</li>
                            <li className="feature-item">clarity coat</li>
                        </ul>
                        <button type="button" className="btn btn-default">see more</button>
                    </div>
                    <span className="water-mark">customise</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ServiceList