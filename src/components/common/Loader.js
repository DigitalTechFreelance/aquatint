import React from 'react';
import loader from '../../assets/images/loader-img.gif';

function Loader() {
  return (
    <div className='wrapper-loader'>
     <img src={loader} alt="Tejas Ingle" title="Tejas Ingle" height="100%" width="100%" />
    </div>
  )
}

export default Loader;