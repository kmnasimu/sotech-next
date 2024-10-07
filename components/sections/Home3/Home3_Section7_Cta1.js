import React from 'react';
import Link from 'next/link';

export default function Home3_Section7() {
    return (
        <>

        <section className="call-to-action-eight" style={{backgroundImage: 'url(images/icons/shape-tm-10.jpg)'}}>
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
