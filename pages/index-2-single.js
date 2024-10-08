import React from "react";
import Layout from "../components/layout/Layout";
import Home2_Section1_Slider1 from "../components/sections/Home2/Home2_Section1_Slider1";
import Home2_Section2_Features1 from "../components/sections/Home2/Home2_Section2_Features1";
import Home2_Section3_About1 from "../components/sections/Home2/Home2_Section3_About1";
import Home2_Section4_Services1 from "../components/sections/Home2/Home2_Section4_Services1";
import Home2_Section5_Projects1 from "../components/sections/Home2/Home2_Section5_Projects1";
import Home2_Section6_Testimonials1 from "../components/sections/Home2/Home2_Section6_Testimonials1";
import Home2_Section7_Offer1 from "../components/sections/Home2/Home2_Section7_Offer1";
import Home2_Section8_Funfact1 from "../components/sections/Home2/Home2_Section8_Funfact1";
import Home2_Section9_About2 from "../components/sections/Home2/Home2_Section9_About2";
import Home2_Section10_About3 from "../components/sections/Home2/Home2_Section10_About3";
import Home2_Section11_Contact1 from "../components/sections/Home2/Home2_Section11_Contact1";
import Home2_Section12_Features2 from "../components/sections/Home2/Home2_Section12_Features2";
import Home2_Section13_News1 from "../components/sections/Home2/Home2_Section13_News1";
import Home2_Section14_Cta1 from "../components/sections/Home2/Home2_Section14_Cta1";

export default function Home2Single() {
    return (
        <>
            <Layout HeaderStyle="two-single">
                <Home2_Section1_Slider1 />
                <Home2_Section2_Features1 />
                <Home2_Section3_About1 />
                <Home2_Section4_Services1 />
                <Home2_Section5_Projects1 />
                <Home2_Section6_Testimonials1 />
                <Home2_Section7_Offer1 />
                <Home2_Section8_Funfact1 />
                <Home2_Section9_About2 />
                <Home2_Section10_About3 />
                <Home2_Section11_Contact1 />
                <Home2_Section12_Features2 />
                <Home2_Section13_News1 />
                <Home2_Section14_Cta1 />
            </Layout>
        </>
    );
}
