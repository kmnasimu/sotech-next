import React from 'react';
import Link from 'next/link';

export default function Home2_Section14() {
    return (
        <>

        {/* <!-- Call To Action Four --> */}
        <section className="call-to-action-seven" style={{backgroundImage: 'url(images/background/10.png)'}}>
            <div className="auto-container">
                <div className="row">
                    <div className="image-column col-xl-5 col-lg-4">
                        <figure className="image mt-3 pt-1"><img src="images/resource/icon-logo-4.png" alt="" /></figure>
                    </div>
                    <div className="col-xl-7 col-lg-8">
                        <div className="outer-box">
                            <div className="title-box">
                                <h3 className="title">Free Consultation On Your <br />Very First Insurance</h3>
                            </div>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-one bg-light"><span className="btn-title">GET SOLUTION</span></Link>
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
