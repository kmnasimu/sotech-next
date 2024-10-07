import React from 'react';
import ContactForm2 from '../../elements/ContactForm2';

export default function Home2_Section11() {
    return (
        <>

        {/* <!-- Contact Section --> */}
        <section class="contact-section-two pull-up pb-0">
            <div class="auto-container">
                <div class="row">
                    {/* <!-- Info Column --> */}
                    <div class="info-column col-xl-7 col-lg-6 col-md-12 col-sm-12 order-2">
                        <div class="inner-column wow fadeInRight">
                            <div class="sec-title">
                                <div class="sub-title">Get to know</div>
                                <h2>Keep your Vision to Our Projects</h2>
                            </div>

                            <figure class="image overlay-anim"><img src="images/resource/contact.jpg" alt="" /></figure>

                            <div class="info-box">
                                <span class="icon fa fa-check"></span>
                                <h4 class="title">Business Solutions</h4>
                                <div class="text">Readers can be distracted gravida nibh velit auctor aliquet. Aenean solldin, lorem simply free text quis bibendum</div>
                            </div>
                            <div class="info-box">
                                <span class="icon fa fa-check"></span>
                                <h4 class="title">Fast & Secure Support</h4>
                                <div class="text">Sotech IT. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum</div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Form Column --> */}
                    <div class="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column">
                            {/* <!-- Contact Form --> */}
                            <div class="contact-form light wow fadeInLeft">
                                <div class="title-box">
                                    <span class="sub-title">Contact us</span>
                                    <h3>Write Email</h3>
                                </div>

                                <ContactForm2/>

                            </div>
                            {/* <!--End Contact Form --> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End FAQ Section --> */}

        </>
    )
}
