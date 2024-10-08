import React, { useState } from 'react';


export default function Home4_Section6() {
    const [activeTab, setActiveTab] = useState('#tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>

            <section className="why-choose-us-four">
                <div className="auto-container">
                    <div className="row">
                        <div className="tab-column col-xl-6">
                            <div className="sec-title">
                                <span className="sub-title">WHY CHOOSE US</span>
                                <h2>We are the best it <br/>Solution Agency</h2>
                            </div>
                            <div className="tabs-box tabs-two">
                                <ul className="tab-buttons clearfix">
                                    <li className={`tab-btn ${activeTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab1')}><span className="title">Our Mission</span></li>
                                    <li className={`tab-btn ${activeTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab2')}><span className="title">Our Vision</span></li>
                                    <li className={`tab-btn ${activeTab === '#tab3' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab3')}><span className="title">Our History</span></li>
                                </ul>
                                <div className="tabs-content">
                                    <div  className={`tab ${activeTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                        <div className="row">
                                            <div className="content-column">
                                                <div className="inner-column">
                                                    <div className="text">Our Mission is to empower businesses and individuals with innovative IT solutions that simplify complexities, foster growth, & inspire success. We envision a digital landscape where technology seamlessly enabling organizations to thrive in an ever-evolving world.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className={`tab ${activeTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                        <div className="row">
                                            <div className="content-column">
                                                <div className="inner-column">
                                                    <div className="text">Our Vision is to empower businesses and individuals with innovative IT solutions that simplify complexities, foster growth, & inspire success. We envision a digital landscape where technology seamlessly enabling organizations to thrive in an ever-evolving world.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className={`tab ${activeTab === '#tab3' ? 'active-tab' : ''}`} id="tab3">
                                        <div className="row">
                                            <div className="content-column">
                                                <div className="inner-column">
                                                    <div className="text">Our History is to empower businesses and individuals with innovative IT solutions that simplify complexities, foster growth, & inspire success. We envision a digital landscape where technology seamlessly enabling organizations to thrive in an ever-evolving world.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12 order-2 wow fadeInLeft" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="image-box wow fadeInRight">
                                    <figure className="image overlay-anim"><img src="images/resource/why-us-6.jpg" alt="" /></figure>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-7 col-xl-6">
                                        <ul className="list-style-three">
                                            <li><figure className="icon-image"><img src="images/icons/checked.png" alt="" /></figure> We give good support services</li>
                                            <li><figure className="icon-image"><img src="images/icons/checked.png" alt="" /></figure> Our mission is to provide quality</li>
                                            <li><figure className="icon-image"><img src="images/icons/checked.png" alt="" /></figure> We are always give good services</li>
                                            <li><figure className="icon-image"><img src="images/icons/checked.png" alt="" /></figure> We provide quality product design.</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 col-lg-5 col-xl-6">
                                        <div className="experience">
                                            <strong>30</strong>
                                            <div className="text">Years of <br/>Experience</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}