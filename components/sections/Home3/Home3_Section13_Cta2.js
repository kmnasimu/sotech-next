import React from 'react';
import Link from 'next/link';


export default function Home3_Section13() {
    return (
        <>

        {/* <!-- Call To Action Four --> */}
        <section className="call-to-action-four" style={{backgroundImage: 'url(images/background/4.jpg)'}}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="title-box">
                        <div className="sub-title">We’re here to help to grow your business</div>
                        <h3 className="title">Get Free Consultancy or +1 (800) 123 446 559</h3>
                    </div>
                    <div className="btn-box">
                        <Link href="page-about" className="theme-btn btn-style-one bg-light"><span className="btn-title">GET SOLUTION</span></Link>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Call To Action Four --> */}

        </>
    )
}