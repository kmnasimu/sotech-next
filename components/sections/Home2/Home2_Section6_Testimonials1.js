import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const images = {
    testimonial1: 'images/resource/testimonial-1.png',
    thumb1: 'images/resource/testi-thumb-2.jpg',
    thumb2: 'images/resource/testi-thumb-1.jpg',
    thumb3: 'images/resource/testi-thumb-3.jpg',
};

export default function Home2_Section6() {
    return (
        <>
        {/* <!-- Testimonial Section --> */}
        <section className="testimonial-section pt-0">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">OUR FEEDBACKS</span>
                    <h2>What They’re Talking<br /> About Company</h2>
                </div>
                <div className="testimonials">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className="testimonial-content"
                    >
                        <SwiperSlide>
                            <div className="testimonial-block">
                                <div className="row">
                                    <div className="content-column col-lg-6 col-md-12">
                                        <div className="icon-box">
                                            <span className="icon icon-quote"/>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology to create a better and smarter environment.</div>
                                        <div className="info-box">
                                            <h4 className="name">Mike Hardson</h4>
                                            <span className="designation">Senior Designer</span>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-12">
                                        <figure className="image"><img src={'testimonial1'} alt="Testimonial" /></figure>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block">
                                <div className="row">
                                    <div className="content-column col-lg-6 col-md-12">
                                        <div className="icon-box">
                                            <span className="icon icon-quote"/>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology to create a better and smarter environment.</div>
                                        <div className="info-box">
                                            <h4 className="name">Mike Hardson</h4>
                                            <span className="designation">Senior Designer</span>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-12">
                                        <figure className="image"><img src={'testimonial1'} alt="Testimonial" /></figure>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block">
                                <div className="row">
                                    <div className="content-column col-lg-6 col-md-12">
                                        <div className="icon-box">
                                            <span className="icon icon-quote"/>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology to create a better and smarter environment.</div>
                                        <div className="info-box">
                                            <h4 className="name">Mike Hardson</h4>
                                            <span className="designation">Senior Designer</span>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-12">
                                        <figure className="image"><img src={'testimonial1'} alt="Testimonial" /></figure>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                       
                    </Swiper>

                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation
                        className="testimonial-thumbs"
                    >
                        <SwiperSlide>
                            <div className="testimonial-thumb">
                                <figure className="image"><img src={'thumb1'} alt="Testimonial Thumb" /></figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-thumb">
                                <figure className="image"><img src={'thumb2'} alt="Testimonial Thumb" /></figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-thumb">
                                <figure className="image"><img src={'thumb3'} alt="Testimonial Thumb" /></figure>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        </>
    );
}
