import React from 'react';
import WashingService from '../components/service/WashingService';
import WashingServiceCompareList from '../components/service/WashingServiceCompareList';
import axios from '../axios-common';
import { useParams } from "react-router-dom";
import Fade from 'react-reveal/Fade';

function WashingServices() {
  const [data, setData] = React.useState(null)
  const { slug } = useParams();

  React.useEffect(() => {
    axios.get(`/service-details?slug=${slug}`)
      .then((res) => {
        // console.log("home res", res)
        setData(res.data[0])
        // setLoader(false)
      })
      .catch((error) => {
        // console.log("home error", error)
      })
  }, [])
  return (
    <>
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
    </>
  )
}

export default WashingServices