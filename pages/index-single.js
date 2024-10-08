import React from "react";
import Layout from "../components/layout/Layout";
import Home1_Section1_Slider1 from "../components/sections/Home1/Home1_Section1_Slider1";
import Home1_Section2_Features1 from "../components/sections/Home1/Home1_Section2_Features1";
import Home1_Section3_About1 from "../components/sections/Home1/Home1_Section3_About1";
import Home1_Section4_Services1 from "../components/sections/Home1/Home1_Section4_Services1";
import Home1_Section5_Cta1 from "../components/sections/Home1/Home1_Section5_Cta1";
import Home1_Section6_Projects1 from "../components/sections/Home1/Home1_Section6_Projects1";
import Home1_Section7_Testimonials from "../components/sections/Home1/Home1_Section7_Testimonials";
import Home1_Section8_Funfact1 from "../components/sections/Home1/Home1_Section8_Funfact1";
import Home1_Section9_Offer1 from "../components/sections/Home1/Home1_Section9_Offer1";
import Home1_Section10_Team1 from "../components/sections/Home1/Home1_Section10_Team1";
import Home1_Section11_Clients1 from "../components/sections/Home1/Home1_Section11_Clients1";
import Home1_Section12_Contact1 from "../components/sections/Home1/Home1_Section12_Contact1";
import Home1_Section13_News1 from "../components/sections/Home1/Home1_Section13_News1";


export default function Home1Single() {
    return (
        <>
            <Layout HeaderStyle="one-single">
                <Home1_Section1_Slider1 />
                <Home1_Section2_Features1 />
                <Home1_Section3_About1 />
                <Home1_Section4_Services1 />
                <Home1_Section5_Cta1 />
                <Home1_Section6_Projects1 />
                <Home1_Section7_Testimonials />
                <Home1_Section8_Funfact1 />
                <Home1_Section9_Offer1 />
                <Home1_Section10_Team1 />
                <Home1_Section11_Clients1 />
                <Home1_Section12_Contact1 />
                <Home1_Section13_News1 />
            </Layout>
        </>
    );
}
