import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const BannerSliderFour = () => {


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                navigation={{
                    clickable: true,
                    prevEl: ".owl-prev",
                    nextEl: ".owl-next",
                }}
                className="banner-carousel owl-carousel owl-theme"
            >
                <SwiperSlide>
                <div className="slide-item">
                    <div className="bg-image" style={{backgroundImage: 'url(images/main-slider/1.jpg)'}} />
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-1">Solutions for all businesses goal</span>
                            <h1 className="title animate-2">Top It Technological <br/>Solutions.</h1>
                            <h2 className="title-stroke animate-3">BOOST</h2>
                            <div className="btn-box animate-3">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide-item">
                    <div className="bg-image" style={{backgroundImage: 'url(images/main-slider/s4-2.jpg)'}} />
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-1">Solutions for all businesses goal</span>
                            <h1 className="title animate-2">Top It Technological <br/>Solutions.</h1>
                            <h2 className="title-stroke animate-3">BOOST</h2>
                            <div className="btn-box animate-3">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                
                <div className="owl-nav">
                    <div className="owl-prev">
                        <span className="fa fa-chevron-left"></span>
                    </div>
                    <div className="owl-next">
                        <span className="fa fa-chevron-right"></span>
                    </div>
                </div>
                
            </Swiper>

        </>
    );
};

export default BannerSliderFour;