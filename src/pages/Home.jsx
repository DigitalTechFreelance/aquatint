import React from 'react';
import Infogarphy from '../components/home/Infogarphy';
import TestimonialSlider from '../components/home/TestimonialSlider';
import VideoBanner from '../components/common/VideoBanner';
import About from '../components/home/About';
import Service from '../components/common/TilesServices';
import Packages from '../components/home/Packages';
import RecentWork from '../components/home/RecentWork'
import axios from '../axios-common';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Flybutton from '../components/common/Flybutton';

function Home(props) {
	const [data, setData] = React.useState(null)
	const [leadFormOpen, setLeadFormOpen] = React.useState(false);
	const handleLeadFormClose = () => setLeadFormOpen(false);

	React.useEffect(() => {
		window.scrollTo(0, 0);
		setTimeout(() => {
			setLeadFormOpen(true);
		}, 15000)
		axios.get(`/home`)
			.then((res) => {
				setData(res.data)
			})
			.catch((error) => {
				// console.log("home error", error)
			})
	}, []);
	return (
		data !== null ? (
			<>
      {props.globalData &&  <Header data={props.globalData} activeTab={props.activeTab} />} 

				 <SEO data={data?.seo!==null? data?.seo: props.globalData} />
				<main>
					<div className="lyt-content typ-home">

						<>
							<VideoBanner data={data} />
							<About data={data} />
							{data.services.isActive && <Service data={data.services.services} title="Services We Offer" page="home" />}
							{data.premiumPackages.isActive && <Packages data={data.premiumPackages} />}
							<RecentWork data={data.recentWorkSection} />
							{data.withUsSection.isActive && <Infogarphy data={data.withUsSection} />}
							<TestimonialSlider data={data.testimonialsSection} />
						</>

					</div>
				</main>
				<DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />
				{props.globalData && (
          <> 
            <Footer data={props.globalData} />
            <Flybutton />
          </>) }
        
			</>
		) : <Loader />
	);
}

export default Home;