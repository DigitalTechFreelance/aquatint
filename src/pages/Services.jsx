import React, {useState} from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ServiceList from '../components/service/ServiceList';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';

function Services() {
    React.useEffect(()=>{
        window.scrollTo(0, 0);
		setTimeout(()=>{
			setLeadFormOpen(true);
		},2000)
    },[])

	const [leadFormOpen, setLeadFormOpen] = useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);

  return (
    <>
        <Header/>
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
        <Footer/>
		<DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen}/>
    </>
  )
}

export default Services