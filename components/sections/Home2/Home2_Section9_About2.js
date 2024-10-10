import React, { useState } from 'react';
import Link from 'next/link';

export default function Home2_Section9() {
    const [activeTab, setActiveTab] = useState('#tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            {/* <!-- About Section --> */}
            <section className="about-section-nine">
                <div className="auto-container">
                    <div className="tabs-box tabs-three">
                        {/* <!--Tabs Box--> */}
                        <ul className="tab-buttons clearfix">
                            <li className={`tab-btn ${activeTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab1')}><span className="title">Our Mission</span></li>
                            <li className={`tab-btn ${activeTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab2')}><span className="title">Our Vision</span></li>
                            <li className={`tab-btn ${activeTab === '#tab3' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab3')}><span className="title">Our History</span></li>
                        </ul>
                        <div className="tabs-content">
                            {/* <!--Tab--> */}
                            <div className={`tab ${activeTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                <div className="row">
                                    <div className="blocks-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-column">
                                            <div className="sec-title">
                                                <h2>Our mission is to ensure services</h2>
                                                <div className="text">There are many variations of passages of lorem free market to available, but the majority have alteration in some form, by injected humour</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-column">
                                            <div className="info-box">
                                                <h3 className="title">We have over 10 years of experience</h3>
                                                <Link href="#" className="read-more">Read More </Link>
                                            </div>
                                            <div className="image-box">
                                                <figure className="image overlay-anim"><img src="images/resource/work-2.jpg" alt="" /></figure>
                                                <i className="icon flaticon-business-060-graph" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Tab--> */}
                            <div className={`tab ${activeTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                <div className="row">
                                    <div className="blocks-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-column">
                                            {/* <!-- Feature Block Nine --> */}
                                            <div className="feature-block-nine">
                                                <div className="inner-box ">
                                                    <i className="icon flaticon-business-011-dollar" />
                                                    <h4 className="title"><Link href="page-service-details">Best Business Solution</Link></h4>
                                                    <div className="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                </div>
                                            </div>
                                            {/* <!-- Feature Block Nine --> */}
                                            <div className="feature-block-nine">
                                                <div className="inner-box ">
                                                    <i className="icon flaticon-business-012-startup" />
                                                    <h4 className="title"><Link href="page-service-details">Highest Customer Value</Link></h4>
                                                    <div className="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-column">
                                            <div className="info-box">
                                                <h3 className="title">We have over 24 years of experience</h3>
                                                <Link href="#" className="read-more">Read More</Link>
                                            </div>
                                            <div className="image-box">
                                                <figure className="image overlay-anim"><img src="images/resource/work-2.jpg" alt="" /></figure>
                                                <i className="icon flaticon-business-060-graph" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Tab--> */}
                            <div className={`tab ${activeTab === '#tab3' ? 'active-tab' : ''}`} id="tab3">
                                <div className="tab-our-history">
                                    <div className="row">
                                        <div className="image-column col-lg-6 col-md-6 col-sm-12">
                                            <div className="inner-column">
                                                <div className="image-box">
                                                    <figure className="image overlay-anim"><img src="images/resource/work-2.jpg" alt="" /></figure>
                                                    <i className="icon flaticon-business-060-graph" />
                                                </div>
                                                <div className="info-box">
                                                    <h3 className="title">We have over 24 years of experience</h3>
                                                    <Link href="#" className="read-more">Read More </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blocks-column col-lg-6 col-md-6 col-sm-12">
                                            <div className="inner-column">
                                                {/* <!-- Feature Block Nine --> */}
                                                <div className="feature-block-nine">
                                                    <div className="inner-box ">
                                                        <i className="icon flaticon-business-011-dollar" />
                                                        <h4 className="title"><Link href="page-service-details">Best Business Solution</Link></h4>
                                                        <div className="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                    </div>
                                                </div>
                                                {/* <!-- Feature Block Nine --> */}
                                                <div className="feature-block-nine">
                                                    <div className="inner-box ">
                                                        <i className="icon flaticon-business-012-startup" />
                                                        <h4 className="title"><Link href="page-service-details">Highest Customer Value</Link></h4>
                                                        <div className="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End About Section --> */}
        </>
    );
}
