import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceGrid from "../components/sections/ServiceGrid";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Service Grid" />
                <ServiceGrid />
            </Layout>
        </>
    )
}
