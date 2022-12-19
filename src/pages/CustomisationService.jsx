import React from 'react';
import axios from '../axios-common';
import Service from '../components/service/Customisation/Service';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';

function CustomisationService() {
    const [data, setData] = React.useState(null)
    const [leadFormOpen, setLeadFormOpen] = React.useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLeadFormOpen(true);
        }, 15000)
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
            <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />

            </>
        ) : <Loader />
    )
}

export default CustomisationService