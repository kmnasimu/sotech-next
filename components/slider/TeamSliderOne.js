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
                slidesPerView={3}
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
                        slidesPerView: 3,
                    },
                }}
                className="team-carousel owl-carousel owl-theme"
            >
                {data.map((item, TeamBlock) => (
                <SwiperSlide key={TeamBlock}>
                    <div className="team-block">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="/page-team-details"><img src={`images/resource/${item.img}`} alt="Image" priority /></Link></figure>
							</div>
							<div className="info-box">
								<h4 className="name"><Link href="/page-team-details">{item.name}</Link></h4>
								<span className="designation">{item.designation}</span>
								<div className="social-links">
									<Link href="#"><i className="fab fa-facebook-f" /></Link>
									<Link href="#"><i className="fab fa-twitter" /></Link>
									<Link href="#"><i className="fab fa-pinterest-p" /></Link>
									<Link href="#"><i className="fab fa-instagram" /></Link>
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
