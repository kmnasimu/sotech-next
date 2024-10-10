import React from 'react'
import Link from 'next/link'

const data = [
    {
        img: "service-1.jpg",
        icon: "business-010-startup",
        title: "Product Development",
        text: "We’ve designed a culture that allows our stewards to assimilate"
    },
    {
        img: "service-2.jpg",
        icon: "business-002-graph",
        title: "UI/UX Designing",
        text: "We’ve designed a culture that allows our stewards to assimilate"
    },
    {
        img: "service-3.jpg",
        icon: "business-048-coin",
        title: "Digital Marketing",
        text: "We’ve designed a culture that allows our stewards to assimilate"
    },
    {
        img: "service-3.jpg",
        icon: "business-002-graph",
        title: "Data Analysis",
        text: "We’ve designed a culture that allows our stewards to assimilate"
    },
    {
        img: "service-1.jpg",
        icon: "business-048-coin",
        title: "Security System",
        text: "We’ve designed a culture that allows our stewards to assimilate"
    },
    {
        img: "service-2.jpg",
        icon: "business-010-startup",
        title: "Data Visualization",
        text: "We’ve designed a culture that allows our stewards to assimilate"
    }
];

export default function ServiceGrid() {

    return (
        <>
            <section className="service-section pt-100 pb-70">
		        <div className="auto-container">
                    <div className="row">
                        {data.map((item, servicesGrid) => (
                        <div key={servicesGrid} className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-service-details"><img className="w-100" src={`images/resource/${item.img}`} alt="Image" /></Link></figure>
                                    <div className="icon-box"><i className={`icon flaticon-${item.icon}`} /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="page-service-details">{item.title}</Link></h5>
                                    <div className="text">{item.text}</div>
                                    <Link href="page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
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
