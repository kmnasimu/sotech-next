import React from 'react';
import Link from 'next/link';


const features3 = [
    {
        icon: "business-012-startup",
        title: "Web Design",
    },
    {
        icon: "business-010-startup",
        title: "UI/UX Design",
    },
    {
        icon: "business-030-settings",
        title: "Marketing Planning",
    },
    {
        icon: "business-054-graph",
        title: "Branding",
    },
    {
        icon: "business-049-presentation",
        title: "SEO",
    },
    {
        icon: "business-002-graph",
        title: "Digital Products",
    },
];

export default function Home3_Section4() {
    return (
        <>
            	
            	
	<section className="features-section-seven">
		<div className="auto-container">
			<div className="row">
				<div className="title-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="sec-title light">
							<span className="sub-title">ABOUT OUR COMPANY</span>
							<h2>Our goal is ensure IT <br/>Technology service.</h2>
							<div className="text">We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation need.</div>
						</div>
					</div>
				</div>
				<div className="image-column col-lg-6 col-md-12 col-sm-12">
					<div className="image-box wow fadeIn">
						<figure className="image"><img src="images/resource/industries.jpg" alt="" /></figure>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				{/* <!-- Feature Block Seven --> */}
                {features3.map((item, featureBlock3) => (
				<div key={featureBlock3} className="feature-block-seven dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
					<div className="inner-box ">
						<div className="icon-box">
							<i class={`icon flaticon-${item.icon}`} />
						</div>
						<h6 className="title"><Link href="/page-service-details">{item.title}</Link></h6>
					</div>
				</div>
                ))}
			</div>
		</div>
	</section>
	{/* <!-- End Features Section --> */}

        </>
    )
}
