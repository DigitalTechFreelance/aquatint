import React from 'react';
import DetailingServiceTabs from '../components/service/DetailingServiceTabs';
// import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import axios from '../axios-common';
import { useParams} from "react-router-dom";

function DetailingServices({setActiveTab}) {
//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//     setTimeout(() => {
//       setLeadFormOpen(true);
//     }, 15000)
//   }, [])

//   const [leadFormOpen, setLeadFormOpen] = useState(false);
//   const handleLeadFormClose = () => setLeadFormOpen(false);
const [data, setData] = React.useState(null)
const { slug } = useParams();

  React.useEffect(()=>{
    axios.get(`/service-details?slug=${slug}`)
      .then((res) => {
          setData(res.data[0])
          // setLoader(false)
      })
      .catch((error) => {
          // console.log("home error", error)
      })
  },[])
  return (
    <>
      <main>
        <div className="lyt-content">
          <div className="cm-container">
          {data!== null && (
            <div className="lyt-single-page">
                <div className="sp-head">
                    <h2 className="sp-title">{data.name}</h2>
                </div>
                <div className="sp-cont">
                    <DetailingServiceTabs data={data.subServices} setActiveTab={(value) => setActiveTab(value)} page={slug}/>
                </div>
            </div>
            )}
          </div>
        </div>
      </main>
      {/* <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} /> */}
    </>
  )
}

export default DetailingServices