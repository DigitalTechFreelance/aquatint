import React from 'react';
import Infogarphy from '../components/packages/Infogarphy';
import axios from '../axios-common';
import { useParams} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import Warranty from '../components/packages/Warranty';
import Protection from '../components/packages/Protection';

function PackageDetail() {
    const [data, setData] = React.useState(null)
    const { slug } = useParams();

	React.useEffect(()=>{
		axios.get(`/api/packages?filters[slug][$eq]=${slug}`)
		.then((res) => {
            console.log("res", res)
			setData(res.data.data[0].attributes)
		})
		.catch((error) => {
			// console.log("home error", error)
		})
	}, [])
    
    const packageName = data !== null && data.packageName.split(' ')
  return (
    data!==null ? (
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">{packageName[0]} <span className="cm-line-break">{packageName[1]}</span></h2>
                        <ReactMarkdown className="sp-desc rich-text" children={data.description} />
                    </div>
                    <div className="sp-cont">
                        {data.coatingFeatures.isActive && <Infogarphy data={data.coatingFeatures} />}
                       <Warranty data={data.yearsWarranty}/>
                       <Protection data={data.protectionVideoSection}/>
                    </div>
                </div>
            </div>
        </main>
    ): null
  )
}

export default PackageDetail