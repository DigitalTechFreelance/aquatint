import React from 'react';
import DetailingServiceTabs from '../components/service/DetailingServiceTabs';

function DetailingServices() {
  return (
    <>
        <main>
            <div className="lyt-content">
                <div className="cm-container">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">Detailing Services</h2>
                        </div>
                        <div className="sp-cont">
                            <DetailingServiceTabs/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default DetailingServices