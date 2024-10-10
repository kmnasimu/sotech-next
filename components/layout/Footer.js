import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoDark from './../../public/images/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="bg bg-pattern-9" />
                <div className="bg-image" style={{ backgroundImage: 'url(images/background/8.jpg)' }} />
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-lg-3 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link href="/"><Image src={LogoDark} alt="Image"/></Link></div>
                                    <div className="text">Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</div>
                                    <ul className="social-icon-two">
                                        <li><Link href="/"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram" /></Link></li>
                                        <li><Link href="/"><i className="fab fa-facebook" /></Link></li>
                                        <li><Link href="/"><i className="fab fa-linkedin-in" /></Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/*Footer Column*/}
                            <div className="footer-column col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="widget-title">Explore</h5>
                                    <ul className="user-links">
                                        <li><Link href="/">About Company</Link></li>
                                        <li><Link href="/">Meet the Team</Link></li>
                                        <li><Link href="/">News & Media</Link></li>
                                        <li><Link href="/">Our Projects</Link></li>
                                        <li><Link href="/">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/*Footer Column*/}
                            <div className="footer-column col-lg-3 col-sm-6">
                                <div className="footer-widget contact-widget">
                                    <h5 className="widget-title">Contact</h5>
                                    <div className="widget-content">
                                        <div className="text">66 Road Broklyn Street, 600 New <br /> York, USA</div>
                                        <ul className="contact-info">
                                            <li><i className="fa fa-envelope" /> <Link href="/">needhelp@company.com</Link><br /></li>
                                            <li><i className="fa fa-phone-square" /> <Link href="/">+00 111 222 3333</Link><br /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-4 col-sm-8">
                                <div className="footer-widget gallery-widget">
                                    <h6 className="widget-title">Portfolio</h6>
                                    <div className="widget-content">
                                        <div className="outer clearfix">
                                            <figure className="image">
                                                <Link href="/"><img src="/images/resource/project-thumb-1.jpg" alt="Image" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="/"><img src="/images/resource/project-thumb-2.jpg" alt="Image" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="/"><img src="/images/resource/project-thumb-3.jpg" alt="Image" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="/"><img src="/images/resource/project-thumb-4.jpg" alt="Image" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="/"><img src="/images/resource/project-thumb-5.jpg" alt="Image" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="/"><img src="/images/resource/project-thumb-6.jpg" alt="Image" /></Link>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">&copy; Copyright reserved by <Link href="/">kodesolution.com</Link></div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;