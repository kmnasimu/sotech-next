import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import ContactMap from "../components/sections/Home3/Home3_Section11_Map1";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Contact Us" />
                <ContactInner />
                <ContactMap />
            </Layout>
        </>
    )
}
