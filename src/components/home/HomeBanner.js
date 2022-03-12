import React from 'react';
import bannerImgDesktop from '../../assets/images/home-banner.webp';
import bannerImgTablet from '../../assets/images/home-banner.webp';
import bannerImgMobile from '../../assets/images/home-banner.webp';
import useSetBgImage from '../../hooks/useSetBgImage';

function HomeBanner() {

  useSetBgImage(".setBgSrc", ".getBgSrc");

  return (
    <div className="bs-banner">
        <div className="banner-image-wrap setBgSrc">
            <picture>
                <source media="(min-width: 1025px)" srcSet={bannerImgDesktop} />
                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={bannerImgTablet} />
                <source media="(max-width: 767px)" srcSet={bannerImgMobile} />
                <img className="getBgSrc" src=""
                    alt="growth banner image" title="growth banner image" />
            </picture>
        </div>
        <div className="banner-info">
            <h2 className="banner-title">welcome to aquatint auto detailing</h2>
        </div>
    </div>
  )
}

export default HomeBanner