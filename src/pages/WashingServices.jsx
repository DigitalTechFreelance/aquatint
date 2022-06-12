import React, {useState} from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import WashingService from '../components/service/WashingService';
import WashingServiceCompareList from '../components/service/WashingServiceCompareList';
import { Helmet } from "react-helmet";
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';

function WashingServices() {
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
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Experience the best car wash with Steam sanitization </title>
        <meta name="keywords" content="Steam wash, Foam wash, Pressure wash, Wash near me, Car wash, Car clean, Car wash near me, Nearest car wash, Express car wash, Auto car wash, Car cleaning near me, Car spa, Eco car wash, Car cleaning, Car detailing, Car wash in pune, Car wash in Nashik, Car wash in baramati, Bike detailing, Bike wash"></meta>
        <meta name="description" content="Get your car cleaned inside-out with premium steam wash service | High value service at an unbeatable price | Drive out with a clean & shiny looking car | Free wax application provides gloss and instant protection." />
      </Helmet>
      <main>
        <div className="lyt-content">
          <div className="cm-container">
            <div className="lyt-single-page">
              <div className="sp-head">
                <h2 className="sp-title">Washing Services</h2>
              </div>
              <div className="sp-cont">
                <WashingService />
              </div>
            </div>
            <section>
              <div className="bs-section typ-center">
                <div className="sec-head">
                  <h2 className="sec-title">Compare Services</h2>
                </div>
                <div className="sec-cont">
                  <WashingServiceCompareList />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
			<DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen}/>
    </>
  )
}

export default WashingServices