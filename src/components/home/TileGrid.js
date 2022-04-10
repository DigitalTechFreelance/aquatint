import React from 'react';
import Grid from '@mui/material/Grid';
// import washImg from '../../assets/images/offering-wash.webp';
// import detailImg from '../../assets/images/offering-detail.webp';
// import ceramicCoatingImg from '../../assets/images/offering-ceramic-coating.webp';
// import ppfImg from '../../assets/images/offering-ppf.webp';
// import customizeImg from '../../assets/images/offering-customize.webp'; 
import useSetBgImage from '../../hooks/useSetBgImage';

function TileGrid({data, index}) {

    useSetBgImage(".setBgSrc", ".getBgSrc");
  return (
    <>
            <Grid item xs={12} md={index>1?4:6} className="grid-item" key={index}>
                <div className={`bs-tile setBgSrc typ${index+1}`}>
                    <div className="img-wrap">
                        <img src={`http://localhost:1337${data.cardImage.data.attributes.url}`} alt={data.cardImage.data.attributes.alternativeText} title={data.cardImage.data.attributes.name} className="getBgSrc" />
                    </div>
                    <div className="text-wrap">
                        <h3 className="title">{data.name}</h3>
                    </div>
                    <a href={`/services/${data.slug}`} className="link"></a>
                </div>
            </Grid>
    </>  
    
  )
}

export default TileGrid