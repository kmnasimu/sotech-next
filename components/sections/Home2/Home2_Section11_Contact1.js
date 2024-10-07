import React from 'react';
import ContactForm2 from '../../elements/ContactForm2';

export default function Home2_Section11() {
    return (
        <>

        {/* <!-- Contact Section --> */}
        <section className="contact-section-two pull-up pb-0">
            <div className="auto-container">
                <div className="row">
                    {/* <!-- Info Column --> */}
                    <div className="info-column col-xl-7 col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title">
                                <div className="sub-title">Get to know</div>
                                <h2>Keep your Vision to Our Projects</h2>
                            </div>

                            <figure className="image overlay-anim"><img src="images/resource/contact.jpg" alt="" /></figure>

                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h4 className="title">Business Solutions</h4>
                                <div className="text">Readers can be distracted gravida nibh velit auctor aliquet. Aenean solldin, lorem simply free text quis bibendum</div>
                            </div>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h4 className="title">Fast & Secure Support</h4>
                                <div className="text">Sotech IT. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum</div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Form Column --> */}
                    <div className="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* <!-- Contact Form --> */}
                            <div className="contact-form light wow fadeInLeft">
                                <div className="title-box">
                                    <span className="sub-title">Contact us</span>
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
