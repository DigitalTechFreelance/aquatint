import React, { useState } from 'react';
import PackageList from '../components/packages/PackageList';
// import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import axios from '../axios-common';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Flybutton from '../components/common/Flybutton';

function Packages(props) {

    const [leadFormOpen, setLeadFormOpen] = useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);
    const [data, setData] = useState(null)

    React.useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLeadFormOpen(true);
        }, 15000)

        axios.get(`/package`)
            .then((res) => {
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
      {props.globalData &&  <Header data={props.globalData} activeTab={props.activeTab} />} 

<SEO data={data?.seo!==null? data?.seo: props.globalData} />

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

                <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />
                {props.globalData && (
          <> 
            <Footer data={props.globalData} />
            <Flybutton />
          </>) }
            </>
        ) : <Loader />
    )
}

export default Packages