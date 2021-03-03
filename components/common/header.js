import Title from "./title";
import MyLink from "./link";

export default function Header() {
    return (
        <div className="fixed top-0 left-0 z-30 w-screen bg-gray-100 shadow-md grid md:grid-cols-8">
            <div className="md:col-span-1 m-auto w-28 md:w-32">
                <Title width="100%" height="100%" />
            </div>
            <div className="md:col-span-7 flex justify-center md:justify-start md:items-center">
                <ul>
                    <li className="float-left p-1 md:p-3">
                        <MyLink path="/" cls="pl-2 text-md md:text-xl leading-8">ホーム</MyLink>
                    </li>
                    <li className="float-left p-1 md:p-3">
                        <MyLink path="/generate_pdf" cls="pl-2 text-md md:text-xl leading-8">書類出力</MyLink>
                    </li>
                    <li className="float-left p-1 md:p-3">
                        <MyLink path="/import" cls="pl-2 text-md md:text-xl leading-8">インポート</MyLink>
                    </li>
                    <li className="float-left p-1 md:p-3">
                        <MyLink path="/export" cls="pl-2 text-md md:text-xl leading-8">エクスポート</MyLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}