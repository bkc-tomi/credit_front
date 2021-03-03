import Layout from "../components/common/layout";
import Title from "../components/export/title";
import Description from "../components/export/description";
import Form from "../components/export/form";

export default function Export() {
    return (
        <Layout>
            <div className="flex flex-col my-3 pb-10">
                <Title />

                <Description />
                
                <Form />
            </div>
        </Layout>
    )
}