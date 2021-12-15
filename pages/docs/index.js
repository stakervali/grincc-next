import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1 className="text-6xl text-yellow">Documents</h1>

            <ul>
                <li>
                    <Link href="/docs/approval-scheme">
                        <a className="">Approval Scheme </a>
                    </Link>
                </li>
                <li>
                    <Link href="/docs/funding-requests">
                        <a className="">Funding Requests </a>
                    </Link>
                </li>
                <li>
                    <Link href="/docs/spending-guidelines">
                        <a className="">Spending Guidelines </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}