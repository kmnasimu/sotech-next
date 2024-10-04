import React from 'react';
import Link from 'next/link';

const data = [
    {
        icon: "business-011-dollar",
        title: "Business Solution",
        text: "When an unknown printer took a galley type book.",
    },
    {
        icon: "business-054-graph",
        title: "Growth Planning",
        text: "When an unknown printer took a galley type book.",
    },
    {
        icon: "business-061-meeting",
        title: "Promotional Advice",
        text: "When an unknown printer took a galley type book.",
    }
];


export default function Home2_Section2() {
    return (
        <>

            {/* <!-- Features Section Two --> */}
            <section className="features-section-nine">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row justify-content-lg-center">
                            {/* <!-- Feature Block Nine --> */}
                            {data.map((item, i) => (
                            <div className="feature-block-nine col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box ">
                                    <i class={`icon flaticon-${item.icon}`} />
                                    <h4 className="title"><Link href="/page-service-details">{item.title}</Link></h4>
                                    <div className="text">{item.text}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Features Section Two --> */}

        </>
    )
}
