import React from 'react';
import Infogarphy from '../components/home/Infogarphy';
import TestimonialSlider from '../components/home/TestimonialSlider';
import HomeBanner from '../components/home/HomeBanner';
import About from '../components/home/About';
import Service from '../components/home/Service';
import Packages from '../components/home/Packages';
import RecentWork from '../components/home/RecentWork'
import axios from '../axios-common';

function Home() {
	const [data, setData] = React.useState(null)
	const [error, setError] = React.useState(null)

	React.useEffect(()=>{
		axios.get(`api/home?populate=*`)
		.then((res) => {
			// console.log("result",res)
			setData(res.data.data.attributes)
		})
		.catch((error) => {
			setError(error)
			console.log("Room list error", error)
		})
	}, [])
	
// const {description,desktopBannerImage, homeVideoUpload, mobileBannerImage, premiumPackages, recentWorkSection, seo, services, tabletBannerImage, testimonialsSection, title,withUsSection}= data!==null? data.data.attributes
	console.log("data", data, error)
	return (
		<>
			
			{data!==null? (
				<main>
					<div className="lyt-content typ-home">
						<HomeBanner data={data}/>
						<About data={data}/>
						{data.services.isActive && <Service data={data}/>}
						<Packages data={data}/>
						<RecentWork data={data}/>
						<Infogarphy data={data}/>
						<TestimonialSlider data={data}/>
					</div>
				</main>
			) : null}
			
		</>
	);
}

export default Home;