import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination]);

const projects = [
    {
        img: "project-8.jpg",
        title: "Tech Solutions",
        categories: "Technology /  Marketing",
    },
    {
        img: "project-9.jpg",
        title: "Smart Visions",
        categories: "Agency /  Branding",
    },
    {
        img: "project-10.jpg",
        title: "Platform Integration",
        categories: "Cyberdeck /  Promotion",
    },
    {
        img: "project-11.jpg",
        title: "Web Development",
        categories: "Technology /  Marketing",
    },
    {
        img: "project-12.jpg",
        title: "Web Development",
        categories: "Cyberdeck /  Promotion",
    }
];

const ProjectsSliderFour = () => {

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
                className="project-carousel-five owl-carousel owl-theme"
            >
                {projects.map((item, project) => (
                <SwiperSlide key={project}>
                    <div className="project-block">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href={`images/resource/${item.img}`} className="lightbox-image"><img src={`images/resource/${item.img}`} alt="Image" priority /></Link></figure>
								<Link href="page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
							</div>
							<div className="content-box">
                                <h3 className="title"><Link href="page-project-details">{item.title}</Link></h3>
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

export default ProjectsSliderFour;
