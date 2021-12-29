import React from 'react';
import RightArrow from "../../components/icons/rightArrow";
import Check from "../../components/icons/check";
import Footer from "../../components/footer";

function Index(props) {

    let meetingSummaries = [
        {
            date:"December 21, 2021",
            agendaPoints : [
                "Preview of grincc website.",
                "Request for funding Groundskeeper @stakervali Dec-Feb 2021/22.",
                "Sponsoring the Area 51 Community drafting lottery with e.g. 51 ツ in Price money.",
            ],
            link: "/meetings/december-21-2021"
        },
        {
            date:"December 7, 2021",
            agendaPoints : [
                "Upbit listing proposal.",
                "Inflation bugs bounty.",
                "Request for funding Groundskeeper @jankie Dec-Feb 2021/22.",
                "Update on payment for @scilio's coinswap implementation - milestone 1.",
                "Development update by @yeastplume"
            ],
            link: "/meetings/december-07-2021"
        },
        {
            date:"November 23, 2021",
            agendaPoints : [
                "Bounty idea for adding Grin to THORchain native coin alongside monero & bitcoin.",
                "Generation of transaction logs for public visibilty",
                "Updates on Grin-Exchange progress! (Bisq, Kucoin, Gate.io, Hotbit)",
                "Proposal for the Grin CC to buy around 0.5BTC 1 BTC (1BTC = 50k € ) worth in GRIN.",
                "Funding slatepacks.com hosting costs",
                "Discussion of Extending grin-wallet command line tool so that it can parse recovery seeds from a file",
                "Review of @scilio 's coinswap implementation milestone 1 and approval to start on milestone2"
            ],
            link: "/meetings/november-23-2021"
        },
        {
            date:"November 9, 2021",
            agendaPoints : [
                "Grin integration with Bisq DEX."
            ],
            link: "/meetings/november-09-2021"
        },
        {
            date:"October 12, 2021",
            agendaPoints : [
                "Request for funding @davidtavarez Nov-Jan 2021/22.",
                "Groundkeepers task list finalization.",
                "Situation of Purchasing G1 MINI Asics.",
                "Atomic swap funding payment delay."
            ],
            link: "/meetings/october-12-2021"
        },
        {date:"September 28, 2021",
            agendaPoints : [
                "Atomic Swap PR: status and next steps.",
                "Implementation of multiple named wallets in the grin-wallet system by sheldonth.",
                "Miners: next steps."
            ],
            link: "/meetings/september-28-2021"
        },

        {date:"September 14, 2021",
            agendaPoints : [
                "review of task-list from @jankie1800 and @defistaker.",
                "Contact OC for payment transfer and if needed clarifications.",
                "G1 miners sold out. Discuss alternatives such as a) to buy a large number of G1 mini's and how to manage them b) scale down on the buying.",
                "Organization of MW GRIN / Berlin Meetup group.",
                "Discuss options to update grin website and development of grincc website."
            ],
            link: "meetings/september-14-2021"
        },
        {date:"August 31, 2021",
            agendaPoints : [
                "Discuss and vote on proposal to make XX% payment in Grin default for Funding Requests.",
                "TradeOgre's grin integration issue",
                "Compensation for CC meeting notes documentation for @jankie1800 and @stakervali",
                "Request for Funding @scilio (CoinSwap Implementation )"
            ],
            link: "meetings/august-31-2021"
        },
        {date:"August 17, 2021",
            agendaPoints : [
                "Paying all Community Council funding request at least for XX% in Grin.",
                "Complete voting for mining equipment purchase.",
                "GRIN CC security proofs (Proposed procedure will be voted.)."
            ],
            link: "meetings/august-17-2021"
        },
        {date:"August 10, 2021",
            agendaPoints : [
                "Discussion of community feedback and formal plan for community mining.",
                "Voting for final decision."
            ],
            link: "https://google.com"
        },
        {date:"August 03, 2021",
            agendaPoints : [
                "Funds transfer from core to cc.",
                "Community pool",
                "Advancement of the CoinSwap Proposal ( forum link )",
                "Manual confirmation of an incoming transaction mimblewimble/grin-rfcs#84",
                "Community minining equipment purchase"
            ],
            link: "meetings/august-03-2021"
        },
        {date:"July 20, 2021",
            agendaPoints : [
                "Funds transfer from core to cc.",
                "Status of PR#606 Add the parameter confirmed_height to retrieve_tx owner_api method mimblewimble/grin-wallet#606",
                "Community pool.",
                "Funding request : https://forum.grin.mw/t/request-for-funding-mwgrin-fr/8888/15"

            ],
            link: "meetings/july-20-2021"
        },
        {date:"July 06, 2021",
            agendaPoints : [
                "Status multi-sig address",
                "Fund spending guidelines review",
                "Setting up a Grin Community Council Grin node with donation address",
                "Mining equipment purchase",
                "Determining an hour of meeting that is convenient for all council members"
            ],
            link: "meetings/july-06-2021"
        },
        {date:"June 22, 2021",
            agendaPoints : [
                "Status of the multi-sig address.",
                "New github organisation links, etc",
                "Status of spending rules",
                "Request for funding : @mwgrin_fr video tutorials for wallet-cli usage scenarios",
                "Grin fund for mining"
            ],
            link: "meetings/june-22-2021"
        },
    ]

    let meetingItems = meetingSummaries.map((d)=>{
        return (
            <div className=" md:w-full px-8 mb-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{d.date} meeting agenda</h2>
                {/*<h3 className="text-lg">Agenda points</h3>*/}
                {d.agendaPoints.map(p=>{
                    return (
                        <p className="leading-relaxed text-base my-2">
                            <Check />
                            {p}
                        </p>
                    )
                })}
                <a className="text-primary inline-flex  items-center" href={d.link} >View notes
                    <RightArrow />
                </a>
            </div>
        )
    })

    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Grin Community Meetings </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Grin Community meetings are held biweekly on tuesdays, generally the second and fourth weeks of the month.
                    Agenda for meetings are publicly open at <a href="https://github.com/grincc/agenda/issues">grincc/agenda</a> repo.
                    </p>
                    <h2 className="mt-4 py-1 px-8 text-xs bg-primary flex mx-auto w-max text-white rounded-md  tracking-widest font-medium title-font mb-1"> <a href="https://github.com/grincc/agenda/issues/18"> Add a topic to next meeting's Agenda </a>  </h2>
                </div>
                <div className="flex flex-wrap">
                    {meetingItems}
                </div>


            </div>
        </section>

    );
}

export default Index;