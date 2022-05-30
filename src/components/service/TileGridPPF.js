import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import useSetBgImage from '../../hooks/useSetBgImage';
import ReactPlayer from 'react-player';

function TileGridPPF() {
    const [autoPlay, setAutoPlay] = useState(false);

    useSetBgImage(".setBgSrc", ".getBgSrc");
    useEffect(() => {
        setAutoPlay(true)
    }, [autoPlay]);

  return (
    <>
        <Grid container spacing={2} className="lyt-tile-grid typ-tileof3">
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ3">
                    <div className="img-wrap">
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=8k41mZZY2tQ' 
                            loop={true}
                            width="100%"
                            height={window.innerWidth>=767 ? "40.8rem" : "auto" }
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">200 Micron Thickness</h3>
                    </div>
                    <a href="#" className="link"></a>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ4">
                    <div className="img-wrap">
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=8k41mZZY2tQ' 
                            loop={true}
                            width="100%"
                            height={window.innerWidth>=767 ? "40.8rem" : "auto" }
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">Scratchproof</h3>
                    </div>
                    <a href="#" className="link"></a>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ5">
                    <div className="img-wrap">
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=j_GmoXQTB2c' 
                            loop={true}
                            width="100%"
                            height={window.innerWidth>=767 ? "40.8rem" : "auto" }
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">High Gloss</h3>
                    </div>
                </div>
            </Grid> 
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ3">
                    <div className="img-wrap">
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=biYnXvwlqVM' 
                            loop={true}
                            width="100%"
                            height={window.innerWidth>=767 ? "40.8rem" : "auto" }
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">Water Repellent</h3>
                    </div>
                </div>
                
            </Grid>
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ4">
                    <div className="img-wrap">
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=R-PQLRLjFco' 
                            loop={true}
                            width="100%"
                            height={window.innerWidth>=767 ? "40.8rem" : "auto" }
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">Self Healing</h3>
                    </div>
                    <a href="#" className="link"></a>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="grid-item">
                <div className="bs-tile typ5">
                    <div className="img-wrap">
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=8k41mZZY2tQ' 
                            loop={true}
                            width="100%"
                            height={window.innerWidth>=767 ? "40.8rem" : "auto" }
                            playing={autoPlay}
                            muted={true}
                            className="mod-gif"
                        />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">Various Life Scratchs</h3>
                    </div>
                    <a href="#" className="link"></a>
                </div>
            </Grid>
        </Grid>
    </>  
    
  )
}

export default TileGridPPF