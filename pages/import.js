import Layout from "../components/common/layout";
import Title from "../components/import/title";
import Description from "../components/import/description";
import Form from "../components/import/form";


export default function Import() {
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