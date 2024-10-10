import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';

const serviceListData = [
	{
		title: "House Renovation",
		linkurl: "page-service-details"
	},
	{
		title: "Furniture Remodelling",
		linkurl: "page-service-details"
	},
	{
		title: "General Carpentry",
		linkurl: "page-service-details"
	},
	{
		title: "Hardwood Flooring",
		linkurl: "page-service-details"
	},
	{
		title: "Furniture Remodelling",
		linkurl: "page-service-details"
	},
	{
		title: "General Carpentry",
		linkurl: "page-service-details"
	},
];

const ServiceDetails = ({ alternate }) => {
	return (
		<>

		<section className="services-details">
			<div className="container">
				<div className="row">
					{/* Start Services Details Sidebar */}
					<div className="col-xl-4 col-lg-4">
						<div className="service-sidebar">
							{/* Start Services Details Sidebar Single */}
							<div className="sidebar-widget service-sidebar-single">
								<div className="sidebar-service-list">
									<ul>
										{serviceListData.map((eachitem, index) => (
											<li><Link className={(index === 0) ? 'current': ''} href={eachitem.linkurl}><i className="fas fa-angle-right" /><span>{eachitem.title}</span></Link></li>
										))}
									</ul>
								</div>
								<div className="service-details-help">
									<div className="help-shape-1" />
									<div className="help-shape-2" />
									<h2 className="help-title">Contact with <br /> us for any <br /> advice</h2>
									<div className="help-icon">
										<span className=" lnr-icon-phone-handset" />
									</div>
									<div className="help-contact">
										<p>Need help? Talk to an expert</p>
										<Link href="">+892 ( 123 ) 112 - 9999</Link>
									</div>
								</div>
								{/* Start Services Details Sidebar Single */}
								<div className="sidebar-widget service-sidebar-single mt-4">
									<div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
										<Link href="" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf" /> download pdf file</span></Link>
									</div>
								</div>
							</div>
							{/* End Services Details Sidebar */}
						</div>
					</div>
					{/* Start Services Details Content */}
					<div className="col-xl-8 col-lg-8">
						<div className="services-details__content">
							<img src="images/resource/service-details.jpg" alt="" priority />
							<h3 className="mt-4">Service Overview</h3>
							<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
							<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit  </p>
							<div className="content mt-40">
								<div className="text">
									<h3>Service Center</h3>
									<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
									<blockquote className="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur</blockquote>
								</div>
								<div className="feature-list mt-4">
									<div className="row clearfix">
										<div className="col-lg-6 col-md-6 col-sm-12 column">
											<img className="mb-3" src="images/resource/service-d1.jpg" alt="" priority />
											<p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12 column">
											<img className="mb-3" src="images/resource/service-d2.jpg" alt="" priority />
											<p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
										</div>
									</div>
								</div>
							</div>
							<div className="innerpage mt-25">
								<h3>Frequently Asked Question</h3>
								<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
								<Accordion />
							</div>
						</div>
					</div>
					{/* End Services Details Content */}
				</div>
			</div>
		</section>

		</>
	);
};

export default ServiceDetails;