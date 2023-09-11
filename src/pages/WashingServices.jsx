import React from 'react';
import WashingService from '../components/service/WashingService';
import WashingServiceCompareList from '../components/service/WashingServiceCompareList';
import axios from '../axios-common';
import { useParams } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Flybutton from '../components/common/Flybutton';
import SEO from '../components/common/Seo';

function WashingServices(props) {
  const [data, setData] = React.useState(null)
  const { slug } = useParams();
  const [leadFormOpen, setLeadFormOpen] = React.useState(false);
  const handleLeadFormClose = () => setLeadFormOpen(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
        setLeadFormOpen(true);
    }, 15000)
    axios.get(`/service-details?slug=${slug}`)
      .then((res) => {
        setData(res.data[0])
        // setLoader(false)
      })
      .catch((error) => {
        // console.log("home error", error)
      })
  }, [slug])

  return (
    <>
      {props.globalData &&  <Header data={props.globalData} activeTab={props.activeTab} />} 
      <SEO data={data?.seo!==null? data?.seo: props.globalData}/>

      <main>
        <div className="lyt-content">
          <div className="cm-container">
            {data !== null && data.subServices[0].isActive && (
              <>
                <div className="lyt-single-page">
                  <Fade bottom distance="20px" delay={500} duration={800}>
                    <div className="sp-head">
                      <h2 className="sp-title">{data.name}</h2>
                    </div>
                  </Fade>
                  {data.subServices[0].featureService !== null && (
                    <div className="sp-cont">
                      <WashingService data={data.subServices[0].featureService} page={slug} />
                    </div>
                  )}
                </div>
                {data.subServices[0].compareServices !== null && (
                  <section>
                    <div className="bs-section typ-center">
                      <div className="sec-head">
                        <Fade bottom distance="20px" delay={500} duration={800}>
                          <h2 className="sec-title">Compare Services</h2>
                        </Fade>
                      </div>
                      <div className="sec-cont">
                        <WashingServiceCompareList data={data.subServices[0].compareServices} />
                      </div>
                    </div>
                  </section>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />
      {props.globalData && (
          <> 
            <Footer data={props.globalData} />
            <Flybutton />
          </>) }
    </>
  )
}

export default WashingServices