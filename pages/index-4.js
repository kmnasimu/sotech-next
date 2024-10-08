import React from "react";
import Layout from "../components/layout/Layout";
import Home4_Section1_Slider1 from "../components/sections/Home4/Home4_Section1_Slider1";
import Home4_Section2_Clients1 from "../components/sections/Home4/Home4_Section2_Clients1";
import Home4_Section3_Services1 from "../components/sections/Home4/Home4_Section3_Services1";
import Home4_Section4_About1 from "../components/sections/Home4/Home4_Section4_About1";
import Home4_Section5_Projects1 from "../components/sections/Home4/Home4_Section5_Projects1";
import Home4_Section6_Chooseus1 from "../components/sections/Home4/Home4_Section6_Chooseus1";
import Home4_Section7_Cta1 from "../components/sections/Home4/Home4_Section7_Cta1";
import Home4_Section8_Pricing1 from "../components/sections/Home4/Home4_Section8_Pricing1";
import Home4_Section9_About2 from "../components/sections/Home4/Home4_Section9_About2";
import Home4_Section10_Team1 from "../components/sections/Home4/Home4_Section10_Team1";
import Home4_Section11_Contact1 from "../components/sections/Home4/Home4_Section11_Contact1";
import Home4_Section12_News1 from "../components/sections/Home4/Home4_Section12_News1";

export default function Home4() {
    return (
        <>
            <Layout HeaderStyle="four">
                <Home4_Section1_Slider1 />
                <Home4_Section2_Clients1 />
                <Home4_Section3_Services1 />
                <Home4_Section4_About1 />
                <Home4_Section5_Projects1 />
                <Home4_Section6_Chooseus1 />
                <Home4_Section7_Cta1 />
                <Home4_Section8_Pricing1 />
                <Home4_Section9_About2 />
                <Home4_Section10_Team1 />
                <Home4_Section11_Contact1 />
                <Home4_Section12_News1 />
            </Layout>
        </>
    );
}
