import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PackageList from '../components/packages/PackageList';

function Packages() {
    React.useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <>
        <Header/>
            <main>
                <div className="lyt-content">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">premium packages</h2>
                        </div>
                        <div className="sp-cont">
                            <PackageList/>
                        </div>
                    </div>
                </div>
            </main>
        <Footer/>
    </>
  )
}

export default Packages