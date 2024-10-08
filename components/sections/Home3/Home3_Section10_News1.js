import React from 'react';
import NewsSliderOne from '../../slider/NewsSliderOne';


export default function Home3_Section10() {
    return (
        <>

        {/* <!-- News Section Two --> */}
        <section className="news-section-two" id="news">
            <div className="auto-container">
                <div className="row">
                    <div className="title-column col-xl-4 col-lg-4 col-md-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">from the blog</span>
                                <h2>Our L atest News & Articles from the Blog</h2>
                                <div className="text">We take pride in our business achievements, crafting a unique story with each success. How about yours?"</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-column col-xl-8 col-lg-8 col-md-12">
                        <div className="carousel-outer">
                            <NewsSliderOne/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End News Section Two --> */}

        </>
    )
}