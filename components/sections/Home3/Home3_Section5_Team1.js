import React from 'react';
import Link from 'next/link';

const teamBlock3 = [
    {
        name: "Leslie Alexander",
        designation: "Dog Trainer",
        img: "team-4.jpg",
    },
    {
        name: "Esther Howard",
        designation: "PM Assistant",
        img: "team-5.jpg",
    },
    {
        name: "Ronald Richards",
        designation: "President of Sales",
        img: "team-6.jpg",
    },
    {
        name: "Darrell Steward",
        designation: "Medical Assistant",
        img: "team-7.jpg",
    }
];

export default function Home3_Section5() {
    return (
        <>

        <section className="team-section-two">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">OUR TEAM MATE</span>
                    <h2>Expert Ready to Served</h2>
                </div>

                <div className="row">
                    {/* <!-- Team block --> */}
                    {teamBlock3.map((item, teamBlock3) => (
                    <div key={teamBlock3} className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="info-box">
                                <h4 className="name"><Link href="/page-team-details">{item.name}</Link></h4>
                                <span className="designation">{item.designation}</span>
                                <span className="share-icon fa fa-share-alt" />
                                <div className="social-links">
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                    <Link href="#"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image"><Link href="/page-team-details"><img src={`images/resource/${item.img}`} alt="" /></Link></figure>
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
