import React, {useEffect, useState} from 'react';
import RightArrow from "../../assets/icons/rightArrow";
import Check from "../../assets/icons/check";
import Footer from "../../components/footer";

function Index(props) {

    // These are hardcoded meetingSummaries
    const meetingSummaries = [
        {
            date:"March 15, 2022",
            agendaPoints : [
                "Maintaining Grin Telegram+Keybase-discord bridge service.",
                "Request for funding @jankie.",
                "Request for funding @cekickafa.",
                "Organizing a community sub-team with focus on the increase of Grin adoption.",
                "Increasing Bisq awareness in Grin Community.",
            ],
            link: "/meetings/march-15-2022"
        },
        {
            date:"March 1, 2022",
            agendaPoints : [
                "Provide more exposure to Bisq and other exchanges.",
                "Overview on Grin CC github page and web site.",
                "Bounties for training videos on Bisq and Tradeogre.",
                "Discuss request for funding Groundskeeper @jankie / Mar-May 2022.",
            ],
            link: "/meetings/march-01-2022"
        },{
            date:"February 15, 2022",
            agendaPoints : [
                "Update on Grin community website with @defistaker.",
                " Update on PIBD development with @yeastplume.",
            ],
            link: "/meetings/february-15-2022"
        },
        {
            date:"February 01, 2022",
            agendaPoints : [
                "Update on community miners purchase order and mining operation cost and profit.",
                "Request for funding @dtavarez Feb-Apr 2022.",
            ],
            link: "/meetings/february-01-2022"
        },
        {
            date:"January 18, 2022",
            agendaPoints : [
                "Organizing community for extending grin ecosystem.",
                "Update on groundskeeper work and the clear delegation of items.",
                "Discussion on platform for grin-wallet UI (possible frameworks Qt, Orbtk, React/Web, vanilla Web).",
                "Current situation of scriptless scripts.",
            ],
            link: "/meetings/january-18-2022"
        },
        {
            date:"January 4, 2022",
            agendaPoints : [
                "Organizing community for extending grin ecosystem.",
                "Update on groundskeeper work and the clear delegation of items.",
                "Discussion on platform for grin-wallet UI (possible frameworks Qt, Orbtk, React/Web, vanilla Web).",
                "Current situation of scriptless scripts.",
            ],
            link: "/meetings/january-04-2022"
        },
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
            link: "meetings/august-10-2021"
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

    // Converts meetingSummary to meetingItemView
    const createMeetingView = (meetingSummary) =>{
        return (
            <div key={meetingSummary.date} className=" md:w-full px-8 mb-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="header-2">{meetingSummary.date} meeting agenda</h2>
                {/*<h3 className="text-lg">Agenda points</h3>*/}
                {meetingSummary.agendaPoints.map(p=>{
                    return (
                        <p key={p} className="leading-relaxed text-base my-2">
                            <Check />
                            {p}
                        </p>
                    )
                })}
                <a className="text-primary inline-flex  items-center" href={meetingSummary.link} >View notes
                    <RightArrow />
                </a>
            </div>
        )
    }

    const getAllMeetingItems = () => meetingSummaries.map(summary=>createMeetingView(summary));

    const [filterQuery,setFilterQuery] = useState("");

    const [meetingItems,setMeetingItems] = useState([]);

    const [nextAgendaLink,setNextAgendaLink] = useState("");

    const searchEndpoint = (query) => `/api/search?q=${query}`;

    useEffect(()=>{
        fetch("https://api.github.com/repos/grincc/agenda/issues").
        then(res=>{
            res.json().then(issues=>{

                issues = issues.filter(i=> i.title.startsWith("Agenda: Community Council"));

                const latestIssue = issues.reduce((prev,current)=>{
                    return (prev.number>current.number) ? prev : current
                });
                setNextAgendaLink(latestIssue.html_url);
            })
        })
    },[])

    useEffect(() => {

        if (filterQuery===""){
             setMeetingItems(getAllMeetingItems);
        }else{
            fetch(searchEndpoint(filterQuery))
                .then(res =>res.json())
                .then(res=>{
                    console.log(res.results);
                    console.log(res.results.length);
                    const ids =  res.results;
                    console.log("ids",ids);
                    if (ids.length===0){
                         setMeetingItems([]);
                    }else{
                        const filteredMeetingSummaries = meetingSummaries.filter(summary=>{
                            const summaryId = summary.link.replace("/meetings/","");

                            return ids.indexOf(summaryId) >=0;
                        })

                        console.log(filteredMeetingSummaries.map(s=>s.link))
                        setMeetingItems(filteredMeetingSummaries.map(summary=>createMeetingView(summary)));
                    }
                }
                )
        }

    }, [filterQuery]);

    const handleFilterQueryChange = (e)=>{
        if (e.target.value.length>2){
            console.log('searching for ',e.target.value)
            setFilterQuery(e.target.value.toLowerCase());
        }else{
            setFilterQuery("");
        }
    }


    return (<>
            <div className={" pt-8 pr-8 flex justify-end ml-8"}>

                <input type="text" id="searchQuery" onChange={(e)=>handleFilterQueryChange(e)}
                       className="h-10  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <span className={"bg-primary p-2 h-10"}>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </span>
            </div>
            <div className="my-container ">

                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="header-1">Grin Community Meetings </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Grin Community meetings are held biweekly on tuesdays, generally the second and fourth weeks of the month.
                    Agenda for meetings are publicly open at <a href="https://github.com/grincc/agenda/issues">grincc/agenda</a> repo.
                    </p>
                    <h2 className="mt-4 py-2 px-8 text-sm bg-primary flex mx-auto w-max text-white rounded-md  tracking-widest font-medium title-font mb-1">
                        <a href={nextAgendaLink} className="text-white dark:text-gray-200"> Add a topic to next meeting's Agenda </a>
                    </h2>
                </div>


                <div className="flex flex-wrap">
                    {meetingItems}
                </div>
            </div>
        </>
    );
}

export default Index;