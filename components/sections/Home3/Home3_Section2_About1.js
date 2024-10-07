import React from 'react';
import Link from 'next/link';

export default function Home3_Section2() {
    return (
        <>
            	
            <section className="about-section-ten">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">ABOUT OUR COMPANY</span>
                                    <h2>Best IT Technology Services <span>Since 1996</span></h2>
                                    <h4>Our operations around the world and across various technology sectors enterprises throughout</h4>
                                    <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets enterprises throughout</div>
                                </div>
                                <div className="info-box-list">
                                    <div className="info-box">
                                        <i className="icon flaticon-business-012-startup" />
                                        <h4 className="title">Quality Web Design</h4>
                                        <div className="text">We offer end-to-end logistics tailored for specific markets</div>
                                    </div>
                                    <div className="info-box">
                                        <i className="icon flaticon-business-054-graph" />
                                        <h4 className="title">Professional Services</h4>
                                        <div className="text">We offer end-to-end logistics tailored for specific markets</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about3-1.png" alt="" /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about3-2.png" alt="" /></figure>
                                <div className="experience">
                                    <div className="inner">
                                        <div className="text"><strong>25</strong> Years of <br/>experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="inner">
                            <div className="call-info-box-outer">
                                <div className="call-info-box-text">We Provide Full Office Assistance Anytime anywhere. <Link href="/page-contact"><span>Request A Quote</span></Link></div>
                                <div className="call-info-box">
                                    <i className="icon fa fa-phone" />
                                    <span>+(528) 456-7592</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
