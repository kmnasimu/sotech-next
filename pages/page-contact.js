import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import Home9_Section9_Map from '../components/sections/Home9/Home9_Section9_Map';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Contact" />
                <ContactInner />
                <Home9_Section9_Map />
            </Layout>
        </>
    )
}
