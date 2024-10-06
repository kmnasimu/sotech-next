import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import LogoWhite from './../../public/images/logo.png';

const Header1Dark = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {

    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>

                <div className="header-top">
                    <div className="inner-container">
                        <div className="top-left">
                            {/* Social List */}
                            <ul className="social-icon-one light">
                                <li><Link href="/"><span className="fab fa-facebook-f" /></Link></li>
                                <li><Link href="/"><span className="fab fa-instagram" /></Link></li>
                                <li><Link href="/"><span className="fab fa-twitter" /></Link></li>
                                <li><Link href="/"><span className="fab fa-linkedin-in" /></Link></li>
                            </ul>
                        </div>
                        <div className="top-center">
                            {/* Info List */}
                            <ul className="list-style-one light">
                                <li><i className="far fa-envelope" /> <Link href="/">needhelp@company.com</Link></li>
                                <li><i className="far fa-map-marker" /> 88 Broklyn Golden Street. New York</li>
                            </ul>
                        </div>
                        <div className="top-right">
                            {/* Info List */}
                            <ul className="list-style-one style-two light">
                                <li><Link href="/">Help</Link></li>
                                <li><Link href="/">Support</Link></li>
                                <li><Link href="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="header-lower">
                    {/*Main Box*/}
                    <div className="main-box">

                        <div className="logo-box">
                            <div className="logo"><Link href="/"><Image src={LogoWhite} alt="Image" priority /></Link></div>
                        </div>

                        {/*Nav Box*/}
                        <div className="nav-outer">
                            {/*Main Menu*/}
                            <nav className="nav main-menu">
                                <NavLinks />
                            </nav>
                            {/*Main Menu End*/}
                        </div>
                        {/*Outer Box*/}
                        <div className="outer-box">

                            {/*Btn Box*/}
                            <div className="btn-box">
                                <Link href="/page-contact" className="theme-btn btn-style-one bg-dark"><span className="btn-title">BOOKING NOW</span></Link>
                            </div>

                            {/*Mobile Nav toggler*/}
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleRemove} />

                    {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><Image src={LogoWhite} alt="Image" priority /></Link></div>
                            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                <i className="icon lnr-icon-phone-handset" />
                                <span className="title">Call Now</span>
                                <div className="text"><Link href="/">+92 (8800) - 98670</Link></div>
                            </li>
                            <li>
                                <i className="icon lnr-icon-envelope1" />
                                <span className="title">Send Email</span>
                                <div className="text"><Link href="/">help@company.com</Link></div>
                            </li>
                            <li>
                                <i className="icon lnr-icon-map-marker" />
                                <span className="title">Address</span>
                                <div className="text">66 Broklyant, New York India 3269</div>
                            </li>
                        </ul>

                        <ul className="social-links">
                            <li><Link href="/"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="/"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="/"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="/"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>
                {/* End Mobile Menu */}


                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" onClick={handleToggle} />
                    <button className="close-search"  onClick={handleToggle}><span className="fa fa-times" /></button>

                    <div className="search-inner">
                        <form method="post" action="/">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}


                {/* Sticky Header */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/* Logo */}
                            <div className="logo">
                                <div className="nav-logo"><Link href="/"><Image src={LogoWhite} alt="Image" priority /></Link></div>
                            </div>

                            {/* Right Col */}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <MobileMenu />
                                    </div>
                                </nav>
                                {/* Main Menu End */}

                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}

            </header>
        </>
    );
};

export default Header1Dark;