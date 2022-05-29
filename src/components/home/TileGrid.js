import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import washImg from '../../assets/images/offering-wash1.gif';
import detailImg from '../../assets/images/offering-detail1.gif';
import ceramicCoatingImg from '../../assets/images/offering-ceramic-coating1.gif';
import ppfImg from '../../assets/images/offering-ppf.gif';
import customizeImg from '../../assets/images/offering-customize.webp'; 

/*react player import */
import ReactPlayer from 'react-player';

function TileGrid() {

    const [autoPlay, setAutoPlay] = useState(false);

    useEffect(() => {
        setAutoPlay(true)
    }, [autoPlay]);

  return (
    <>
        <Grid container spacing={2} className="lyt-tile-grid">
            <Grid item xs={12} md={6} className="grid-item">
                <div className="bs-tile typ1">
                    <div className="img-wrap">
                        {/* <img src={washImg} alt="Wash Service" title="wash Service" className="getBgSrc" /> */}
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=8k41mZZY2tQ' 
                            loop={true}
                            width="100%"
                            height="40.8rem"
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">wash</h3>
                    </div>
                    <a href="/washing-services" className="link"></a>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className="grid-item">
                <div className="bs-tile typ2">
                    <div className="img-wrap">
                        {/* <img src={detailImg} alt="Detail Service" title="Detail Service" className="getBgSrc"/> */}
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=Cdd_amqSFAg' 
                            loop={true}
                            width="100%"
                            height="40.8rem"
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">detail</h3>
                    </div>
                    <a href="/detailing-services" className="link"></a>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ3">
                    <div className="img-wrap">
                        {/* <img src={ceramicCoatingImg} alt="Ceramic Coating" title="Ceramic Coating" className="getBgSrc"/> */}
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=CXWX0U3EXqk' 
                            loop={true}
                            width="100%"
                            height="40.8rem"
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">ceramic coating</h3>
                    </div>
                    <a href="/ceramic-coating" className="link"></a>
                </div>
                
            </Grid>
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ4">
                    <div className="img-wrap">
                        {/* <img src={ppfImg} alt="Paint Protection Film" title="Paint Protection Film" className="getBgSrc"/> */}
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=8BqXWxXRS4E' 
                            loop={true}
                            width="100%"
                            height="40.8rem"
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">paint protection film</h3>
                    </div>
                    <a href="/paint-protection-film" className="link"></a>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ5">
                    <div className="img-wrap">
                        {/* <img src={customizeImg} alt="Customise" title="Customise" className="getBgSrc"/> */}
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=9sBozUaYajE' 
                            loop={true}
                            width="100%"
                            height="40.8rem"
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
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