import React from 'react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);


const TestimonialsSliderTwo = () => {

    return (
        <>
            {/* <!-- Swiper --> */}
            <div className="swiper-container testimonial-content">
                <div className="swiper-wrapper">
                    {/* <!-- Testimonial Block Two --> */}
                    <div className="testimonial-block swiper-slide">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12">
                                <div className="icon-box">
                                    <span className="icon icon-quote" />
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <div className="text">
                                    We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment
                                </div>
                                <div className="info-box">
                                    <h4 className="name">Mike Hardson</h4>
                                    <span className="designation">Senior Designer</span>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12">
                                <figure className="image"><img src="images/resource/testimonial-1.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>    
                    {/* <!-- Testimonial Block Two --> */}
                    <div className="testimonial-block swiper-slide">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12">
                                <div className="icon-box">
                                    <span className="icon icon-quote" />
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <div className="text">
                                    We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment
                                </div>
                                <div className="info-box">
                                    <h4 className="name">Jessica Brown</h4>
                                    <span className="designation">CEO & Founder</span>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12">
                                <figure className="image"><img src="images/resource/testimonial-1.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-block swiper-slide">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12">
                                <div className="icon-box">
                                    <span className="icon icon-quote"></span>
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                </div>
                                <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment</div>
                                <div className="info-box">
                                    <h4 className="name">Jessica Brown</h4>
                                    <span className="designation">CEO & Founder</span>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12">
                                <figure className="image"><img src="images/resource/testimonial-1.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Add Pagination --> */}
                    <div className="testimonial-pagination"></div>
                </div>
            </div>

            {/* <!-- Testimonial Thumbs --> */}
            <div className="swiper-container testimonial-thumbs">
                <div className="swiper-wrapper">
                    <div className="swiper-slide testimonial-thumb">
                        <figure className="image"><img src="images/resource/testi-thumb-2.jpg" alt="" /></figure>
                    </div>
                    <div className="swiper-slide testimonial-thumb">
                        <figure className="image"><img src="images/resource/testi-thumb-1.jpg" alt="" /></figure>
                    </div>
                    <div className="swiper-slide testimonial-thumb">
                        <figure className="image"><img src="images/resource/testi-thumb-3.jpg" alt="" /></figure>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TestimonialsSliderTwo;

