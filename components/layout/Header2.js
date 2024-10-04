import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import LogoWhite from './../../public/images/logo.png';
import LogoDark from './../../public/images/logo-2.png';

const Header2 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {



    return (
        <>

        <header className={`main-header header-style-two style-transparent ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            <div class="header-top">
                <div class="inner-container">
                    <div class="top-left">
                        <ul class="list-style-one">
                            <li><i class="fa fa-envelope" /><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                            <li><i class="fa fa-map-marker-alt" /> 88 Broklyn Golden Street. New York</li>
                        </ul>
                    </div>
                    <div class="top-right">
                        <ul class="useful-links">
                            <li><Link href="#">Help</Link></li>
                            <li><Link href="#">Support</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="outer-box">
                    <ul class="social-icon-one">
                        <li><Link href="#"><span class="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><span class="fab fa-facebook-square" /></Link></li>
                        <li><Link href="#"><span class="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="#"><span class="fab fa-instagram" /></Link></li>
                    </ul>
                </div>
            </div>
            <div class="header-lower">
                <div class="main-box">
                    <div class="logo-box">
                        <div className="logo"><Link href="/"><Image src={LogoDark} title='Sotech' /></Link></div>
                    </div>
                    <div class="nav-outer">
                        <nav class="nav main-menu">
                            <NavLinks />
                        </nav>
                    </div>
                    <div class="outer-box">
                        <div class="ui-btn-outer">
                            <button class="ui-btn ui-btn search-btn" onClick={handleToggle}>
                                <span class="icon lnr lnr-icon-search" />
                            </button>
                            <Link href="#" class="ui-btn"><i class="lnr-icon-shopping-cart" /></Link>
                        </div>
                        <div class="mobile-nav-toggler" onClick={handleOpen}><span class="icon lnr-icon-bars" /></div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu">
                <div class="menu-backdrop" onClick={handleRemove} />
                <nav class="menu-box">
                    <div class="upper-box">
                        <div className="nav-logo"><Link href="/"><Image src={LogoDark} title='Sotech' /></Link></div>
                        <div class="close-btn"><i class="icon fa fa-times" /></div>
                    </div>
                    <MobileMenu/>
                    <ul class="contact-list-one">
                        <li>
                            <div class="contact-info-box">
                                <i class="icon lnr-icon-phone-handset" />
                                <span class="title">Call Now</span>
                                <Link href="tel:+92880098670">+92 (8800) - 98670</Link>
                            </div>
                        </li>
                        <li>
                            <div class="contact-info-box">
                                <span class="icon lnr-icon-envelope1" />
                                <span class="title">Send Email</span>
                                <Link href="mailto:help@company.com">help@company.com</Link>
                            </div>
                        </li>
                        <li>
                            <div class="contact-info-box">
                                <span class="icon lnr-icon-clock" />
                                <span class="title">Send Email</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>
                    <ul class="social-links">
                        <li><Link href="#"><i class="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i class="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i class="fab fa-pinterest" /></Link></li>
                        <li><Link href="#"><i class="fab fa-instagram" /></Link></li>
                    </ul>
                </nav>
            </div>
            <div class="search-popup">
                <span class="search-back-drop" onClick={handleToggle} />
                <button class="close-search" onClick={handleToggle}><span class="fa fa-times" /></button>
                <div class="search-inner">
                    <form method="post" action="/">
                        <div class="form-group">
                            <input type="search" name="search-field" value="" placeholder="Search..." required="" />
                            <button type="submit"><i class="fa fa-search" /></button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="sticky-header">
                <div class="auto-container">
                    <div class="inner-container">
                    <div className="logo"><Link href="/"><Image src={LogoDark} title='Sotech' /></Link></div>
                        <div class="nav-outer">
                            <nav class="main-menu">
                                <div class="navbar-collapse show collapse clearfix">
                                    <MobileMenu/>
                                </div>
                            </nav>
                            <div class="mobile-nav-toggler" onClick={handleOpen}><span class="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!--End Main Header --> */}

        </>
    );
};

export default Header2;