import React from 'react';

function TileGrid() {
  return (
    <ul className="lyt-tile-grid">
        <li className="grid-item">
            <div className="bs-tile">
                <div className="img-wrap">
                    <img/>
                </div>
                <div className="text-wrap">
                    <h3 className="title">wash</h3>
                </div>
            </div>
        </li>
        <li className="grid-item">
            <div className="bs-tile">
                <div className="img-wrap">
                    <img/>
                </div>
                <div className="text-wrap">
                    <h3 className="title">detail</h3>
                </div>
            </div>
        </li>
        <li className="grid-item">
            <div className="bs-tile">
                <div className="img-wrap">
                    <img/>
                </div>
                <div className="text-wrap">
                    <h3 className="title">ceramic coating</h3>
                </div>
            </div>
        </li>
        <li className="grid-item">
            <div className="bs-tile">
                <div className="img-wrap">
                    <img/>
                </div>
                <div className="text-wrap">
                    <h3 className="title">paint protection film</h3>
                </div>
            </div>
        </li>
        <li className="grid-item">
            <div className="bs-tile">
                <div className="img-wrap">
                    <img/>
                </div>
                <div className="text-wrap">
                    <h3 className="title">cutomise</h3>
                </div>
            </div>
        </li>
    </ul>
  )
}

export default TileGrid