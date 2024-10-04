import React from 'react';
import Link from 'next/link';

const data = [
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
        <section class="news-section">
            <div class="auto-container">
                <div class="sec-title text-center">
                    <span class="sub-title">FROM THE BLOG</span>
                    <h2>News & Articles</h2>
                </div>
                <div class="row">
                    {/* <!-- News Block --> */}
                    {data.map((item, i) => (
                    <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div class="inner-box">
                            <div class="image-box">
                                <figure class="image"><Link href="/news-details"><img src={`images/resource/${item.img}`} alt /></Link></figure>
                                <span className="date" dangerouslySetInnerHTML={{ __html: item.date }}></span>
                            </div>
                            <div class="content-box">
                                <ul class="post-info">
                                    <li><i class="fa fa-user"></i> by {item.author}</li>
                                    <li><i class="fa fa-tag"></i> {item.tag}</li>
                                </ul>
                                <h3 class="title"><Link href="/news-details">{item.title}</Link></h3>
                            </div>
                            <div class="bottom-box">
                                <Link href="/news-details" class="read-more">Read More <i class="fa fa-long-arrow-alt-right" /></Link>
                                <div class="comments"><i class="fa fa-comments" /> {item.comment}</div>
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
