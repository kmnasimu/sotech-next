import React from 'react';
import Link from 'next/link';

export default function Home4_Section7() {

    return (
        <>

        <section className="call-to-action-six" style={{backgroundImage: 'url(images/background/12.jpg)'}}>
            <div className="auto-container">
                <div className="title-box">
                    <h1 className="title">IT Solutions & Services Right <br/>At Your Fingertips</h1>
                    <Link href="/page-services" className="theme-btn btn-style-one"><span className="btn-title">DISCOVER MORE</span></Link>
                </div>
            </div>
        </section>

        </>
    )
}