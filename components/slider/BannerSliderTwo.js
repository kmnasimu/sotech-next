import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const BannerSliderTwo = () => {
    const [isOpen, setOpen] = useState(false)
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
                navigation={{
                    clickable: true,
                    prevEl: ".owl-prev",
                    nextEl: ".owl-next",
                }}
                className="banner-carousel owl-carousel owl-theme"
            >                
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/s2-1.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content-box-inner">
                                    <div className="anim-icons bounce-y animate-4">
                                        <figure className="image"><img src="images/main-slider/s2-shape-1.png" alt="" /></figure>
                                    </div>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /></a>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                                    <span className="sub-title animate-2">WELCOME TO SOTECH</span>
                                    <h1 className="title animate-3">Make Your <br/>Business Rocket</h1>
                                    <div className="btn-box animate-4">
                                        <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="slide-item">
                        <div class="bg-image" style={{ backgroundImage: 'url(images/main-slider/s2-2.jpg)' }} />
                        <div class="auto-container">
                            <div class="content-box">
                                <div class="content-box-inner">
                                    <div class="anim-icons bounce-y animate-4">
                                        <figure class="image"><img src="images/main-slider/s2-shape-1.png" alt="" /></figure>
                                    </div>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /></a> 
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />                                   
                                    <span class="sub-title animate-2">WELCOME TO SOTECH</span>
                                    <h1 class="title animate-3">Make Your <br/>Business Rocket</h1>
                                    <div class="btn-box animate-4">
                                        <Link href="/page-about" class="theme-btn btn-style-one"><span class="btn-title">EXPLORE MORE</span></Link>
                                    </div>
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

export default BannerSliderTwo;

