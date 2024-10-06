import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import required modules
import { Navigation, Pagination, Thumbs } from 'swiper';

const testimonials = [
    {
        name: "Mike Hardson",
        designation: "Senior Designer",
        text: "We believe in four pillars of influence that drive our growth...",
        image: "/images/resource/testimonial-1.png",
        rating: 5
    },
    {
        name: "Jessica Brown",
        designation: "Senior Designer",
        text: "We believe in four pillars of influence that drive our growth...",
        image: "/images/resource/testimonial-1.png",
        rating: 5
    },
    {
        name: "Jessica Brown",
        designation: "Senior Designer",
        text: "We believe in four pillars of influence that drive our growth...",
        image: "/images/resource/testimonial-1.png",
        rating: 5
    }
];

const testimonialthumb = [
    {
        imgSrc: "/images/resource/testi-thumb-2.jpg",
        altText: "Testimonial Thumb 1",
    },
    {
        imgSrc: "/images/resource/testi-thumb-1.jpg",
        altText: "Testimonial Thumb 2",
    },
    {
        imgSrc: "/images/resource/testi-thumb-3.jpg",
        altText: "Testimonial Thumb 3",
    },
];

export default function Home2_Section6() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            {/* <!-- Testimonial Section --> */}
            <section className="testimonial-section pt-0">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">OUR FEEDBACKS</span>
                        <h2>What They’re Talking<br /> About Company</h2>
                    </div>
                    <div className="testimonials">
                        {/* Main testimonial slider */}
                        <Swiper
                            modules={[Navigation, Pagination, Thumbs]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            className="testimonial-content"
                        >
                            {testimonials.map((testimonial, feedbacks) => (
                                <SwiperSlide key={feedbacks} className="testimonial-block">
                                    <div className="row">
                                        <div className="content-column col-lg-6 col-md-12">
                                            <div className="icon-box">
                                                <span className="icon icon-quote" />
                                                <div className="rating">
                                                    {[...Array(testimonial.rating)].map((_, starfeedbacks) => (
                                                        <i key={starfeedbacks} className="fa fa-star" />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="text">{testimonial.text}</div>
                                            <div className="info-box">
                                                <h4 className="name">{testimonial.name}</h4>
                                                <span className="designation">{testimonial.designation}</span>
                                            </div>
                                        </div>
                                        <div className="image-column col-lg-6 col-md-12">
                                            <figure className="image">
                                                <img src={testimonial.image} alt={testimonial.name} priority />
                                            </figure>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Thumbnail slider */}
                        <Swiper
                            modules={[Thumbs]}
                            spaceBetween={10}
                            slidesPerView={3}
                            onSwiper={setThumbsSwiper}
                            watchSlidesProgress
                            className="testimonial-thumbs"
                        >
                            {testimonialthumb.map((thumb, thumbImage) => (
                                <SwiperSlide key={thumbImage} className="testimonial-thumb">
                                    <figure className="image">
                                        <img src={thumb.imgSrc} alt={thumb.altText} priority />
                                    </figure>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* <!-- End Testimonial Section --> */}
        </>
    );
}
