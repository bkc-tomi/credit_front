import Layout from "../components/common/layout";
import Title from "../components/generate_pdf/title";
import Form from "../components/generate_pdf/form";
import { useState, useEffect } from "react";

export default function GeneratePdf() {
    const [flug, setFlug] = useState(false);
    useEffect(() => {
        (async() => {
            // herokuに事前にリクエストを送り立ち上げる。
            const res = await fetch("http://localhost:8000/starter/", { mode: 'cors' });
            const text = await res.text();
            if (text == "started") {
                // バックエンドの準備ができたらボタンをアクティブ
                setFlug(true);
                console.log(text);
            }
        })();
    }, []);
    return (
        <Layout>
            <div className="flex flex-col my-3 pb-10">
                <Title />
                <h1 className="text-2xl text-center">現在作成中</h1>
                <Form flug={ flug } />
            </div>
        </Layout>
    )
}