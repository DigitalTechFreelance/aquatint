import React from 'react';
import Infogarphy from '../components/home/Infogarphy';
import TestimonialSlider from '../components/home/TestimonialSlider';
import VideoBanner from '../components/common/VideoBanner';
import About from '../components/home/About';
import Service from '../components/common/TilesServices';
import Packages from '../components/home/Packages';
import RecentWork from '../components/home/RecentWork'
import axios from '../axios-common';
import PageLoader from './PageLoader';

function Home() {
	const [data, setData] = React.useState(null)

	React.useEffect(()=>{
		axios.get(`/home`)
		.then((res) => {
			// console.log("home res", res)
			setData(res.data)
			// setLoader(false)
		})
		.catch((error) => {
			// console.log("home error", error)
		})
	})
	return (
		data!==null? (
			<main>
				<div className="lyt-content typ-home">
				{/* {loader? 
				<Loader/> :
				( */}
					<>
						<VideoBanner data={data}/>
						<About data={data}/>
						{data.services.isActive && <Service data={data.services.services} title="Services We Offer" page="home"/>}
						{data.premiumPackages.isActive && <Packages data={data.premiumPackages}/>}
						<RecentWork data={data.recentWorkSection}/> 
						{data.withUsSection.isActive && <Infogarphy data={data.withUsSection}/>}
						<TestimonialSlider data={data.testimonialsSection}/>
					</>
				{/* )} */}
				</div>
			</main>
		) : null
	);
}

export default Home;