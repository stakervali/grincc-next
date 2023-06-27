import Link from 'next/link'

export default function ApprovalScheme() {
    return (
        <div className="my-container">
            <h1 className="header-1" >Approval Scheme</h1>

            <p>
                As all members of the GRIN community council all have owner roles on this repository, the following rules for approvals of pull-requests(PR) are suggested:
            </p>

            <table className="table border-green-200 mt-8 mx-auto  dark:bg-black  ">
                <thead   >
                    <tr >
                        <th   >Repository</th>
                        <th>Required members of CC for PR</th>
                        <th>notes</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td><Link href="https://github.com/grincc/agenda"><a>agenda</a></Link> </td>
                         <td className="text-center">1</td>
                         <td>CC meeting notes, etc</td>
                    </tr>
                    <tr>
                        <td><Link href="https://github.com/grincc/hub"><a>hub</a></Link> </td>
                         <td className="text-center">1</td>
                         <td>code, tools, sites, memes, marketing, art</td>
                    </tr>
                    <tr>
                        <td><Link href="https://github.com/grincc/security"><a>security</a></Link> </td>
                        <td  className="text-center">4</td>
                        <td>signing, verifying</td>
                    </tr>
                    <tr>
                        <td><Link href="https://github.com/grincc/finance"><a>finance</a></Link> </td>
                        <td  className="text-center">4</td>
                        <td>public CC fund documentation</td>
                    </tr>
                    <tr>
                        <td><Link href="https://github.com/grincc/docs"><a>docs</a></Link> </td>
                        <td  className="text-center">2</td>
                        <td>CC related documents</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}
