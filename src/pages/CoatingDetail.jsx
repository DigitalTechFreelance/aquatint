import React from 'react';
import Infogarphy from '../components/coatings/Infogarphy';
import axios from '../axios-common';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import Benefits from '../components/coatings/Benefits';
import VideoSection from '../components/coatings/VideoSection';
import Features from '../components/coatings/Features';
import PackagesYearly from '../components/coatings/PackagesYearly';
import Proccess from '../components/coatings/Proccess';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';

function CoatingDetail() {


    const [data, setData] = React.useState(null)
    const { slug } = useParams();

    const [leadFormOpen, setLeadFormOpen] = React.useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLeadFormOpen(true);
        }, 15000)
        axios.get(`/coatings?slug=${slug}`)
            .then((res) => {
                setData(res.data[0])
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
                        <div className="lyt-single-page typ-2">
                            <Fade bottom distance="20px" delay={500} duration={800}>
                                <div className="sp-head">
                                    <h2 className="sp-title">{data.name}</h2>
                                    <ReactMarkdown className="sp-desc rich-text" children={data.description} />
                                </div>
                            </Fade>
                            <div className="sp-cont">
                                {data.infography !== null && data.infography.isActive && <Infogarphy data={data.infography} />}
                                {data.benefits !== null && data.benefits.isActive && <Fade bottom distance="20px" delay={800} duration={800}><Benefits data={data.benefits} /></Fade>}
                                {data.videoSection !== null && data.videoSection.isActive && <Fade bottom distance="20px" delay={800} duration={800}><VideoSection data={data.videoSection} /></Fade>}
                                {data.features !== null && data.features.isActive && <Features data={data.features} />}
                                {data.servicesPackages !== null && data.servicesPackages.isActive && <PackagesYearly data={data.servicesPackages} />}
                                {data.premiumPackages !== null && data.premiumPackages.isActive && <PackagesYearly data={data.premiumPackages} />}
                                {data.process !== null && data.process.isActive && <Proccess data={data.process} />}
                            </div>
                        </div>
                    </div>
                </main>
            <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />

            </>
        ) : <Loader />
    )
}

export default CoatingDetail