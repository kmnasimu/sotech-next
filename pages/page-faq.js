import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import FaqInner from "../components/sections/FaqInner";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="FAQ" />
                <FaqInner />
            </Layout>
        </>
    )
}
