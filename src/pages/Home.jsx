import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TileGrid from '../components/home/TileGrid';
import WorkSlider from '../components/home/WorkSlider';
import Infogarphy from '../components/home/Infogarphy';
import TestimonialSlider from '../components/home/TestimonialSlider';
import HomeBanner from '../components/home/HomeBanner';
import premiumPackageImg from '../assets/images/premium-package.webp';
import Flybutton from '../components/common/Flybutton';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
// import Loader from '../components/common/Loader';
import {Helmet} from "react-helmet";

function Home() {
	return (
		<>
			<Header/>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Professional car wash & Interior cleaning service at affordable prices</title>
				{/* <link rel="canonical" href="http://mysite.com/example" /> */}
				<meta name="keywords" content="Music, Audio, Lyrics"/> 
				<meta name="description" content="Get your car cleaned inside-out with premium steam wash service | High value service at an unbeatable price | Drive out with a clean & shiny looking car | Free wax application provides gloss and instant protection." />
			</Helmet>
			<main>
				<div className="lyt-content typ-home">
					<HomeBanner bannerTitle = {'welcome to aquatint auto detailing'}/>
					<section>
						<div className="bs-section cm-no-pad-top cm-no-pad-bottom">
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
							<div className="cm-container">
								<div className="sec-head">
									<h2 className="sec-title">Services We Offer</h2>
								</div>
								<div className="sec-cont">
									<TileGrid/>
								</div>
							</div>
						</div>
					</section>
					<section>
							<div className="bs-section">
								<div className="sec-head cm-visible-xs cm-container">
									<h2 className="sec-title">explore our premium packages</h2>
								</div>
								<div className="sec-cont">
									<div className="bs-infography typ-reverse typ-explore">
										<div className="info-wrap">
											<h3 className="title">
												<span className="text-sm text-pos-1">explore our</span>
												<span className="text-lg text-pos-2">premium</span>
												<span className="text-lg text-pos-3">packages</span>
											</h3>
											<ul className="feature-list">
												<li>COMPREHENSIVE PACKAGE</li>
												<li>SIGNATURE PACKAGE</li>
												<li>ESSENTIAL PACKAGE</li>
											</ul>
											<a href="/premium-packages" className="btn btn-default"><span>explore</span></a>
										</div>
										<div className="img-wrap">
											<img src={premiumPackageImg} alt="Coating Car" title="Coating Car" />
										</div>
									</div>
								</div>
							</div>
					</section>
					<section>
						<div className="bs-section">
							<div className="cm-container">
								<div className="sec-head">
									<h2 className="sec-title">Our Recent Work</h2>
								</div>
							</div>
							<div className="sec-cont">
								<WorkSlider/>
							</div>
						</div>
					</section>
					{/* franchise with us */}
					<section>
						<div className="bs-section typ-infography cm-paddtop-30 bs-pattern pattern-orange patter-pos-1">
							<div className="sec-head cm-visible-xs cm-container">
								<h2 className="sec-title">Franchise With Us</h2>
							</div>
							<div className="cm-container">
								<div className="sec-cont">
									<Infogarphy/>
								</div>
							</div>
						</div>
					</section>
					{/* testimonial section	*/}
					<section>
						<div className="bs-section sec-last">
							<div className="sec-cont">
								<TestimonialSlider/>
							</div>
						</div>
					</section>
				</div>
				{/* <Loader/> */}
			</main>
			<Footer/>
			<Flybutton/>
			<DetailsCaptureModal/>
		</>
	);
}

export default Home;