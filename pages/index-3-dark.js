import React from "react";
import Layout from "../components/layout/Layout";
import Home3_Section1_Slider1 from "../components/sections/Home3/Home3_Section1_Slider1";
import Home3_Section2_About1 from "../components/sections/Home3/Home3_Section2_About1";
import Home3_Section3_Projects1 from "../components/sections/Home3/Home3_Section3_Projects1";
import Home3_Section4_Features1 from "../components/sections/Home3/Home3_Section4_Features1";
import Home3_Section5_Team1 from "../components/sections/Home3/Home3_Section5_Team1";
import Home3_Section6_Clients1 from "../components/sections/Home3/Home3_Section6_Clients1";
import Home3_Section7_Cta1 from "../components/sections/Home3/Home3_Section7_Cta1";
import Home3_Section8_Features2 from "../components/sections/Home3/Home3_Section8_Features2";
import Home3_Section9_Chooseus1 from "../components/sections/Home3/Home3_Section9_Chooseus1";
import Home3_Section10_News1 from "../components/sections/Home3/Home3_Section10_News1";
import Home3_Section11_Map1 from "../components/sections/Home3/Home3_Section11_Map1";
import Home3_Section12_Contact1 from "../components/sections/Home3/Home3_Section12_Contact1";
import Home3_Section13_Cta2 from "../components/sections/Home3/Home3_Section13_Cta2";

export default function Home3Dark() {
    return (
        <>
            <Layout HeaderStyle="three" styleMode="Dark">
                <Home3_Section1_Slider1 />
                <Home3_Section2_About1 />
                <Home3_Section3_Projects1 />
                <Home3_Section4_Features1 />
                <Home3_Section5_Team1 />
                <Home3_Section6_Clients1 />
                <Home3_Section7_Cta1 />
                <Home3_Section8_Features2 />
                <Home3_Section9_Chooseus1 />
                <Home3_Section10_News1 />
                <Home3_Section11_Map1 />
                <Home3_Section12_Contact1 />
                <Home3_Section13_Cta2 />
            </Layout>
        </>
    );
}
