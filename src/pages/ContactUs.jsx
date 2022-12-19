import React from 'react';
import axios from '../axios-common';
import GoogleMap from '../components/contactus/GoogleMap';
import CompanyInfo from '../components/contactus/CompanyInfo';
import CustomerDetails from '../components/contactus/CustomerDetails';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import Fade from 'react-reveal/Fade';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';

function ContactUs() {
    const [data, setData] = React.useState(null)
    const [leadFormOpen, setLeadFormOpen] = React.useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);
       
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLeadFormOpen(true);
        }, 15000)
        axios.get(`/contact-us`)
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
                                    <h2 className="sp-title">CONTACT us</h2>
                                </div>
                            </Fade>
                            <div className="sp-cont cm-container">
                                {data.googleMap && <Fade bottom distance="20px" delay={800} duration={800}><GoogleMap /></Fade>}
                                {data.companyInfo.isActive && <Fade bottom distance="20px" delay={500} duration={800}><CompanyInfo data={data.companyInfo} /></Fade>}
                                {data.contactDetails.isActive && data.contactDetails.customerDetailsForm && <Fade bottom distance="20px" delay={500} duration={800}><CustomerDetails data={data.contactDetails} /></Fade>}
                            </div>
                        </div>
                    </div>
                </main>
            <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />

            </>
        ) : <Loader />
    )
}

export default ContactUs