import Link from "next/link";

export default function MyLink({ path="", cls="", children }) {
    const applyCls = `hover:underline font-semibold ${ cls }`;
    return (
        <Link href={ path }>
            <a className={ applyCls }>
                { children }
            </a>
        </Link>
    )
}