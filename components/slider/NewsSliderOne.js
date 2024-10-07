import React from 'react';
import Link from 'next/link';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination]);

const Newsdata = [
    {
        img: "news-1.jpg",
        date: "<b>28</b> OCT",
        author: "Admin",
        tag: "Technology",
        title: "Does My Website Need Any Blog?",
        comments: "02",
    },
    {
        img: "news-2.jpg",
        date: "<b>28</b> OCT",
        author: "Admin",
        tag: "Technology",
        title: "Strengthening the Business Transition Across Asia.",
        comments: "02",
    },
    {
        img: "news-3.jpg",
        date: "<b>28</b> OCT",
        author: "Admin",
        tag: "Technology",
        title: "Advancing the Corporate Transition Across.",
        comments: "02",
    }
];

const NewsSliderOne = () => {

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
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
                className="news-carousel owl-carousel owl-theme"
            >
                {Newsdata.map((item, NewsBlock) => (
                <SwiperSlide key={NewsBlock}>
                    <div  class="news-block">
                        <div class="inner-box">
                            <div class="image-box">
                                <figure class="image"><Link href="/news-details"><img src={`images/resource/${item.img}`} alt="" /></Link></figure>
                                <span class="date" dangerouslySetInnerHTML={{ __html: item.date }} />
                            </div>
                            <div class="content-box">
                                <ul class="post-info">
                                    <li><i class="fa fa-user" /> by {item.author}</li>
                                    <li><i class="fa fa-tag" /> {item.tag}</li>
                                </ul>
                                <h3 class="title"><Link href="/news-details">{item.title}</Link></h3>
                            </div>
                            <div class="bottom-box">
                                <Link href="/news-details" class="read-more">Read More <i class="fa fa-long-arrow-alt-right" /></Link>
                                <div class="comments"><i class="fa fa-comments" /> {item.comments}</div>
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

export default NewsSliderOne;
