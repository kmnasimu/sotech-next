import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const [isSubActive, setSubIsActive] = useState({
        status: false,
        key: "",
    });

    const handleSubClick = (key) => {
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false,

            });
        } else {
            setSubIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>
            <ul className="navigation clearfix">

                <li className="current dropdown"><Link href="/">Home</Link>
                    <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                        <li><Link href="/">Home Layout 1</Link></li>
                        <li><Link href="/index-2">Home Layout 2</Link></li>
                        <li><Link href="/index-3">Home Layout 3</Link></li>
                        <li><Link href="/index-4">Home Layout 4</Link></li>
                        <li><Link href="/index-5">Home Layout 5</Link></li>
                        <li><Link href="/index-6">Home Layout 6</Link></li>
                        <li><Link href="/index-7">Home Layout 7</Link></li>
                        <li><Link href="/index-8">Home Layout 8</Link></li>
                        <li><Link href="/index-9">Home Layout 9</Link></li>
                        <li className="dropdown"><Link href="/">Dark Layouts</Link>
                            <ul className={isSubActive.key === 9 ? "d-block" : "d-none"}>
                                <li><Link href="/index-1-dark">Home Dark 1</Link></li>
                                <li><Link href="/index-2-dark">Home Dark 2</Link></li>
                                <li><Link href="/index-3-dark">Home Dark 3</Link></li>
                                <li><Link href="/index-4-dark">Home Dark 4</Link></li>
                                <li><Link href="/index-5-dark">Home Dark 5</Link></li>
                                <li><Link href="/index-6-dark">Home Dark 6</Link></li>
                                <li><Link href="/index-7-dark">Home Dark 7</Link></li>
                                <li><Link href="/index-8-dark">Home Dark 8</Link></li>
                                <li><Link href="/index-9-dark">Home Dark 9</Link></li>
                            </ul>
                            <div className={isSubActive.key === 9 ? "dropdown-btn active" : "dropdown-btn"}
                                onClick={() => handleSubClick(9)}><i className="fa fa-angle-down"></i></div></li>
                        <li className="dropdown"><Link href="/">Header Styles</Link>
                            <ul className={isSubActive.key === 9 ? "d-block" : "d-none"}>
                                <li><Link href="/">Header Style 1</Link></li>
                                <li><Link href="/index-2">Header Style 2</Link></li>
                                <li><Link href="/index-3">Header Style 3</Link></li>
                                <li><Link href="/index-4">Header Style 4</Link></li>
                                <li><Link href="/index-5">Header Style 5</Link></li>
                                <li><Link href="/index-6">Header Style 6</Link></li>
                                <li><Link href="/index-7">Header Style 7</Link></li>
                                <li><Link href="/index-8">Header Style 8</Link></li>
                                <li><Link href="/index-9">Header Style 9</Link></li>
                            </ul>
                            <div className={isSubActive.key === 9 ? "dropdown-btn active" : "dropdown-btn"}
                                onClick={() => handleSubClick(9)}><i className="fa fa-angle-down"></i></div></li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down"></i></div>
                </li>
                <li className="dropdown"><Link href="/">Pages</Link>
                    <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
                        <li><Link href="/page-about">About</Link></li>

                        <li className="dropdown"><Link href="/">Team</Link>
                            <ul className={isSubActive.key === 2 ? "d-block" : "d-none"}>
                                <li><Link href="/page-team">Team List</Link></li>
                                <li><Link href="/page-team-details">Team Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"}
                                onClick={() => handleSubClick(2)}><i className="fa fa-angle-down"></i></div></li>
                        <li><Link href="/page-testimonial">Testimonial</Link></li>
                        <li><Link href="/page-pricing">Pricing</Link></li>
                        <li><Link href="/page-faq">FAQ</Link></li>
                        <li><Link href="/page-404">Page 404</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down"></i></div></li>
                <li className="dropdown"><Link href="/">Services</Link>
                    <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                        <li><Link href="/page-services">Services</Link></li>
                        <li><Link href="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i className="fa fa-angle-down"></i></div></li>
                <li className="dropdown"><Link href="/">Projects</Link>
                    <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
                        <li><Link href="/page-projects">Projects List</Link></li>
                        <li><Link href="/page-project-details">Project Details</Link></li>
                    </ul>
                    <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}><i className="fa fa-angle-down"></i></div></li>
                <li className="dropdown"><Link href="/">News</Link>
                    <ul className={isActive.key === 5 ? "d-block" : "d-none"}>
                        <li><Link href="/news-grid">News Grid</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i className="fa fa-angle-down"></i></div></li>
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>

        </>
    );
};

export default MobileMenu;