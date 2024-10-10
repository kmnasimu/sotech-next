import React from 'react';
import Link from 'next/link';
import ProgressBar from '../../elements/ProgressBar';


export default function Home2_Section3() {
    return (
        <>

            {/* <!-- About Section Three --> */}
            <section className="about-section-three" id="about">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-1 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">ABOUT OUR COMPANY</span>
                                    <h2>We implement our ideas from Inception to completion.</h2>
                                    <h4>The professional approach to technology for the clients.</h4>
                                    <div className="text">System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa</div>
                                </div>
                                <div className="content-box">
                                    <div className="row">
                                        <div className="about-block-three col-lg-6 col-md-6 col-sm-12">
                                            <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right" /> Internal Networking </h5>
                                            <p className="text">Lorem ipsum dolor sited amet consectetur notted</p>
                                        </div>

                                        <div className="about-block-three col-lg-6 col-md-6 col-sm-12">
                                            <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right" /> Cloud Based </h5>
                                            <p className="text">Lorem ipsum dolor sited amet consectetur notted</p>
                                        </div>
                                    </div>

                                    {/* <!--Skills--> */}
                                    <div className="skills">
                                        {/* <!--Skill Item--> */}
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h6 className="skill-title">Satisfied Clients</h6>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="bar-inner">
                                                    <ProgressBar percentage={80} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12 order-lg-0">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-5.jpg" alt="Image" priority /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-6.jpg" alt="Image" priority /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Emd About Section Two --> */}

        </>
    )
}
