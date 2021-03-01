import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {

    return (
        <div 
            className="bg-yellow-500 text-black min-w-full min-h-screen"
        >
            <Head>
                <title>Credit</title>
                <meta property="og:title" content="My new title" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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