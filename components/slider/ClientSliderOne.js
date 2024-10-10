import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ClientSliderOne = () => {

    const data = [
        {
            img: "client-1.png",
        },
        {
            img: "client-2.png",
        },
        {
            img: "client-3.png",
        },
        {
            img: "client-4.png",
        },
        {
            img: "client-5.png",
        },
    ];

 
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="clients-carousel owl-carousel owl-theme"
            > 
                {data.map((item, ClientsSlider) => (
                    <SwiperSlide key={ClientsSlider}>
                        <li className="slide-item"> <Link href=""><img src={`images/resource/${item.img}`} alt="" priority /></Link></li>
                    </SwiperSlide>
                ))}
            </Swiper> 



        </>
    );
};

export default ClientSliderOne;

