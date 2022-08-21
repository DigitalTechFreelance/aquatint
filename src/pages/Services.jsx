import React from 'react';
import ServiceList from '../components/service/ServiceList';
import axios from '../axios-common';

function Services() {
    
	const [data, setData] = React.useState(null)

	React.useEffect(()=>{
		axios.get(`/service`)
		.then((res) => {
			setData(res.data)
		})
		.catch((error) => {
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