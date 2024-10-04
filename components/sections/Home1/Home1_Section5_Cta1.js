import React from 'react';
import Link from 'next/link';

export default function Home1_Section5() {
    return (
        <>

        {/* <!-- Call To Action Two --> */}
        <section class="call-to-action-six" style={{ backgroundImage: 'url(images/background/6.jpg)'}}>
            <div class="auto-container">
                <div class="title-box">
                    <h1 class="title">IT Solutions & Services Right <br/>At Your Fingertips</h1>
                    <Link href="/page-services" class="theme-btn btn-style-one"><span class="btn-title">DISCOVER MORE</span></Link>
                </div>
            </div>
        </section>
        {/* <!--End Call To Action Two --> */}

        </>
    )
}
