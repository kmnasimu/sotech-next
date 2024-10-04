import React from 'react';
import Link from 'next/link';

const data = [
    {
        icon: "business-002-graph",
        title: "Website Development",
        text: "Donec suscipit ante ipsum. Donec convallis quality torto",
    },
    {
        icon: "business-010-startup",
        title: "UI/UX Designing",
        text: "Donec suscipit ante ipsum. Donec convallis quality torto",
    },
    {
        icon: "business-030-settings",
        title: "Digital Marketing",
        text: "Donec suscipit ante ipsum. Donec convallis quality torto",
    },
    {
        icon: "business-054-graph",
        title: "Data Analysis",
        text: "Donec suscipit ante ipsum. Donec convallis quality torto",
    }
];

export default function Home1_Section4() {
    return (
        <>

        {/* <!-- Start Services Section --> */}
        <section className="services-section-seven">
            <div className="auto-container">
                <div className="sec-title light text-center">
                    <span className="sub-title">WHAT WE OFFERING</span>
                    <h2>We offer premium services <br />Exclusively for you.</h2>
                </div>

                <div className="row justify-content-center">
                    {/* <!-- Service Block Seven --> */}
                    {data.map((item, i) => (
                    <div className="service-block-seven dark col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i class={`icon flaticon-${item.icon}`} />
                            </div>
                            <h4 className="title"><Link href="/page-service-details">{item.title}</Link></h4>
                            <div className="text">{item.text}</div>
                            <Link href="/page-service-details" className="read-more">Read more <i className="fa fa-arrow-right" /></Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* <!-- End Services Section --> */}

        </>
    )
}
