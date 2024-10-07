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
                    <div class="tabs-box tabs-three">
                        {/* <!--Tabs Box--> */}
                        <ul class="tab-buttons clearfix">
                            <li className={`tab-btn ${activeTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab1')}><span class="title">Our Mission</span></li>
                            <li className={`tab-btn ${activeTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab2')}><span class="title">Our Vision</span></li>
                            <li className={`tab-btn ${activeTab === '#tab3' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab3')}><span class="title">Our History</span></li>
                        </ul>
                        <div class="tabs-content">
                            {/* <!--Tab--> */}
                            <div className={`tab ${activeTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                <div class="row">
                                    <div class="blocks-column col-lg-6 col-md-6 col-sm-12">
                                        <div class="inner-column">
                                            <div class="sec-title">
                                                <h2>Our mission is to ensure services</h2>
                                                <div class="text">There are many variations of passages of lorem free market to available, but the majority have alteration in some form, by injected humour</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="image-column col-lg-6 col-md-6 col-sm-12">
                                        <div class="inner-column">
                                            <div class="info-box">
                                                <h3 class="title">We have over 10 years of experience</h3>
                                                <Link href="#" class="read-more">Read More </Link>
                                            </div>
                                            <div class="image-box">
                                                <figure class="image overlay-anim"><img src="images/resource/work-2.jpg" alt="" /></figure>
                                                <i class="icon flaticon-business-060-graph" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Tab--> */}
                            <div className={`tab ${activeTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                <div class="row">
                                    <div class="blocks-column col-lg-6 col-md-6 col-sm-12">
                                        <div class="inner-column">
                                            {/* <!-- Feature Block Nine --> */}
                                            <div class="feature-block-nine">
                                                <div class="inner-box ">
                                                    <i class="icon flaticon-business-011-dollar" />
                                                    <h4 class="title"><Link href="/page-service-details">Best Business Solution</Link></h4>
                                                    <div class="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                </div>
                                            </div>
                                            {/* <!-- Feature Block Nine --> */}
                                            <div class="feature-block-nine">
                                                <div class="inner-box ">
                                                    <i class="icon flaticon-business-012-startup" />
                                                    <h4 class="title"><Link href="/page-service-details">Highest Customer Value</Link></h4>
                                                    <div class="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="image-column col-lg-6 col-md-6 col-sm-12">
                                        <div class="inner-column">
                                            <div class="info-box">
                                                <h3 class="title">We have over 24 years of experience</h3>
                                                <Link href="#" class="read-more">Read More</Link>
                                            </div>
                                            <div class="image-box">
                                                <figure class="image overlay-anim"><img src="images/resource/work-2.jpg" alt="" /></figure>
                                                <i class="icon flaticon-business-060-graph" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Tab--> */}
                            <div className={`tab ${activeTab === '#tab3' ? 'active-tab' : ''}`} id="tab3">
                                <div class="tab-our-history">
                                    <div class="row">
                                        <div class="image-column col-lg-6 col-md-6 col-sm-12">
                                            <div class="inner-column">
                                                <div class="image-box">
                                                    <figure class="image overlay-anim"><img src="images/resource/work-2.jpg" alt="" /></figure>
                                                    <i class="icon flaticon-business-060-graph" />
                                                </div>
                                                <div class="info-box">
                                                    <h3 class="title">We have over 24 years of experience</h3>
                                                    <Link href="#" class="read-more">Read More </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blocks-column col-lg-6 col-md-6 col-sm-12">
                                            <div class="inner-column">
                                                {/* <!-- Feature Block Nine --> */}
                                                <div class="feature-block-nine">
                                                    <div class="inner-box ">
                                                        <i class="icon flaticon-business-011-dollar" />
                                                        <h4 class="title"><Link href="/page-service-details">Best Business Solution</Link></h4>
                                                        <div class="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                    </div>
                                                </div>
                                                {/* <!-- Feature Block Nine --> */}
                                                <div class="feature-block-nine">
                                                    <div class="inner-box ">
                                                        <i class="icon flaticon-business-012-startup" />
                                                        <h4 class="title"><Link href="/page-service-details">Highest Customer Value</Link></h4>
                                                        <div class="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
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
