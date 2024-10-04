import React from 'react';
import Layout from "../components/layout/Layout";
import Home3_Section3_About3 from "../components/sections/Home3/Home3_Section3_About3";
import Home2_Section3_Service2 from "../components/sections/Home2/Home2_Section3_Service2";
import Home8_Section7_Video2 from "../components/sections/Home8/Home8_Section7_Video2";
import Home1_Section6_Project1 from "../components/sections/Home1/Home1_Section6_Project1";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one" darkMode="0">
                <PageTitle pageName="About Us" />
                <Home3_Section3_About3 />
                <Home2_Section3_Service2 />
                <Home8_Section7_Video2 />
                <Home1_Section6_Project1 />
            </Layout>
        </>
    )
}
