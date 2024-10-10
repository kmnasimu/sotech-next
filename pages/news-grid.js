import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import NewsGrid from "../components/sections/NewsGrid";

export default function PageBlogGrid() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="News Grid" />
                <NewsGrid />
            </Layout>
        </>
    )
}
