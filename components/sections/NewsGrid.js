import Link from 'next/link';
import React from 'react';

const BlogOne = () => {
    const data = [
        {
            img: "news-1.jpg",
            date: "<b>12 <b/> OCT",
            author: "Admin",
            tag: "wooden", 
            title: "Detailed Accents on Custom of Built Office Furniture",   
            comment: "05"
        },
        {
            img: "news-2.jpg",
            date: "<b>12 <b/> OCT",
            author: "Admin",
            tag: "wooden",
            title: "Detailed Accents on Custom of Built Office Furniture", 
            comment: "05"
        },
        {
            img: "news-3.jpg",
            date: "<b>12 <b/> OCT",
            author: "Admin",
            tag: "wooden",
            title: "Detailed Accents on Custom of Built Office Furniture", 
            comment: "05"
        },
        {
            img: "news-2.jpg",
            date: "<b>12 <b/> OCT",
            author: "Admin",
            tag: "wooden",
            title: "Detailed Accents on Custom of Built Office Furniture", 
            comment: "05"
        },
        {
            img: "news-3.jpg",
            date: "<b>12 <b/> OCT",
            author: "Admin",
            tag: "wooden",
            title: "Detailed Accents on Custom of Built Office Furniture", 
            comment: "05"
        },
        {
            img: "news-1.jpg",
            date: "<b>12 <b/> OCT",
            author: "Admin",
            tag: "wooden", 
            title: "Detailed Accents on Custom of Built Office Furniture",   
            comment: "05"
        }
    ];

    return (
        <>
            {/* News Section */}
            <section className="news-section">
                <div className="auto-container">
                    <div className="row">

                        {data.map((item, i) => (
                        <div className="news-block col-lg-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src={`images/resource/${item.img}`} alt /></Link></figure>
                                    <span className="date" dangerouslySetInnerHTML={{ __html: item.date }}></span>
                                </div>
                                <div className="content-box">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user" /> By {item.author}</li>
                                        <li><i className="fa fa-tag" /> {item.tag}</li>
                                    </ul>
                                    <h4 className="title"><Link href="news-details">{item.title}</Link></h4>
                                </div>
                                <div className="bottom-box">
                                    <Link href="news-details" className="read-more">READ MORE <i className="fa fa-long-arrow-alt-right" /></Link>
                                    <div className="comments"><i className="fa fa-comments" /> ({item.comment})</div>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
            </section>
            {/*End News Section */}
        </>
    );
};

export default BlogOne;