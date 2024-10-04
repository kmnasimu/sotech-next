import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination]);

const data = [
    {
        img: "project-1.jpg",
        title: "Digital Marketing",
        categories: "Technology / Marketing",
    },
    {
        img: "project-2.jpg",
        title: "Analytic Solution",
        categories: "Agency / Branding",
    },
    {
        img: "project-3.jpg",
        title: "Tech Solution",
        categories: "Cyberdeck / Promotion",
    },
    {
        img: "project-4.jpg",
        title: "Marketing Cleaning",
        categories: "Development / HTML",
    }
];

const ProjectsSliderOne = () => {

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
                className="project-carousel owl-carousel owl-theme"
            >
                {data.map((item, i) => (
                <SwiperSlide>
                    <div className="project-block">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href={`images/resource/${item.img}`} className="lightbox-image"><img src={`images/resource/${item.img}`} alt="" /></Link></figure>
								<Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
							</div>
							<div className="content-box">
								<h3 className="title"><Link href="/page-project-details">{item.title}</Link></h3>
								<span className="cat">{item.categories}</span>
							</div>
						</div>
					</div>
                </SwiperSlide>
                ))}
                
            </Swiper>
        </>
    );
};

export default ProjectsSliderOne;
