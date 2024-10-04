import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Home1_Section1_Slider1 from "../components/sections/Home1/Home1_Section1_Slider1";


export default function Home1() {
    return (
        <>
            <Layout HeaderStyle="onedark" darkMode="1">
                <Home1_Section1_Slider1 />
            </Layout>
        </>
    );
}
