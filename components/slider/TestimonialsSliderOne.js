import React from 'react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination]);

const data = [
    {
        text: "IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction",
        img: "testi-thumb-1.jpg",
        designation: "Co Founder",
        name: "Jhon D. William",
    },
    {
        text: "IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction",
        img: "testi-thumb-2.jpg",
        designation: "Co Founder",
        name: "Aleesha Brown",
    },
    {
        text: "IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction",
        img: "testi-thumb-3.jpg",
        designation: "Co Founder",
        name: "Mike Hardon",
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
                        slidesPerView: 2,
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
                className="testimonial-carousel owl-carousel owl-theme"
            >
                {data.map((item, i) => (
                <SwiperSlide>
                    {/* <!-- Testimonial Block --> */}
					<div className="testimonial-block-five">
						<div className="inner-box">
							<div className="content-box">
								<div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half-alt" />
                                </div>
								<div className="text">{item.text}</div>
							</div>
							<div className="thumb"><img src={`images/resource/${item.img}`} alt="" /></div>
							<span className="designation">{item.designation}</span>
							<h4 className="name">{item.name}</h4>
						</div>
					</div>
                </SwiperSlide>
                ))}
                
            </Swiper>
        </>
    );
};

export default TestimonialsSliderOne;
