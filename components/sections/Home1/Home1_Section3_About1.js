import React from 'react';
import Link from 'next/link';

export default function Home1_Section3() {
    return (
        <>

            {/* <!-- About Section --> */}
            <section class="about-section">
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <span class="sub-title">WHO WE ARE</span>
                                    <h2>We provide best design Solution in town</h2>
                                    <div class="text">We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation need.</div>
                                </div>

                                <ul class="list-style-two">
                                    <li><i class="fa fa-check-circle" /> Deliver Perfect Solution for business</li>
                                    <li><i class="fa fa-check-circle" /> Readily Work With Global Brands solutions.</li>
                                    <li><i class="fa fa-check-circle" /> Residential Business Installation</li>
                                </ul>

                                <div class="btn-box">
                                    <div class="founder-info">
                                        <div class="thumb"><img src="images/resource/thumb-2.png" alt="" /></div>
                                        <h5 class="name">Jessica brown</h5>
                                        <span class="designation">Founder of company</span>
                                    </div>
                                    <Link href="/page-about" class="theme-btn btn-style-one"><span class="btn-title">Explore now</span></Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInLeft">
                                <figure class="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-1.jpg" alt="" /></figure>
                                <figure class="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-2.jpg" alt="" /></figure>
                                <div class="experience bounce-y">
                                    <div class="inner">
                                        <i class="icon flaticon-business-018-startup"></i>
                                        <div class="text"><strong>30+</strong> Years of <br/>experience</div>
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
