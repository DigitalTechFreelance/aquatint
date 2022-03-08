import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TileGrid from '../components/home/TileGrid';
import WorkSlider from '../components/home/WorkSlider';
import Infogarphy from '../components/home/Infogarphy';
import TestimonialSlider from '../components/home/TestimonialSlider';
import HomeBanner from '../components/home/HomeBanner';


function Home() {
	return (
		<>
			<Header/>
			<main>
				<div className="lyt-content">
					<HomeBanner/>
					<section>
						<div className="bs-section">
							<div className="sec-cont">
								<div className="bs-band typ-gradiant">
									<div className="text-wrap">
										<p>What was called cosmetics at that time is today called detailing. Aquatint Detailing We are investment protection specialists offer the full spectrum of detailing treatments like ceramic coating, paint protection films, spray on PPF, body shop repairs, wraps &amp; premium washing services.</p>
										<p>Our state of the art facilities studio has some of the most skilled detailers, in-house paint protection film installers, &amp; integrated training centre. This environment, coupled with our expertise, allows us to offer our clients the highest possible quality.</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="bs-section">
							<div className="sec-head">
								<h2 className="sec-title">Services We Offer</h2>
							</div>
							<div className="sec-cont">
								<TileGrid/>
							</div>
						</div>
					</section>
					<section>
							<div className="bs-section">
								<div className="sec-head">
									<h2 className="sec-title">Our Recent Work</h2>
								</div>
								<div className="sec-cont">
									<WorkSlider/>
								</div>
							</div>
					</section>
					{/* franchise with us */}
					<section>
						<div className="bs-section">
							<div className="sec-cont">
								<Infogarphy/>
							</div>
						</div>
					</section>
					{/* testimonial section	*/}
					<section>
						<div className="bs-section">
							<div className="sec-cont">
								<TestimonialSlider/>
							</div>
						</div>
					</section>
				</div>
			</main>
			<Footer/>
		</>
	);
}

export default Home;