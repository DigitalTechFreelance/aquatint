import React from 'react';
import infoImg from '../../assets/images/signature-package.webp';


function CoatingInfogarphy2() {
  return (
    <div className="bs-infography typ-reverse">
      <div className="info-wrap">
        <div className="bs-list">
          <h4 className="title">coatings</h4>
          <ul className="list-wrap">
            <li className="item">painted surfaces</li>
            <li className="item">headlights & tail lights</li>
            <li className="item">windshield & glasses</li>
            <li className="item">plastic trim</li>
            <li className="item">chrome trim</li>
            <li className="item">alloys</li>
            <li className="item">interior plastics & leather</li>
          </ul>
        </div>
      </div>
      <div className="img-wrap">
        <img src={infoImg} alt="Coating Car" title="Coating Car" />
      </div>
    </div>
  )
}

export default CoatingInfogarphy2;