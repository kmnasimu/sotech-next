import React from 'react';
import Link from 'next/link';

const service4 = [
    {
        icon: "business-002-graph",
        title: "Data <br/>Visualization",
        text: "Providing the solutions for tech business",
    },
    {
        icon: "business-010-startup",
        title: "UI/UX <br>Designing",
        text: "Providing the solutions for tech business",
    },
    {
        icon: "business-030-settings",
        title: "Digital <br>Marketing",
        text: "Providing the solutions for tech business",
    },
    {
        icon: "business-045-stationery",
        title: "Marketing <br>Strategy",
        text: "Providing the solutions for tech business",
    },
    {
        icon: "business-054-graph",
        title: "Data <br>Analysis",
        text: "Providing the solutions for tech business",
    }
];


export default function Home4_Section3() {
    return (
        <>

        <section className="services-section-three">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Services we’re offering</span>
                    <h2>High quality products and services <br/>that we stand behind</h2>
                </div>
                <div className="outer-box">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
                        {/* <!-- Service Block Two --> */}
                        {service4.map((item, service4) => (
                        <div key={service4} className="service-block-three col wow fadeInUp">
                            <div className="inner-box ">
                                <i class={`icon flaticon-${item.icon}`} />
                                <h4 className="title"><Link href="/page-service-details" dangerouslySetInnerHTML={{ __html: item.title }}></Link></h4>
                                <div className="text">{item.text}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
