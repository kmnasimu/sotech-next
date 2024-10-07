import React from 'react';
import Link from 'next/link';

export default function Home2_Section14() {
    return (
        <>

        {/* <!-- Call To Action Four --> */}
        <section class="call-to-action-seven" style={{backgroundImage: 'url(images/background/10.png)'}}>
            <div class="auto-container">
                <div class="row">
                    <div class="image-column col-xl-5 col-lg-4">
                        <figure class="image mt-3 pt-1"><img src="images/resource/icon-logo-4.png" alt="" /></figure>
                    </div>
                    <div class="col-xl-7 col-lg-8">
                        <div class="outer-box">
                            <div class="title-box">
                                <h3 class="title">Free Consultation On Your <br />Very First Insurance</h3>
                            </div>
                            <div class="btn-box">
                                <Link href="/page-about" class="theme-btn btn-style-one bg-light"><span class="btn-title">GET SOLUTION</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Call To Action Four --> */}

        </>
    )
}
