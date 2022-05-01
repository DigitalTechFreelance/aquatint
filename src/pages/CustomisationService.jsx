import React from 'react';
import axios from '../axios-common';
import Service from '../components/service/Customisation/Service';

function CustomisationService() {
    const [data, setData] = React.useState(null)

	React.useEffect(()=>{
		axios.get(`/api/customise-service?populate=*`)
		.then((res) => {
			setData(res.data.data.attributes)
		})
		.catch((error) => {
			// console.log("home error", error)
		})
	}, [])
    
    return (
		data!==null? (
            <main>
                <div className="lyt-content">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">CUSTOMISATION SERVICES</h2>
                        </div>
                        <Service data={data.features}/>
                    </div>
                </div>
            </main>
        ): null
    )
}

export default CustomisationService