import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Infogarphy from '../components/aboutUs/Infogarphy';
import Team from '../components/aboutUs/Team';
import OurVision from '../components/aboutUs/OurVision';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';

function AboutUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLeadFormOpen(true);
    }, 15000)
  }, [])

  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const handleLeadFormClose = () => setLeadFormOpen(false);
  return (
    <>
      <Header />
      <main>
        <div className="lyt-content pg-about">
          <div className="lyt-single-page">
            <div className="sp-head">
              <h2 className="sp-title">who we are</h2>
              <div className="sp-desc">
                <p>Aquatint is the brainchild of three auto enthusiasts, Lallett, Nikhil and Tejas. They are technically sound and have started their careers with ‘Customer Services’ department of a multinational premium car maker. Their experience in the field has imparted an awareness about the customer needs and expectations enabling us to build a premium service and a memorable experience for you.</p>
              </div>
            </div>
            <div className="sp-cont cm-container">
              <section>
                <div className="bs-section typ-infography cm-paddtop-30">
                  <div className="sec-cont">
                    <Infogarphy />
                  </div>
                </div>
              </section>
              <section>
                <div className="bs-section typ-center">
                  <div className="sec-head">
                    <h2 className="sec-title typ-lg">our team</h2>
                  </div>
                  <div className="sec-cont">
                    <Team />
                  </div>
                </div>
              </section>
              <section>
                <div className="bs-section">
                  <div className="sec-cont">
                    <OurVision />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />

    </>
  )
}

export default AboutUs