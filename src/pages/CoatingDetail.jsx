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

function CoatingDetail() {


    const [data, setData] = React.useState(null)
    const { slug } = useParams();

    React.useEffect(() => {
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
                            <div className="sp-head">
                                <h2 className="sp-title">{data.name}</h2>
                                <ReactMarkdown className="sp-desc rich-text" children={data.description} />
                            </div>
                            <div className="sp-cont">
                                {data.infography !== null && data.infography.isActive && <Infogarphy data={data.infography} />}
                                {data.benefits !== null && data.benefits.isActive && <Benefits data={data.benefits} />}
                                {data.videoSection !== null && data.videoSection.isActive && <VideoSection data={data.videoSection} />}
                                {data.features !== null && data.features.isActive && <Features data={data.features} />}
                                {data.servicesPackages !== null && data.servicesPackages.isActive && <PackagesYearly data={data.servicesPackages} />}
                                {data.premiumPackages !== null && data.premiumPackages.isActive && <PackagesYearly data={data.premiumPackages} />}
                                {data.process !== null && data.process.isActive && <Proccess data={data.process} />}
                            </div>
                        </div>
                    </div>
                </main>
            </>
        ) : <Loader />
    )
}

export default CoatingDetail