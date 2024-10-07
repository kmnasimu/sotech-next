import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import PageHead from './PageHead';

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode}) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0)
    const handleToggle = () => setSearchToggled(!searchToggle);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    }

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    }

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);


    useEffect(() => {
        if (styleMode === "Dark") {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode", "yellow-mode");
        } else if (styleMode === "Yellow") {
            document.body.classList.add("yellow-mode");
            document.body.classList.remove("light-mode", "dark-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode", "yellow-mode");
        }
    }, [styleMode]);


    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">

                {!HeaderStyle && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one" && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two" && <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "three" && <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "four" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}

                {/* <Sidebar /> */}

                {children}

                {!FooterStyle && <Footer />}
            </div>
            {/* <BackToTop /> */}

            <BackToTop />
        </>
    );
};

export default Layout;