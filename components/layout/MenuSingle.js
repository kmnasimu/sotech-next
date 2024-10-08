import Link from 'next/link';
import React from 'react';

const MenuSingle = () => {
    return (

        <ul className="navigation onepage-nav">
            <li className="current"><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#news">Blog</Link></li>
            <li><Link href="#contact">Contact</Link></li>
        </ul>

    );
};

export default MenuSingle;


