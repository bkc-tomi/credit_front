import Link from "next/link";
import Title from "./title";

export default function Header() {
    return (
        <div className="fixed top-0 left-0 z-30 w-screen bg-gray-100 shadow-md grid grid-cols-8">
            <div className="col-span-1 m-auto">
                <Title width="120" height="60" />
            </div>
            <div className="col-span-7">
                <ul>
                    <li className="float-left p-3">
                        <Link href="/">
                            <a className="pl-2 text-xl leading-8 font-semibold hover:underline">Home</a>
                        </Link>
                    </li>
                    <li className="float-left p-3">
                        <Link href="/generate_pdf">
                            <a className="pl-2 text-xl leading-8 font-semibold hover:underline">Generate PDF</a>
                        </Link>
                    </li>
                    <li className="float-left p-3">
                        <Link href="/import">
                            <a className="pl-2 text-xl leading-8 font-semibold hover:underline">Import</a>
                        </Link>
                    </li>
                    <li className="float-left p-3">
                        <Link href="/export">
                            <a className="pl-2 text-xl leading-8 font-semibold hover:underline">Export</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}