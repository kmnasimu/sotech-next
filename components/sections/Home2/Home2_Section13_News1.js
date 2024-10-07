import React from 'react';
import Link from 'next/link';

const newsdata = [
    {
        img: "news-1.jpg",
        date: "<b>12</b> OCT",
        author: "Admin",
        tag: "Technology", 
        title: "10 Strategies to Attain Your Business toward Objectives now.",   
        comment: "05"
    },
    {
        img: "news-2.jpg",
        date: "<b>10</b> NOV",
        author: "Admin",
        tag: "Business", 
        title: "Get Approaches to Achieving Your Business Goals today.",   
        comment: "05"
    },
    {
        img: "news-3.jpg",
        date: "<b>20</b> DEC",
        author: "Admin",
        tag: "Corporate", 
        title: "Why the Biggest Myths About Business10 Paths to Accomplish Your Business Objectives Nowadays.",   
        comment: "05"
    }
];

export default function Home2_Section13() {
    return (
        <>

        {/* <!-- News Section --> */}
        <section class="news-section alternate">
            <div class="bg-shape"></div>
            <div class="auto-container">
                <div class="sec-title text-center light">
                    <span class="sub-title">from the blog</span>
                    <h2>News & Articles</h2>
                </div>
                <div class="row">
                    {/* <!-- News Block --> */}
                    {newsdata.map((item, newsBlock1) => (
                    <div key={newsBlock1} className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="/news-details"><img src={`images/resource/${item.img}`} alt="" priority /></Link></figure>
                                <span className="date" dangerouslySetInnerHTML={{ __html: item.date }}></span>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa fa-user"></i> by {item.author}</li>
                                    <li><i className="fa fa-tag"></i> {item.tag}</li>
                                </ul>
                                <h3 className="title"><Link href="/news-details">{item.title}</Link></h3>
                            </div>
                            <div className="bottom-box">
                                <Link href="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                <div className="comments"><i className="fa fa-comments" /> {item.comment}</div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* <!--End News Section --> */}

        </>
    )
}
