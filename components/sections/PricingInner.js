import Link from 'next/link';
import React from 'react';

const Pricing = () => {
    return (
        <>
            <section className="pricing-section">
                <div className="bg bg-pattern-3" />
                <div className="auto-container">
                    <div className="row align-items-center">
                        {/* Content Column */}
                        <div className="content-column col-xl-5 col-lg-12 col-md-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <span className="sub-title">PRICING OPTIONS</span>
                                    <h2>Our Carpenting Pricing Plans.</h2>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit velit convallis enim vestibulum sagittis sapien  inceptos.</div>
                                </div>
                                <div className="info-btn">
                                    <Link href="" className="info-btn-two">
                                        <i className="icon fa fa-phone" />
                                        <small>Call Anytime</small>
                                        <strong>+ 01 ( 2345 ) 6789</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Content Column */}
                        <div className="pricing-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                {/* Pricing Block */}
                                <div className="pricing-block">
                                    <div className="inner-box">
                                        <figure className="image"><img src="images/resource/pricing-1.png" alt="" priority /></figure>
                                        <h4 className="title">Residential Plan</h4>
                                        <div className="price-box">
                                            <h4 className="price"><sup>$</sup>49</h4>
                                            <span className="validaty">/ MONTLY</span>
                                        </div>
                                        <ul className="features">
                                            <li>Bathroom Dry Cleaning</li>
                                            <li>Dusting & Vacuuming Cleaning</li>
                                            <li>Upholstery Cleaning Services</li>
                                            <li>Roof Light Cleaning House</li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="page-pricing" className="theme-btn2 btn-style-one hvr-light"><span className="btn-title">BOOKING NOW</span></Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Pricing Block */}
                                <div className="pricing-block style-two pull-left">
                                    <div className="inner-box">
                                        <figure className="image"><img src="images/resource/pricing-2.png" alt="" priority /></figure>
                                        <h4 className="title">Basic Plan</h4>
                                        <div className="price-box">
                                            <h4 className="price"><sup>$</sup>29</h4>
                                            <span className="validaty">/ MONTLY</span>
                                        </div>
                                        <ul className="features">
                                            <li>Bathroom Dry Cleaning</li>
                                            <li>Dusting & Vacuuming Clean</li>
                                            <li>Upholstery Cleaning Services</li>
                                            <li>Roof Light Cleaning House</li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="page-pricing" className="theme-btn btn-style-one"><span className="btn-title">BOOKING NOW</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;