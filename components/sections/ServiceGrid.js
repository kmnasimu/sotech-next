import React from 'react'
import Link from 'next/link'

const data = [
    {
        img: "service2-1.jpg",
        icon: "carpentry",
        title: "Hardwood Flooring",
        text: "We offer end-to-end carpenter tailored for specific markets solution"
    },
    {
        img: "service2-2.jpg",
        icon: "hammer",
        title: "Furniture Remodelling",
        text: "We offer end-to-end carpenter tailored for specific markets solution"
    },
    {
        img: "service2-3.jpg",
        icon: "carpenter-5",
        title: "General Carpentry",
        text: "We offer end-to-end carpenter tailored for specific markets solution"
    },
    {
        img: "service2-2.jpg",
        icon: "hammer",
        title: "Furniture Remodelling",
        text: "We offer end-to-end carpenter tailored for specific markets solution"
    },
    {
        img: "service2-3.jpg",
        icon: "carpenter-5",
        title: "General Carpentry",
        text: "We offer end-to-end carpenter tailored for specific markets solution"
    },
    {
        img: "service2-1.jpg",
        icon: "carpentry",
        title: "Hardwood Flooring",
        text: "We offer end-to-end carpenter tailored for specific markets solution"
    },
];

export default function ServiceGrid() {

    return (
        <>
            <section className="services-section-home2 pb-70 pt-120">
		        <div className="auto-container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="service-block-two">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/page-service-details"><img className="w-100" src={`images/resource/${item.img}`} alt /></Link></figure>
                                        </div>
                                        <div className="content-box">
                                            <div className="inner">
                                                <i class={`icon flaticon-${item.icon}`} />
                                                <h4 className="title"><Link href="/page-service-details">{item.title}</Link></h4>
                                                <div className="text">{item.text}</div>
                                            </div>
                                            <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">READ MORE <i className="fa fa-arrow-right" /></span></Link>
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
