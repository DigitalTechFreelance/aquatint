import React from 'react';
import DetailingServiceTabs from '../components/service/DetailingServiceTabs';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import axios from '../axios-common';
import { useParams } from "react-router-dom";
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';

function DetailingServices({ setActiveTab }) {

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
  }, [])
  return (
    data !== null ? (
      <>
        {data.seo !== null && <SEO data={data?.seo} />}

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
      </>
    ) : <Loader />
  )
}

export default DetailingServices