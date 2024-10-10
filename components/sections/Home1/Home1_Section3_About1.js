import React from 'react';
import Link from 'next/link';

export default function Home1_Section3() {
    return (
        <>

            {/* <!-- About Section --> */}
            <section className="about-section" id="about">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">WHO WE ARE</span>
                                    <h2>We provide best design Solution in town</h2>
                                    <div className="text">We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation need.</div>
                                </div>

                                <ul className="list-style-two">
                                    <li><i className="fa fa-check-circle" /> Deliver Perfect Solution for business</li>
                                    <li><i className="fa fa-check-circle" /> Readily Work With Global Brands solutions.</li>
                                    <li><i className="fa fa-check-circle" /> Residential Business Installation</li>
                                </ul>

                                <div className="btn-box">
                                    <div className="founder-info">
                                        <div className="thumb"><img src="images/resource/thumb-2.png" alt="Image" priority /></div>
                                        <h5 className="name">Jessica brown</h5>
                                        <span className="designation">Founder of company</span>
                                    </div>
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-1.jpg" alt="Image" priority /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-2.jpg" alt="Image" priority /></figure>
                                <div className="experience bounce-y">
                                    <div className="inner">
                                        <i className="icon flaticon-business-018-startup" />
                                        <div className="text"><strong>30+</strong> Years of <br/>experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Emd About Section --> */}

        </>
    )
}
