import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const bannerSlideData = [
    {
        bgImage: 'images/main-slider/s2-1.jpg',
        animIcon: 'images/main-slider/s2-shape-1.png',
        subTitle: 'WELCOME TO SOTECH',
        title: 'Make Your Business Rocket',
        videoId: 'Fvae8nxzVz4',
        link: '/page-about',
        buttonText: 'EXPLORE MORE',
    },
];

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

                {bannerSlideData.map((slide, bannerSlider) => (
                <SwiperSlide key={bannerSlider}>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${slide.bgImage})` }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content-box-inner">
                                    <div className="anim-icons bounce-y animate-4">
                                        <figure className="image">
                                            <img src={slide.animIcon} alt="Image" />
                                        </figure>
                                    </div>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1" data-fancybox="gallery" > 
                                        <i className="icon fa fa-play" aria-hidden="true" />
                                    </a>
                                    <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={slide.videoId} onClose={() => setOpen(false)} />
                                    <span className="sub-title animate-2">{slide.subTitle}</span>
                                    <h1 className="title animate-3" dangerouslySetInnerHTML={{ __html: slide.title }} />
                                    <div className="btn-box animate-4">
                                        <Link href="{slide.link}" className="theme-btn btn-style-one"><span className="btn-title">{slide.buttonText}</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
                
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

