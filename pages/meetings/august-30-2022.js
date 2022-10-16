import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function August302022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes August 30, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted 39 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> MCMMike</li>
                    <li><UserIcon /> phyro</li>
                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> vegycslol</li>
                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem />Biweekly Meeting time zones discussed. </li>
                    <li><RhombusItem />Community Council members proof of existence validated with a transaction.</li>

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

                <p>Last meeting's notes <a href="/meetings/august-16-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Community Counsil Members ''proof of life'' request discussion by @johndavies24.  <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
        
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Community Counsil Members ''proof of life'' request discussion by @johndavies24.</h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`We, the community council, did add a ''proof of life '' transaction within the security repo of the GRIN CC:
https://github.com/grincc/security

__cekickafa__ : 👍

__mcmmike__ : As suggested by us , we will do this on a 3-month basis if we dont have a transaction where we all sign.In this case we use this transaction to proof the existence of all members.if the community wants shorter time frames please let us know. Also if someone needs help to verify you can always reach out to us for help.

__cekickafa__ : it looks like there is no problem about it.

__mcmmike__ : ok then we proceed. any other topics someone wants/needs to share ?

__mcmmike__ : If not please alsways use the https://github.com/grincc/agenda/issues to add agenda points to the next meeting.

👍 cekickafa, defistaker

__mcmmike__ : lets wait another 10min before closing the meeting as this one is/was a short meeting.

__cekickafa__ : i wonder if  meeting time is suitable for everybody to join? Different time zones.

__mcmmike__ :

>__cekickafa__ : i wonder if  meeting time is suitable for everybody to join? Different time zones.
dont we have two different times setup? One like this one for our Australian time-zone friends and one later in the evening ?


__cekickafa__ : yes, 2 different times. Maybe 15:00 UTC can be 16:00 or 16:35. A bit more late. Just an opinion.

__phyro__ : are others even interested in joining the meetings?
I think that rather than us changing time for them to join, perhaps they should express they want to do that first.

💯 defistaker

__cekickafa__ : yes, true. Just remembered scilio and mark hollis missed meetings due to time. But i agree, they better should express.

__anynomous__ : Yes, best to keep things as is unless someone specifically asks for a change.

👍 cekickafa,mcmmike

__dtavarez__ : so  15:00 UTC unless someone request to change to 10:00 UTC once a month?

__mcmmike__ : I would like to keep the 2 different times as we have people around the world who might not be able to join at one time only.

__dtavarez__ : yes, but still they are not joining the meeting anyways.

__cekickafa__ : Meetings always occur in mid week. That is another reason too. If it happened at sunday for example, 2nd week sunday and 4th week sunday.

__dtavarez__ : 10:00 UTC was set to let others to join but we are the same people at the meetings so far.

__mcmmike__ :

>__dtavarez__ : yes, but still they are not joining the meeting anyways.
I know but we need to offer the possibilities I think for everyone around the world to join.

__defistaker__ : To me it seems 15:00 UTC always attracts more people, I have not count it though.

__dtavarez__ : for me  10:00 UTC is fine I can join while I order food.

__mcmmike__ : I would suggest we move this to the next meeting agenda so everyone sees it and can participate in the discussion?

👍 defistaker

__cekickafa__ : Ok.noted. Next meeting agenda will be held at 15:00 UTC:)

__mcmmike__ : again 10UTC I thought we have one at 10UTC next at 15UTC and so on?

👍 cekickafa

__cekickafa__ : 15:00 sorry.

__defistaker__ : I have a small announcement, been developing a blockchain explorer for Grin. Although I could not have touched it for the last few months, making it public would may help finishing it. 😅

🙂mcmmike 🚀 vegycslol, cekickafa, anoynmous, dtavarez

__defistaker__ : ''''explorer screenshot''''

👍 mcmmcike, cekickafa, vegycslol, tromp, phyro

__vegycslol__ : 

>__defistaker__ : I have a small announcement, been developing a blockchain explorer for Grin. Although I could not have touched it for the last few months, making it public would may help finishing it.
Haha same, kind of lost some motivation lately.

🚀anoynmous

__mcmmike__ : I would say official meeting is adjourned
thank you all for participating , dont be dissapointed it will get crowded in the future.

💛 cekickafa

__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Discuss the Biweekly meeting schedule at next meeting. </li>
                </ul>
            </div>
        </section>
    );
}

