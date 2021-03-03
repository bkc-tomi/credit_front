import Layout from "../components/common/layout";
import Title from "../components/generate_pdf/title";
import Form from "../components/generate_pdf/form";

export default function GeneratePdf() {
    return (
        <Layout>
            <div className="flex flex-col my-3 pb-10">
                <Title />

                <Form />
            </div>
        </Layout>
    )
}