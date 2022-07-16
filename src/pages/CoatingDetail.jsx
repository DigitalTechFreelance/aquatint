import React from 'react';
import Infogarphy from '../components/coatings/Infogarphy';
import axios from '../axios-common';
import { useParams} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import Benefits from '../components/coatings/Benefits';
import VideoSection from '../components/coatings/VideoSection';
import Features from '../components/coatings/Features';
import PackagesYearly from '../components/coatings/PackagesYearly';
import Proccess from '../components/coatings/Proccess';

function CoatingDetail() {
   
    
    const [data, setData] = React.useState(null)
    const { slug } = useParams();

	React.useEffect(()=>{
		axios.get(`/api/coatings?filters[slug][$eq]=${slug}`)
		.then((res) => {
			setData(res.data.data[0].attributes)
		})
		.catch((error) => {
			// console.log("home error", error)
		})
	}, [])

  return (
      data !== null ? (
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page typ-2">
                    <div className="sp-head">
                        <h2 className="sp-title">{data.name}</h2>
                        <ReactMarkdown className="sp-desc rich-text" children={data.description} />
                    </div>
                    <div className="sp-cont">
                        {data.infography !== null && data.infography.isActive && <Infogarphy data={data.infography}/>}
                        {data.benefits !== null && data.benefits.isActive && <Benefits data={data.benefits}/>}
                        {data.videoUpload !== null && <VideoSection data={data.videoUpload.data.attributes}/>}
                        {data.features !== null && data.features.isActive && <Features data={data.features}/>}
                        {data.servicesPackages !== null && data.servicesPackages.isActive && <PackagesYearly data={data.servicesPackages}/>}
                        {data.premiumPackages !== null && data.premiumPackages.isActive && <PackagesYearly data={data.premiumPackages}/>}
                        {data.process !== null && data.process.isActive && <Proccess data={data.process}/>}
                    </div>
                </div>
            </div>
        </main>
      ): null
  )
}

export default CoatingDetail