import React from 'react';
import ReactMarkdown from 'react-markdown';

function OurVision({data}) {
  return (
    <div className="bs-infography typ-quotes">
      <div className="info-wrap">
        <h3 className="title">our vision</h3>
        <ReactMarkdown className="desc rich-text" children={data.description} />
      </div>
    </div>
  )
}

export default OurVision