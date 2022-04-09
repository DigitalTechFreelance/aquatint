import React from 'react';
import ReactMarkdown from 'react-markdown';

function About({data}) {

  const {description} = data
  
  return (
    <section>
        <div className="bs-section cm-no-pad-top cm-no-pad-bottom">
            <div className="sec-cont">
                <div className="bs-band typ-gradiant">
                    <ReactMarkdown className="text-wrap rich-text" children={description} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About