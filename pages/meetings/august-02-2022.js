import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function February012022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes August 2, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted 32 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> phyro</li>
                    <li><UserIcon /> scillo</li>
                    <li><UserIcon /> anynomous</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> Discussion about Coinswap Milestone 2 delayed to next meeting due to absence of scilio, timing mismatch.   </li>


                </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li>No voting has been held. </li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/july-19-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1.   <a href="#issue_1" className="text-primary">Coinswap Milestone 2 Review & Approval to being work on Milestone 3   <DownRightArrow/> </a> </li>

                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Coinswap Milestone 2 Review & Approval to being work on Milestone 3 </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__dtavarez__ : the PR seems to be WIP still.

https://github.com/mimblewimble/mwixnet/pull/3/commits

__cekickafa__ : 👋  @scilio

__defistaker__ : 👋 Maybe @scilio thought that meeting was at 15:00 CET.

__cekickafa__ : it writes there 10 UTC. And yesterday reminded here also. 
Maybe 10.00 UTC time is not suitable for meeting. We can reconsider it.

__dtavarez__ : the original idea of having a meeting at 10 utc was for a change and to give others the opportunity to join in.

👍 cekickafa

__anynomous__ : 👋

__phyro__ : Regarding coinswap review, I thought I'd go through today, but things came in and will do that tomorrow.

👍 cekickafa, johndavies

__scilio__ : sorry for my absence. I converted the time wrong. 10 utc is middle of the night for me, so I didn't see the notifications until now.

👍 cekickafa

>__dtavarez__ : the PR seems to be WIP still.
https://github.com/mimblewimble/mwixnet/pull/3/commits

It's not WIP. I was just adding in more test coverage and comments while I waited for reviewers. I was hoping that would make it easier to review.

__cekickafa__ : Next meeting ,2 weeks later 16 august. at 15.00 UTC time. Hope it matches you @scilio and you  can join.

__scilio__ : I can do that. Hopefully @phyro, @dtavarez and @yeastplume can finish reviewing by then

👍 cekickafa, johndavies

 
 
                 

__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Move discussion ''Coinswap Milestone 2 Review & Approval to being work on Milestone 3 '' to next meeting. </li>


                </ul>
            </div>
        </section>
    );
}

