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
        <section class="services-section-seven">
            <div class="auto-container">
                <div class="sec-title light text-center">
                    <span class="sub-title">WHAT WE OFFERING</span>
                    <h2>We offer premium services <br />Exclusively for you.</h2>
                </div>

                <div class="row justify-content-center">
                    {/* <!-- Service Block Seven --> */}
                    {data.map((item, i) => (
                    <div class="service-block-seven dark col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div class="inner-box">
                            <div class="icon-box">
                                <i class={`icon flaticon-${item.icon}`} />
                            </div>
                            <h4 class="title"><Link href="/page-service-details">{item.title}</Link></h4>
                            <div class="text">{item.text}</div>
                            <Link href="/page-service-details" class="read-more">Read more <i class="fa fa-arrow-right" /></Link>
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
