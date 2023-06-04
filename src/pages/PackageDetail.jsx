import React from 'react';
import Infogarphy from '../components/packages/Infogarphy';
import axios from '../axios-common';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import Warranty from '../components/packages/Warranty';
import Protection from '../components/packages/Protection';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Flybutton from '../components/common/Flybutton';

function PackageDetail(props) {
    const [data, setData] = React.useState(null)
    const { slug } = useParams();
    const [leadFormOpen, setLeadFormOpen] = React.useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLeadFormOpen(true);
        }, 15000)
        axios.get(`/packages?slug=${slug}`)
            .then((res) => {
                setData(res.data[0])
            })
            .catch((error) => {
                // console.log("home error", error)
            })
    }, [slug])
    const packageName = data !== null && data.packageName.split(' ')
    return (
        data !== null ? (
            <>
      {props.globalData &&  <Header data={props.globalData} activeTab={props.activeTab} />} 

                 <SEO data={data?.seo!==null? data?.seo: props.globalData}  />

                <main>
                    <div className="lyt-content">
                        <div className="lyt-single-page">
                            <div className="sp-head">
                                <h2 className="sp-title">{packageName[0]} <span className="cm-line-break">{packageName[1]}</span></h2>
                                <ReactMarkdown className="sp-desc rich-text" children={data.description} />
                            </div>
                            <div className="sp-cont">
                                {data.coatingFeatures.isActive && <Infogarphy data={data.coatingFeatures} />}
                                {data.yearsWarranty !== null && <Warranty data={data.yearsWarranty} />}
                                {data.protectionVideoSection !== null && data.protectionVideoSection.isActive && <Protection data={data.protectionVideoSection} />}
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

export default PackageDetail