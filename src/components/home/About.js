import React from 'react';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';

function About({ data }) {

  const { description } = data

  return (
    <section>
      <div className="bs-section cm-no-pad-top cm-no-pad-bottom">
        <div className="sec-cont">

          <div className="bs-band typ-gradiant">
            <Fade bottom distance="20px" delay={500} duration={800}>
              <ReactMarkdown className="text-wrap rich-text" children={description} />
            </Fade>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About;
