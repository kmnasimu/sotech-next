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
            <section class="features-section-two">
                <div class="auto-container">
                    <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-5 justify-content-center">
                        {/* <!-- Feature Block Two --> */}
                        {data.map((item, i) => (
                        <div class="feature-block-two col wow fadeInUp">
                            <div class="inner-box ">
                                <i class={`icon flaticon-${item.icon}`} />
                                <h4 class="title"><Link href="/page-service-details" dangerouslySetInnerHTML={{ __html: item.title }} /></h4>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div class="bottom-text">IT Technology services built specifically for your business. <Link href="/page-services" class="theme-btn btn-style-one small"><span class="btn-title">Find Your Solution</span></Link></div>
                </div>
            </section>
            {/* <!-- End Features Section Two --> */}

        </>
    )
}
