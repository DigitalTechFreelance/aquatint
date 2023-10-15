import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import useSetBgImage from '../../hooks/useSetBgImage';
import VideoPlayer from '../common/VideoPlayer';

function TileGrid({ data, index, dataLength, page }) {
    const [autoPlay, setAutoPlay] = useState(false);

    useSetBgImage(".setBgSrc", ".getBgSrc");
    useEffect(() => {
        setAutoPlay(true)
    }, [autoPlay]);
    function gtag_report_conversion(url) {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    }
    
    const onClickEvent = (url)=>{
        const isBrowser = typeof window !== "undefined"
        if (isBrowser) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-929250397/VGh-CJma6OsYEN34jLsD',
                'event_callback': gtag_report_conversion(url)
            });
      }
    }
    return (
        <>
            <Grid item xs={12} md={dataLength % 2 === 0 ? 4 : index > 1 ? 4 : 6} className="grid-item" key={index}>
                <div className={`bs-tile ${data?.cardImage !== null ? 'setBgSrc' : ''} typ${index + 1}`}>
                    {page === "home" && data?.cardImage !== null &&
                        <div className="img-wrap">
                            <img src={data.cardImage.url} alt={data.cardImage.alternativeText} title={data.cardImage.name} className="getBgSrc" />
                        </div>
                    }
                    {page === "ppf" && data && data?.youtubeLink !== null && (
                        <div className="img-wrap">
                            <VideoPlayer
                                buttonClose={false}
                                srcUrl={JSON.parse(data?.youtubeLink)?.url}
                                muted={true}
                                autoPlay={true}
                                className="mod-gif"
                                height={window.innerWidth >= 767 ? "40.8rem" : "auto"}
                                loop={true}
                            />
                        </div>
                    )}

                    <div className="text-wrap">
                        <h3 className="title">{data.name}</h3>
                    </div>
                    <a href={data?.redirectUrl?.includes('coat') ? `/coatings${data.redirectUrl}` : `/services${data.redirectUrl}`} className="link" rel="noreferrer" onClick={()=> onClickEvent(data?.redirectUrl?.includes('coat') ? `/coatings${data.redirectUrl}` : `/services${data.redirectUrl}`)} />
                </div>
            </Grid>
        </>

    )
}

export default TileGrid;
