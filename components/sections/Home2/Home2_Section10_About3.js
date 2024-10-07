import React from 'react';
import Link from 'next/link';


export default function Home2_Section10() {
    return (
        <>

            {/* <!-- About Section four --> */}
            <section class="about-section-four">
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <span class="sub-title">WHY CHOOSE US</span>
                                    <h2>Our goal is ensure to IT Business Services.</h2>
                                    <div class="text">With Sotech, we've decided of passages of lorem free market need available, but the majority have alteration in some form, by injected humour, or randomised words</div>
                                </div>
                                <blockquote class="blockquote-style-one">We possess over 35 years of expertise in Digital Agency Services solutions in town.</blockquote>
                                <div class="btn-box">
                                    <div class="">
                                        <Link href="/page-about" class="theme-btn btn-style-one"><span class="btn-title">Discover more</span></Link>
                                    </div>
                                    <div class="founder-info">
                                        <div class="thumb"><img src="images/resource/thumb-1.jpg" alt="" /></div>
                                        <h5 class="name">Jon Martin</h5>
                                        <span class="designation">Co Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Image Column --> */}
                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInLeft">
                                <span class="float-text">Sotech</span>
                                <figure class="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-7.jpg" alt="" /></figure>
                                <figure class="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-8.jpg" alt="" /></figure>
                                <div class="icon-box"><img src="images/resource/icon-logo-3.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Emd About Section four --> */}

        </>
    )
}
