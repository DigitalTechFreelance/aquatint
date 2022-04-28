

import React from 'react';
import TileGrid from './TileGrid';
import Grid from '@mui/material/Grid';

function Service({data}) {
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