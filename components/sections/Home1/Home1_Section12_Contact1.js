import React from 'react';
import ContactForm from '../../elements/ContactForm'

export default function Home1_Section12() {
    return (
        <>

            {/* <!-- Contact Section Three --> */}
            <section class="contact-section-three style-two">
                <div class="auto-container">
                    <div class="row">
                        {/* <!-- Info Column --> */}
                        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
                            <div class="inner-column wow fadeInRight">
                                <div class="sec-title">
                                    <div class="sub-title">CONTACT US</div>
                                    <h2>Contact Us Let’s Talk Your Any Query.</h2>
                                    <div class="text">Witch sotech dolor sit amet consectetur adipiscing elit ultricies, in a dapibus venenatis malesuada suspendisse vestibulum massa, auctor lobortis nam etiam netus vel duis. In nec erat eget neque purus elementum mauris curabitur.</div>
                                </div>

                                <div class="call-info-box-outer">
                                    <div class="call-info-box-text">Or You may <span>Call Us</span> For Appointment</div>
                                    <div class="call-info-box">
                                        <i class="icon fa fa-phone" />
                                        <span>(+01) 000 321 11</span>
                                    </div>
                                </div>

                                <div class="expert-info-box">
                                    <figure class="image"><img src="images/resource/expert-group.png" alt="Image" /></figure>
                                    <div class="expert-number">+12</div>
                                    <div class="expert-text">We collaborated with <span>150+</span> new start-up</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Form Column --> */}
                        <div class="form-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                {/* <!-- Contact Form --> */}
                                <div class="contact-form-two wow fadeInLeft">
                                    <div class="title-box">
                                        <h3>Have Any Questions</h3>
                                        <span class="sub-title">Feel free to contact us through anywhere.</span>
                                    </div>
                                    <ContactForm/>
                                </div>
                                {/* <!--End Contact Form --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--End Contact Section Three --> */}

        </>
    )
}
