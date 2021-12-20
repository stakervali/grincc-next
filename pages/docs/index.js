import Link from 'next/link'

export default function Home() {
    return (
        <section className="my-container">
            <h1 className="header-1 bg-indigo-500">Documents</h1>

            <ul>
                <li className="my-2" >
                    <Link href="/docs/approval-scheme">
                        <a className="header-2 bg-indigo-500 " >Approval Scheme </a>
                    </Link>
                </li>
                <li>
                    <Link href="/docs/funding-requests">
                        <a className="header-2 bg-gray-400">Funding Requests </a>
                    </Link>
                </li>
                <li>
                    <Link href="/docs/spending-guidelines">
                        <a className="header-2">Spending Guidelines </a>
                    </Link>
                </li>
            </ul>
        </section>
    )
}