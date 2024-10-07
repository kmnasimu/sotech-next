import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination]);

const projects = [
    {
        img: "project-8.jpg",
        title: "Tech Solutions",
        categories: "DESIGN / IDEAS",
    },
    {
        img: "project-9.jpg",
        title: "Tech Solutions",
        categories: "DESIGN / IDEAS",
    },
    {
        img: "project-10.jpg",
        title: "Tech Solutions",
        categories: "DESIGN / IDEAS",
    },
    {
        img: "project-11.jpg",
        title: "Tech Solutions",
        categories: "DESIGN / IDEAS",
    }
];

const ProjectsSliderThree = () => {

    return (
        <>
            <Swiper
                slidesPerView={5}
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
                        slidesPerView: 3,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    1350: {
                        slidesPerView: 5,
                    },
                }}
                className="project-carousel-three owl-carousel owl-theme"
            >
                {projects.map((item, project) => (
                <SwiperSlide key={project}>
					<div className="project-block-three">
						<div className="inner-box">
							<div className="image-box">
                            <figure className="image"><Link href={`images/resource/${item.img}`} className="lightbox-image"><img src={`images/resource/${item.img}`} alt="Image" priority /></Link></figure>
								<div className="overlay-box">
                                    <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h4 className="title"><Link href="/page-project-details">{item.title}</Link></h4>
								    <span className="cat">{item.categories}</span>
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

export default ProjectsSliderThree;
