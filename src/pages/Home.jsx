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

function Home() {
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
	}, [])

	return (
		data !== null ? (
			<>
				{data.seo !== null && <SEO data={data?.seo} />}
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

			</>
		) : <Loader />
	);
}

export default Home;