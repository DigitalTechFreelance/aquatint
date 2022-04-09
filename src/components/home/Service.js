

import React from 'react';
import TileGrid from './TileGrid';
import Grid from '@mui/material/Grid';

function Service({data}) {
    const [serviceData, setServiceData] = React.useState(null)
	const [error, setError] = React.useState(null)

    // React.useEffect(()=>{
	// 	axios.get(`api/home?populate=*`)
	// 	.then((res) => {
	// 		// console.log("result",res)
	// 		setServiceData(res.data.data.attributes)
	// 	})
	// 	.catch((error) => {
	// 		setError(error)
	// 		console.log("Room list error", error)
	// 	})
	// }, [])
console.log("service data", serviceData)
  return (
    <section>
        <div className="bs-section">
            <div className="cm-container">
                <div className="sec-head">
                    <h2 className="sec-title">Services We Offer</h2>
                </div>
                <div className="sec-cont">
                    <Grid container spacing={2} className="lyt-tile-grid">
                        <TileGrid/>
                    </Grid>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service