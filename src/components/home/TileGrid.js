import React from 'react';
import Grid from '@mui/material/Grid';
// import washImg from '../../assets/images/offering-wash1.gif';
// import detailImg from '../../assets/images/offering-detail1.gif';
// import ceramicCoatingImg from '../../assets/images/offering-ceramic-coating1.gif';
// import ppfImg from '../../assets/images/offering-ppf.webp';
// import customizeImg from '../../assets/images/offering-customize.webp'; 
import useSetBgImage from '../../hooks/useSetBgImage';

function TileGrid({data, index,dataLength}) {

    useSetBgImage(".setBgSrc", ".getBgSrc");
  return (
    <>
            <Grid item xs={12} md={dataLength % 2 === 0? 6: index>1?4:6} className="grid-item" key={index}>
                <div className={`bs-tile setBgSrc typ${index+1}`}>
                    {data.cardImage!== null && 
                    <div className="img-wrap">
                    <img src={`http://localhost:1337${data.cardImage.data.attributes.url}`} alt={data.cardImage.data.attributes.alternativeText} title={data.cardImage.data.attributes.name} className="getBgSrc" />
                    </div>}
                    <div className="text-wrap">
                        <h3 className="title">{data.name}</h3>
                    </div>
                    <a href={data.redirectUrl.includes('coat')? `/coatings${data.redirectUrl}`: `/services${data.redirectUrl}`} className="link"/>
                </div>
            </Grid>
    </>  
    
  )
}

export default TileGrid
