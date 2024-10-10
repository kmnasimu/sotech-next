import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination]);

const BannerSliderOne = () => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true, type: 'bullets' }}
                className="banner-carousel owl-carousel owl-theme"
            >
                
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/s1-1.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="inner-content">
                                    <div className="shape-line animate-1" />
                                    <div className="anim-icons">
                                        <div className="shape-1 bounce-y animate-4" />
                                        <div className="shape-2 bounce-x animate-5" />
                                        <div className="shape-3 bounce-y animate-4" />
                                    </div>
                                    <span className="sub-title animate-1"><span className="inner">WELCOME TO THE BEST SOTECH</span></span>
                                    <h1 className="title animate-2">Innovative Tech <br/>It Solution</h1>
                                    <div className="btn-box animate-3">
                                        <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/s1-2.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="inner-content">
                                    <div className="shape-line animate-1" />
                                    <div className="anim-icons">
                                        <div className="shape-1 bounce-y animate-4" />
                                        <div className="shape-2 bounce-x animate-5" />
                                        <div className="shape-3 bounce-y animate-4" />
                                    </div>
                                    <span className="sub-title animate-1"><span className="inner">WELCOME TO THE BEST SOTECH</span></span>
                                    <h1 className="title animate-2">Innovative Tech <br/>It Solution</h1>
                                    <div className="btn-box animate-3">
                                        <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/s1-1.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="inner-content">
                                    <div className="shape-line animate-1" />
                                    <div className="anim-icons">
                                        <div className="shape-1 bounce-y animate-4" />
                                        <div className="shape-2 bounce-x animate-5" />
                                        <div className="shape-3 bounce-y animate-4" />
                                    </div>
                                    <span className="sub-title animate-1"><span className="inner">WELCOME TO THE BEST SOTECH</span></span>
                                    <h1 className="title animate-2">Innovative Tech <br/>It Solution</h1>
                                    <div className="btn-box animate-3">
                                        <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BannerSliderOne;
