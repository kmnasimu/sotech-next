import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header1 from './Header1';
import Header1Single from './Header1Single';
import Header2 from './Header2';
import Header2Single from './Header2Single';
import Header3 from './Header3';
import Header3Single from './Header3Single';
import Header4 from './Header4';
import Header4Single from './Header4Single';
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
            document.body.classList.remove("red-mode", "yellow-mode");
        } else if (styleMode === "Red") {
            document.body.classList.add("red-mode");
            document.body.classList.remove("yellow-mode", "dark-mode");
        } else if (styleMode === "Yellow") {
            document.body.classList.add("yellow-mode");
            document.body.classList.remove("dark-mode", "red-mode");
        }else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode", "red-mode", "yellow-mode");
        }
    }, [styleMode]);


    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">

                {!HeaderStyle && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one" && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one-single" && <Header1Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two" && <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two-single" && <Header2Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "three" && <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "three-single" && <Header3Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "four" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "four-single" && <Header4Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}

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