import React from 'react';
import Link from 'next/link';

const newsdata = [
    {
        img: "news-1.jpg",
        date: "<b>12</b> OCT",
        author: "Admin",
        tag: "Technology", 
        title: "Does My Website Need Any Blog?",   
        comment: "05"
    },
    {
        img: "news-2.jpg",
        date: "<b>10</b> NOV",
        author: "Admin",
        tag: "Business", 
        title: "How to Create an Awesome software design.",   
        comment: "05"
    },
    {
        img: "news-3.jpg",
        date: "<b>20</b> DEC",
        author: "Admin",
        tag: "Corporate", 
        title: "Why the Biggest Myths About Business",   
        comment: "05"
    }
];

export default function Home1_Section13() {
    return (
        <>

        {/* <!-- News Section --> */}
        <section className="news-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">FROM THE BLOG</span>
                    <h2>News & Articles</h2>
                </div>
                <div className="row">
                    {/* <!-- News Block --> */}
                    {newsdata.map((item, newsBlock1) => (
                    <div key={newsBlock1} className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="/news-details"><img src={`images/resource/${item.img}`} alt="" priority /></Link></figure>
                                <span className="date" dangerouslySetInnerHTML={{ __html: item.date }} />
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
