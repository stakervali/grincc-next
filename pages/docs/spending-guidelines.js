import RhombusItem from "../../components/icons/rhombusItem";

export default function Home() {
    return (
        <div className="my-container">
            <h1 className="header-1">Spending Guidelines</h1>

            <div className="py-4">
                <h2 className="header-2">Summary</h2>
                <p>This document is meant be to used as base guidelines for spending the Grin Community Council Fund, stating which uses are appropriate and which are not.</p>
            </div>

            <div className="py-4">
                <h2 className="header-2">Motivation</h2>
                <p>Recently, the Grin Community Council was formed with community members with a deep interest in helping Grin grow. Since the Grin Community Council manages funds, it is necessary to have a transparent list of appropriate uses.</p>
            </div>

            <div className="py-4">


            <h2 className="header-2">Community-level explanation</h2>
                <div className="py-4">
            <h3 className="text-gray-700 text-lg">Appropriate use of the Funds</h3>
            <p>
                Funds should be invested solely on activities related to Grin, without exceptions.

                <ul className="pl-4 pt-2">
                    <li><RhombusItem /> Research and Development in areas related to Grin or Mimblewimble in general</li>
                    <li><RhombusItem /> Fully open-sourced, community-based projects that enhance the Grin ecosystem</li>
                    <li><RhombusItem /> Supporting non-profit, community-driven and inclusive promotional efforts for the Grin Community</li>
                    <li><RhombusItem /> Supporting events and/or activities specificly related to Grin (i.e. conferences)</li>
                    <li><RhombusItem /> Projects and/or Ideas oriented to strengthen and/or secure Grin</li>
                </ul>

            </p>
                </div>

                <div className="py-4">
            <h3 className="text-gray-700 text-lg">Inappropriate use of Funds </h3>
            <p>Financing actions that can harm Grin as a Project is forbidden. A formal list of harmful actions listed below </p>
            <ul>
                <li>Financing projects incompatible with current RFC, as they could lead to a fork.</li>
                <li>Funding art which is vulgar and explicitly offends a person or a group of people.</li>
                <li>Covering the expenses of resources for illegal purposes, such as causing DDoS attack of someone's service for example.</li>
                <li>Investing money in physical or digital assets.</li>
            </ul>
                </div>

                <div className="py-4">
                <h3 className="text-gray-700 text-lg">Decision Process</h3>
            <p>
                The discussions regarding spending the funds should always be public on an open pre-announced channel and every community member is invited to participate in these discussions. The Community Council will never make a decision without having clear:
                <ul className="pl-4 pt-2">
                    <li><RhombusItem /> To whom the funds will be transferred.</li>
                    <li><RhombusItem /> How the expense will be helpful for Grin.</li>
                    <li><RhombusItem /> How much funds will be spent.</li>
                    <li><RhombusItem /> If the expense will be a one time or require multiple rounds of financing?</li>
                </ul>
            </p>
            <p>
                Some rules will be established during the discussions to clarify how the accountability process will be.
            </p>
            <p>
                The Grin Community Council will provide response to the request within X days (until the nearest meeting) which will contain one of the following:
            </p>

            <ul>
                <li><RhombusItem /> Approval</li>
                <li><RhombusItem /> Denial accompagned with formal reason and decision if re-application would be accepted, and if, guidelines what should be changed</li>
                <li><RhombusItem /> Request for decision deadline extension for another X days (until nearest meeting) along with justification why deadline is required</li>
                <li><RhombusItem /> Request for further details, accompanied by a list of questions.</li>
            </ul>
                </div>
                <div className="py-4">
            <h3 className="text-gray-700 text-lg">Reporting</h3>
            <p>
                The result of all funding decisions will be published in the meeting notes found in the Grin Community Fund repository. It is mandatory to publish a detailed spending log of all transactions made in and out of the funds.
            </p>
                </div>
            </div>
        </div>
    )
}