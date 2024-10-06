import React from 'react';
import Link from 'next/link';

const services = [
    {
        icon: "business-012-startup",
        title: "Website <br/>Development",
    },
    {
        icon: "business-010-startup",
        title: "UI/UX <br>Designing",
    },
    {
        icon: "business-030-settings",
        title: "Digital <br>Marketing",
    },
    {
        icon: "business-054-graph",
        title: "Data <br>Analysis",
    },
    {
        icon: "business-049-presentation",
        title: "WordPress <br>Development",
    },
    {
        icon: "business-002-graph",
        title: "Search Engine <br>Optimization",
    },
    {
        icon: "business-036-idea",
        title: "Custom <br>Software",
    }
];

export default function Home2_Section4() {
    return (
        <>

        {/* <!-- Services Section Four --> */}
        <section className="services-section-six">
            <div className="anim-icons">
                <span className="icon icon-lines-9-top bounce-x" />
                <span className="icon icon-dots-9-top bounce-y" />
            </div>
            <div className="auto-container">

                <div className="row">
                    <div className="sec-title light col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                        <span className="sub-title">What We offer</span>
                        <h2>We Provide Full Range Services</h2>
                    </div>

                    {/* <!-- Service Block Four --> */}
                    {services.map((item, serviceBlock) => (
                    <div key={serviceBlock} className="service-block-six col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i class={`icon flaticon-${item.icon}`} />
                            </div>
                            <h4 className="title"><Link href="/page-service-details" dangerouslySetInnerHTML={{ __html: item.title }}/></h4>
                        </div>
                    </div>
                    ))}                    
                </div>
            </div>
        </section>
        {/* <!-- End Services Section Four--> */}

        </>
    )
}
