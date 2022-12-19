import React from 'react';
import Infogarphy from '../components/aboutUs/Infogarphy';
import Team from '../components/aboutUs/Team';
import OurVision from '../components/aboutUs/OurVision';
import axios from '../axios-common';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';


function AboutUs() {


  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)

  const [leadFormOpen, setLeadFormOpen] = React.useState(false);
  const handleLeadFormClose = () => setLeadFormOpen(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLeadFormOpen(true);
    }, 15000)
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
        {data.seo !== null && <SEO data={data?.seo} />}
        <main>
          <div className="lyt-content pg-about">
            <div className="lyt-single-page">
              <Fade bottom distance="20px" delay={500} duration={800}>
                <div className="sp-head">
                  <h2 className="sp-title">{title}</h2>
                  <ReactMarkdown className="sp-desc rich-text" children={aboutInfo} />
                </div>
              </Fade>
              <div className="sp-cont cm-container">
                <section>
                  <div className="bs-section typ-infography cm-paddtop-40">
                    <div className="sec-cont">
                      {whatWeDoSection !== undefined ? whatWeDoSection.isActive && <Infogarphy data={whatWeDoSection} /> : null}
                    </div>
                  </div>
                </section>
                <section>
                  <div className="bs-section typ-center">
                    <div className="sec-head">
                      <Fade bottom distance="20px" delay={500} duration={800}>
                        <h2 className="sec-title typ-lg">our team</h2>
                      </Fade>
                    </div>
                    <div className="sec-cont">
                      <Team data={teamsSection} />
                    </div>
                  </div>
                </section>
                <section>
                  <div className="bs-section">
                    <div className="sec-cont">
                      <Fade bottom distance="20px" delay={500} duration={800}>
                        {ourVisionSection !== undefined ? ourVisionSection.isActive && <OurVision data={ourVisionSection} /> : null}
                      </Fade>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />

      </>
      : <Loader />
  )
}

export default AboutUs