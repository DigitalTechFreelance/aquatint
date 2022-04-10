

import React from 'react';
import TileGrid from './TileGrid';
import Grid from '@mui/material/Grid';
import axios from '../../axios-common';

function Service({data}) {
    const [serviceData, setServiceData] = React.useState(null)
	const [error, setError] = React.useState(null)

    React.useEffect(()=>{
		axios.get(`api/service-details?populate=*`)
		.then((res) => {
			setServiceData(res.data.data)
		})
		.catch((error) => {
			setError(error)
			console.log("service error", error)
		})
	}, [])

  return (
    <section>
        <div className="bs-section">
            <div className="cm-container">
                <div className="sec-head">
                    <h2 className="sec-title">Services We Offer</h2>
                </div>
                <div className="sec-cont">
                    <Grid container spacing={2} className="lyt-tile-grid">
                        {serviceData!==null && serviceData.map((item, index)=>(
                            item.attributes.isActive && <TileGrid data={item.attributes} key={index} index={index}/>
                        ))}
                       
                    </Grid>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service