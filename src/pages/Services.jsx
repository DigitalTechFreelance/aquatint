import React from 'react';
import ServiceList from '../components/service/ServiceList';
import axios from '../axios-common';

function Services() {
    
	const [data, setData] = React.useState(null)
	const [error, setError] = React.useState(null)

	React.useEffect(()=>{
		axios.get(`/api/service?populate=*`)
		.then((res) => {
			setData(res.data.data.attributes)
		})
		.catch((error) => {
			setError(error)
			// console.log("home error", error)
		})
	}, [])
const {serviceType} = data!==null && data
  return (
    <>
            <main>
                <div className="lyt-content">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">services</h2>
                        </div>
                        <div className="sp-cont">
                            <ServiceList data={serviceType}/>
                        </div>
                    </div>
                </div>
            </main>
    </>
  )
}

export default Services