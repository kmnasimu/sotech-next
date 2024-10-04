import React from 'react';
import Link from 'next/link';

const data = [
    {
        icon: "business-011-dollar",
        title: "Global <br />Networking",
    },
    {
        icon: "business-049-presentation",
        title: "Business <br>Consultation",
    },
    {
        icon: "business-061-meeting",
        title: "Website <br>Development",
    },
    {
        icon: "business-030-settings",
        title: "UI/UX Design <br>Services",
    },
    {
        icon: "business-054-graph",
        title: "Support Management",
    }
];


export default function Home1_Section2() {
    return (
        <>

            {/* <!-- Features Section Two --> */}
            <section className="features-section-two">
                <div className="auto-container">
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5 justify-content-center">
                        {/* <!-- Feature Block Two --> */}
                        {data.map((item, i) => (
                        <div className="feature-block-two col wow fadeInUp">
                            <div className="inner-box ">
                                <i class={`icon flaticon-${item.icon}`} />
                                <h4 className="title"><Link href="/page-service-details" dangerouslySetInnerHTML={{ __html: item.title }} /></h4>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="bottom-text">IT Technology services built specifically for your business. <Link href="/page-services" className="theme-btn btn-style-one small"><span className="btn-title">Find Your Solution</span></Link></div>
                </div>
            </section>
            {/* <!-- End Features Section Two --> */}

        </>
    )
}
