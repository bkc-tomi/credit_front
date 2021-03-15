import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {

    return (
        <div 
            className="bg-yellow-500 text-black min-w-full min-h-screen"
        >
            <Head>
                <title>Credit</title>
                <meta property="og:title" content="Credit" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charset="utf-8" />
                <meta name="description" content="履歴書作りを少しだけ楽にするサイトです。必要な情報を登録して、PDFで出力のボタンを押すだけで簡単に履歴書が作れます。登録した情報はjsonファイルとしてインポート・エクスポートもできます。" />
                <meta name="keywords" content="履歴書,就活,アルバイト,PDF," />
            </Head>
            <Header />
            <div className="py-32">
                <div 
                    className="bg-white shadow-xl mx-2 md:mx-8 lg:mx-auto"
                    style={{ maxWidth: "1024px" }}
                >
                    { children }
                </div>
            </div>
        </div>
    );
}