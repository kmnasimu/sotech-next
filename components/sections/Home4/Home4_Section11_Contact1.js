import React from 'react';
import ContactForm from '../../elements/ContactForm'

export default function Home4_Section11() {
    return (
        <>

            {/* <!-- Contact Section Three --> */}
            <section className="contact-section-three style-two" id="contact">
                <div className="auto-container">
                    <div className="row">
                        {/* <!-- Info Column --> */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <div className="sub-title">CONTACT US</div>
                                    <h2>Contact Us Let’s Talk Your Any Query.</h2>
                                    <div className="text">Witch sotech dolor sit amet consectetur adipiscing elit ultricies, in a dapibus venenatis malesuada suspendisse vestibulum massa, auctor lobortis nam etiam netus vel duis. In nec erat eget neque purus elementum mauris curabitur.</div>
                                </div>

                                <div className="call-info-box-outer">
                                    <div className="call-info-box-text">Or You may <span>Call Us</span> For Appointment</div>
                                    <div className="call-info-box">
                                        <i className="icon fa fa-phone" />
                                        <span>(+01) 000 321 11</span>
                                    </div>
                                </div>

                                <div className="expert-info-box">
                                    <figure className="image"><img src="images/resource/expert-group.png" alt="Image" priority /></figure>
                                    <div className="expert-number">+12</div>
                                    <div className="expert-text">We collaborated with <span>150+</span> new start-up</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Form Column --> */}
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* <!-- Contact Form --> */}
                                <div className="contact-form-two wow fadeInLeft">
                                    <div className="title-box">
                                        <h3>Have Any Questions</h3>
                                        <span className="sub-title">Feel free to contact us through anywhere.</span>
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
