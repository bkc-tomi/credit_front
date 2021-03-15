import Layout from "../components/common/layout";
import Title from "../components/export/title";
import Description from "../components/export/description";
import Form from "../components/export/form";

export default function Export() {
    return (
        <Layout>
            <div className="flex flex-col my-3 pb-10">
                <Title />
                <h1 className="text-2xl text-center">現在作成中</h1>
                <Description />
                
                <Form />
            </div>
        </Layout>
    )
}