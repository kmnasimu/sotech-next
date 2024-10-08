import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import LogoDark from './../../public/images/logo.png';
import LogoWhite from './../../public/images/logo-2.png';

const Header4 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {

    return (
        <>

        <header className={`main-header header-style-six style-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="header-top">
                <div className="auto-container">
                    <div className="header-top-inner">
                        <div className="inner-container">
                            <div className="top-left">
                                <ul className="list-style-one">
                                    <li><i className="fa fa-envelope" /><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                    <li><i className="fa fa-map-marker-alt" />88 Broklyn Golden Street. New York</li>
                                </ul>
                            </div>

                            <div className="top-right">
                                <ul className="useful-links">
                                    <li><Link href="#">Help</Link></li>
                                    <li><Link href="#">Support</Link></li>
                                    <li><Link href="#">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="outer-box">
                            <ul className="social-icon-one">
                                <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                <li><Link href="#"><span className="fab fa-facebook-square" /></Link></li>
                                <li><Link href="#"><span className="fab fa-pinterest-p" /></Link></li>
                                <li><Link href="#"><span className="fab fa-instagram" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-lower">
                <div className="auto-container">
                    <div className="header-lower-inner">
                        <div className="main-box">
                            <div className="logo-box">
                                <div className="logo"><Link href=""><Image src={LogoDark} alt="Image" priority /></Link></div>
                            </div>
                            <div className="nav-outer">
                                <nav className="nav main-menu">
                                    <NavLinks/>
                                </nav>
                                <div className="outer-box">
                                    <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">BOOK A CONSULTATION</span></Link>
                                    <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo"><Link href=""><Image src={LogoDark} alt="Image" priority /></Link></div>
                        <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                    </div>
                    <MobileMenu/>
                    <ul className="contact-list-one">
                        <li>
                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset" />
                                <span className="title">Call Now</span>
                                <Link href="tel:+92880098670">+92 (8800) - 98670</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1" />
                                <span className="title">Send Email</span>
                                <Link href="mailto:help@company.com">help@company.com</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-clock" />
                                <span className="title">Send Email</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-pinterest" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                    </ul>
                </nav>
            </div>
            <div className="search-popup">
                <span className="search-back-drop"  onClick={handleToggle} />
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
            <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="inner-container">					
                        <div className="logo">
                            <Link href=""><Image src={LogoWhite} alt="Image" priority /></Link>
                        </div>					
                        <div className="nav-outer">						
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <MobileMenu/>
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        </>
    );
};

export default Header4;