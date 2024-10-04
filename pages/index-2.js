import React from "react";
import Layout from "../components/layout/Layout";
import Home2_Section1_Slider1 from "../components/sections/Home2/Home2_Section1_Slider1";
import Home2_Section2_Features1 from "../components/sections/Home2/Home2_Section2_Features1";
import Home2_Section3_About1 from "../components/sections/Home2/Home2_Section3_About1";
import Home2_Section4_Services1 from "../components/sections/Home2/Home2_Section4_Services1";
import Home2_Section5_Projects1 from "../components/sections/Home2/Home2_Section5_Projects1";
import Home2_Section6_Testimonials1 from "../components/sections/Home2/Home2_Section6_Testimonials1";

export default function Home2() {
    return (
        <>
            <Layout HeaderStyle="two">
                <Home2_Section1_Slider1 />
                <Home2_Section2_Features1 />
                <Home2_Section3_About1 />
                <Home2_Section4_Services1 />
                <Home2_Section5_Projects1 />
                <Home2_Section6_Testimonials1 />
            </Layout>
        </>
    );
}
