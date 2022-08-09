

import React from 'react';
import TileGrid from '../home/TileGrid';
import Grid from '@mui/material/Grid';

function Service({data}) {
    // console.log("data", data)
  return (
    <section>
        <div className="bs-section">
            <div className="cm-container">
                <div className="sec-head">
                    <h2 className="sec-title">Services We Offer</h2>
                </div>
                <div className="sec-cont">
                    <Grid container spacing={2} className="lyt-tile-grid">
                        {data.map((item, index)=>(
                            item.isActive && <TileGrid data={item} dataLength={data.length} key={index} index={index}/>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service