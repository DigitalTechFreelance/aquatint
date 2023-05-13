import React from 'react';
import DetailingServiceTabs from '../components/service/DetailingServiceTabs';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import axios from '../axios-common';
import { useParams } from "react-router-dom";
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Flybutton from '../components/common/Flybutton';

function DetailingServices({ setActiveTab, globalData, activeTab }) {

  const [leadFormOpen, setLeadFormOpen] = React.useState(false);
  const handleLeadFormClose = () => setLeadFormOpen(false);
  const [data, setData] = React.useState(null)
  const { slug } = useParams();

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
    data !== null ? (
      <>
      {globalData &&  <Header data={globalData} activeTab={activeTab} />} 

        <SEO data={data?.seo!==null? data?.seo: globalData} />

        <main>
          <div className="lyt-content">
            <div className="cm-container">

              <div className="lyt-single-page">
                <Fade bottom distance="20px" delay={500} duration={800}>
                  <div className="sp-head">
                    <h2 className="sp-title">{data.name}</h2>
                  </div>
                </Fade>
                <div className="sp-cont">
                  <DetailingServiceTabs data={data.subServices} setActiveTab={(value) => setActiveTab(value)} page={slug} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />
        {globalData && (
          <> 
            <Footer data={globalData} />
            <Flybutton />
          </>) }
      </>
    ) : <Loader />
  )
}

export default DetailingServices