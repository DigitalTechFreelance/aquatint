import React, { useState } from 'react';
import PackageList from '../components/packages/PackageList';
// import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import axios from '../axios-common';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';

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

    React.useEffect(() => {
        axios.get(`/package`)
            .then((res) => {
                // console.log("home res", res)
                setData(res.data)
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
                        <div className="lyt-single-page">
                            <div className="sp-head">
                                <Fade bottom distance="20px" delay={500} duration={800}>
                                    <h2 className="sp-title">premium packages</h2>
                                </Fade>
                            </div>
                            <div className="sp-cont">
                                <PackageList data={data.packagesType} />
                            </div>
                        </div>
                    </div>
                </main>

                {/* <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen}/> */}
            </>
        ) : <Loader />
    )
}

export default Packages