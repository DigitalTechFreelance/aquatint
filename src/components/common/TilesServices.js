

import React from 'react';
import TileGrid from '../home/TileGrid';
import Grid from '@mui/material/Grid';
import Fade from 'react-reveal/Fade';

function Service({ data, title, page }) {
    return (
        <section>
            <div className={`bs-section ${page === 'ppf' ? 'typ-center' : ''}`}>
                <div className="cm-container">
                    <div className="sec-head">
                        <Fade bottom distance="20px" delay={500} duration={800}>
                            <h2 className={`sec-title ${page === 'ppf' ? 'anim-color' : ''}`}>{title}</h2>
                        </Fade>
                    </div>
                    <div className="sec-cont">
                        <Fade bottom distance="20px" delay={800} duration={800}>
                            <Grid container spacing={2} className={`lyt-tile-grid ${page === 'ppf' ? 'typ-tileof3' : ''}`}>
                                {data.map((item, index) => (
                                    item.isActive && <TileGrid data={item} page={page} dataLength={data.length} key={index} index={index} />
                                ))}
                            </Grid>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service