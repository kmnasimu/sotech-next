import React from 'react';
import Link from 'next/link';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination]);

const data = [
    {
        img: "team1-1.jpg",
        name: "Kevin Hardson",
        designation: "designer",
    },
    {
        img: "team1-2.jpg",
        name: "Jessica Brown",
        designation: "developer",
    },
    {
        img: "team1-3.jpg",
        name: "Michale Smith",
        designation: "co founder",
    },
    {
        img: "team1-4.jpg",
        name: "Michale Smith",
        designation: "co founder",
    }
];

const TestimonialsSliderOne = () => {

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    1350: {
                        slidesPerView: 4,
                    },
                }}
                className="team-carousel owl-carousel owl-theme"
            >
                {data.map((item, i) => (
                <SwiperSlide>
                    <div class="team-block">
						<div class="inner-box">
							<div class="image-box">
								<figure class="image"><Link href="/page-team-details"><img src={`images/resource/${item.img}`} alt="" /></Link></figure>
							</div>
							<div class="info-box">
								<h4 class="name"><Link href="/page-team-details">{item.name}</Link></h4>
								<span class="designation">{item.designation}</span>
								<div class="social-links">
									<Link href="#"><i class="fab fa-facebook-f" /></Link>
									<Link href="#"><i class="fab fa-twitter" /></Link>
									<Link href="#"><i class="fab fa-pinterest-p" /></Link>
									<Link href="#"><i class="fab fa-instagram" /></Link>
								</div>
							</div>
						</div>
					</div>
                </SwiperSlide>
                ))}
                
            </Swiper>
        </>
    );
};

export default TestimonialsSliderOne;
