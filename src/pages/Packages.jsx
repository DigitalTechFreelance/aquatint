import React, {useState} from 'react';
import PackageList from '../components/packages/PackageList';
// import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import axios from '../axios-common';

function Packages() {
    // React.useEffect(()=>{
    //     window.scrollTo(0, 0);
	// 	setTimeout(()=>{
	// 		setLeadFormOpen(true);
	// 	},15000)
    // },[])

	// const [leadFormOpen, setLeadFormOpen] = useState(false);
    // const handleLeadFormClose = () => setLeadFormOpen(false);
    const [data, setData] = useState(null)

	React.useEffect(()=>{
		axios.get(`/package`)
		.then((res) => {
			// console.log("home res", res)
			setData(res.data)
			// setLoader(false)
		})
		.catch((error) => {
			// console.log("home error", error)
		})
	},[])
    console.log("packages res", data)

  return (
    <>
        {data !== null && (
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">premium packages</h2>
                    </div>
                    <div className="sp-cont">
                        <PackageList data={data.packagesType}/>
                    </div>
                </div>
            </div>
        </main>
        )}
          
		{/* <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen}/> */}
    </>
  )
}

export default Packages