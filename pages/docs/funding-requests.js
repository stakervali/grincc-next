export default function Home() {
    return (
        <div className="my-container ">
            <h1 className="header-1 w-full mx-auto " >Funding requests</h1>

            <div className="py-4">
            <h2 className="header-2" >Summary</h2>
            <p>In this document we outline the procedure and protocol of handling funding requests. This document serves as a guideline and reference point for Funding Requests applicants, the community and the community council which have to judge and approve these requests. Funding Requests can only be granted upon discussion and an official vote to approve the request in a Grin Community Council meeting (biweekly meetings in Grin #General on Keybase).</p>
            </div>

            <div className="py-4">
            <h3 className="header-2 ">Funding</h3>
            <p>Funding request can be made in any currency. However, for the ease of discussing we prefer requests are made in major currencies like euros or dollars. We advise to make a funding request in the following format:
                <ul className="pl-4 pt-2" >
                    <li>a) Total amount of funding to be paid upon completion of the project</li>
                    <li>b) Total amount of funding, sub payments to be made upon completion of predefined milestones</li>
                    <li>c)  Any other funding model if the applicant can provide good arguments to deviate from option a) and b)</li>
                </ul>

            </p>
            </div>

            <div className="py-4">
                <h2 className="header-2">Payments</h2>
                <p>
                    Payments will be made after reviewing the completed project or completed project milestones. Payments will by default be made 90% in BTC and 10% in Grin unless otherwise requested by the applicant. Payment in both Grin and Bitcoin will be based on the monthly average value equivalent of the requested amount. In case an applicant prefers to be paid less than the default 10%, sound argumentation why this deviation is required are expected.
                </p>
            </div>

            <div className="py-4">
                <h2 className="header-2">Motivation</h2>
                <p>
                    As Grin Community Council we want to stimulate adoption of Grin and day to day use by community members and developers alike. There is a general agreement in the community that Grin should be used in day-to-day life and as such that it would be desirable to use Grin in paying funding requests. There are however different opinions on the speed at which Grin's adoption should be pushed as well as practical objections such as the fact that developers could incur additional costs if they require conversion of Grin -> BTC -> fiat currency to meet their daily costs. For the default payment of 10% in Grin, these losses would be not very significant. Over time as ecosystem and the liquidity of Grin will grow organically, the base percentage of 10% payment in Grincan be increased accordingly.
                </p>
            </div>

        </div>
    )
}