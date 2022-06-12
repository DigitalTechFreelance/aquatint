import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
// import VideoPlayer from '../common/VideoPlayer';
import useSetBgImage from '../../hooks/useSetBgImage';
import washImg from '../../assets/images/offering-wash1.gif';
import detailImg from '../../assets/images/offering-detail1.gif';
import ceramicCoatingImg from '../../assets/images/offering-ceramic-coating1.gif';
import ppfImg from '../../assets/images/offering-ppf.gif';
import customizeImg from '../../assets/images/offering-customize.gif';


function TileGrid() {
    useSetBgImage(".setBgSrc", ".getBgSrc");
    const [autoPlay, setAutoPlay] = useState(false);

    useEffect(() => {
        setAutoPlay(true)
    }, [autoPlay]);

    return (
        <>
            <Grid container spacing={2} className="lyt-tile-grid">
                <Grid item xs={12} md={6} className="grid-item">
                    <div className="bs-tile typ1 setBgSrc">
                        <div className="img-wrap">
                            <img src={washImg} alt="Wash Service" title="wash Service" className="getBgSrc" />
                        </div>
                        <div className="text-wrap">
                            <h3 className="title">wash</h3>
                        </div>
                        <a href="/washing-services" className="link"></a>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className="grid-item">
                    <div className="bs-tile typ2 setBgSrc">
                        <div className="img-wrap">
                            <img src={detailImg} alt="Detail Service" title="Detail Service" className="getBgSrc" />
                        </div>
                        <div className="text-wrap">
                            <h3 className="title">detail</h3>
                        </div>
                        <a href="/detailing-services" className="link"></a>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className="grid-item">
                    <div className="bs-tile typ3 setBgSrc">
                        <div className="img-wrap">
                            <img src={ceramicCoatingImg} alt="Ceramic Coating" title="Ceramic Coating" className="getBgSrc" />
                        </div>
                        <div className="text-wrap">
                            <h3 className="title">ceramic coating</h3>
                        </div>
                        <a href="/ceramic-coating" className="link"></a>
                    </div>

                </Grid>
                <Grid item xs={12} md={4} className="grid-item">
                    <div className="bs-tile typ4 setBgSrc">
                        <div className="img-wrap">
                            <img src={ppfImg} alt="Paint Protection Film" title="Paint Protection Film" className="getBgSrc" />
                        </div>
                        <div className="text-wrap">
                            <h3 className="title">paint protection film</h3>
                        </div>
                        <a href="/paint-protection-film" className="link"></a>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className="grid-item">
                    <div className="bs-tile typ5 setBgSrc">
                        <div className="img-wrap">
                            <img src={customizeImg} alt="Customise" title="Customise" className="getBgSrc" />
                        </div>
                        <div className="text-wrap">
                            <h3 className="title">cutomise</h3>
                        </div>
                        <a href="/customisation-service" className="link"></a>
                    </div>
                </Grid>
            </Grid>
        </>

    )
}

export default TileGrid