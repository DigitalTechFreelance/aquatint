

import React from 'react';
import TileGrid from '../home/TileGrid';
import Grid from '@mui/material/Grid';

function Service({data, title, page}) {
    // console.log("data", data)

  return (
    <section>
        <div className={`bs-section ${page === 'ppf'? 'typ-center': ''}`}>
            <div className="cm-container">
                <div className="sec-head">
                    <h2 className= {`sec-title ${page === 'ppf'? 'anim-color': ''}`}>{title}</h2>
                </div>
                <div className="sec-cont">
                    <Grid container spacing={2} className={`lyt-tile-grid ${page === 'ppf'? 'typ-tileof3': ''}`}>
                        {data.map((item, index)=>(
                            item.isActive && <TileGrid data={item} page={page} dataLength={data.length} key={index} index={index}/>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service