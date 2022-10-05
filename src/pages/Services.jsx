import React from 'react';
import ServiceList from '../components/service/ServiceList';
import axios from '../axios-common';
import Fade from 'react-reveal/Fade';

function Services() {

    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        axios.get(`/service`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
            })
    }, [])
    const { serviceType } = data !== null && data
    return (
        <>
            <main>
                <div className="lyt-content">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <Fade bottom distance="20px" delay={500} duration={800}>
                                <h2 className="sp-title">services</h2>
                            </Fade>
                        </div>
                        <div className="sp-cont">
                            <ServiceList data={serviceType} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Services