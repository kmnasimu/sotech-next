import React from 'react';
import Link from 'next/link';

const data = [
    {
        img:"team1-1.jpg",
        title: "John Mirkwood",
        desig:"Support Engineer"
    },
    {
        img:"team1-2.jpg",
        title: "Leslie Alexander",
        desig:"Support Engineer"
    },
    {
        img:"team1-3.jpg",
        title: "Brooklyn Simmons",
        desig:"Support Engineer"
    },
    {
        img:"team1-2.jpg",
        title: "Leslie Alexander",
        desig:"Support Engineer"
    },
    {
        img:"team1-3.jpg",
        title: "Brooklyn Simmons",
        desig:"Support Engineer"
    },
    {
        img:"team1-1.jpg",
        title: "John Mirkwood",
        desig:"Support Engineer"
    }
];

export default function TeamGrid() {
    return (
        <>

            <section className="team-section pb-90">
                <div className="auto-container">
                    <div className="row wow fadeInUp">
                        {data.map((item, teammGrid) => (
                        <div key={teammGrid} className="col-lg-4 col-sm-6">
                            {/* Team block Seven */}
                            <div className="team-block mb-30">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-team-details"><img src={`images/resource/${item.img}`} alt="" priority /></Link></figure>
                                        <div className="info-box">
                                            <h4 className="name"><Link href="/page-team-details">{item.title}</Link></h4>
                                            <span className="designation">{item.desig}</span> <span className="share-icon fa fa-share-alt" />
                                            <div className="social-links">
                                                <Link href="/"><i className="fab fa-twitter" /></Link>
                                                <Link href="/"><i className="fab fa-instagram" /></Link>
                                                <Link href="/"><i className="fab fa-facebook-f" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
