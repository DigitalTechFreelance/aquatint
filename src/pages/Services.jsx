import React from 'react';
import ServiceList from '../components/service/ServiceList';

function Services() {
  return (
    <>
            <main>
                <div className="lyt-content">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">services</h2>
                        </div>
                        <div className="sp-cont">
                            <ServiceList/>
                        </div>
                    </div>
                </div>
            </main>
    </>
  )
}

export default Services