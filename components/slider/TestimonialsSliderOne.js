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
					<div class="testimonial-block-five">
						<div class="inner-box">
							<div class="content-box">
								<div class="rating">
                                    <i class="fa fa-star" />
                                    <i class="fa fa-star" />
                                    <i class="fa fa-star" />
                                    <i class="fa fa-star" />
                                    <i class="fa fa-star-half-alt" />
                                </div>
								<div class="text">{item.text}</div>
							</div>
							<div class="thumb"><img src={`images/resource/${item.img}`} alt="" /></div>
							<span class="designation">{item.designation}</span>
							<h4 class="name">{item.name}</h4>
						</div>
					</div>
                </SwiperSlide>
                ))}
                
            </Swiper>
        </>
    );
};

export default TestimonialsSliderOne;
