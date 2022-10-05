import React from 'react';
import axios from '../axios-common';
import Service from '../components/service/Customisation/Service';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';

function CustomisationService() {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        axios.get(`/customise-service`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                // console.log("home error", error)
            })
    }, [])

    return (
        data !== null ? (
            <>
                {data.seo !== null && <SEO data={data?.seo} />}
                <main>
                    <div className="lyt-content">
                        <div className="lyt-single-page">
                            <Fade bottom distance="20px" delay={500} duration={800}>
                                <div className="sp-head">
                                    <h2 className="sp-title">CUSTOMISATION SERVICES</h2>
                                </div>
                            </Fade>
                            <Service data={data.features} />
                        </div>
                    </div>
                </main>
            </>
        ) : <Loader />
    )
}

export default CustomisationService