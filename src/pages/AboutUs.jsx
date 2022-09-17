import React from 'react';
import Infogarphy from '../components/aboutUs/Infogarphy';
import Team from '../components/aboutUs/Team';
import OurVision from '../components/aboutUs/OurVision';
import axios from '../axios-common';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';


function AboutUs() {


  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    axios.get(`/about-us`)
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  const { title, teamsSection, aboutInfo, ourVisionSection, whatWeDoSection } = data !== null && data
  return (
    data && data !== null ?
      <>
			{data.seo !== null && <SEO data={data?.seo}/>}
        <main>
          <div className="lyt-content pg-about">
            <div className="lyt-single-page">
              <div className="sp-head">
                <h2 className="sp-title">{title}</h2>
                <ReactMarkdown className="sp-desc rich-text" children={aboutInfo} />
              </div>
              <div className="sp-cont cm-container">
                <section>
                  <div className="bs-section typ-infography cm-paddtop-30">
                    <div className="sec-cont">
                      {whatWeDoSection !== undefined ? whatWeDoSection.isActive && <Infogarphy data={whatWeDoSection} /> : null}
                    </div>
                  </div>
                </section>
                <section>
                  <div className="bs-section typ-center">
                    <div className="sec-head">
                      <h2 className="sec-title typ-lg">our team</h2>
                    </div>
                    <div className="sec-cont">
                      <Team data={teamsSection} />
                    </div>
                  </div>
                </section>
                <section>
                  <div className="bs-section">
                    <div className="sec-cont">
                      {ourVisionSection !== undefined ? ourVisionSection.isActive && <OurVision data={ourVisionSection} /> : null}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </>
      : <Loader />
  )
}

export default AboutUs