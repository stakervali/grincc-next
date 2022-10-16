import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function July192022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes July 19, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 15 UTC in grincoin#general channel on Keybase. Meeting lasted 82 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> phyro</li>
                    <li><UserIcon /> deev</li>
                    <li><UserIcon /> MCMMike</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> Status of current GRIN Testnet is discussed. </li>
                    <li><RhombusItem /> Running a Faucet for testnet purpose is discussed. </li>
                    <li><RhombusItem /> Number of seed nodes is discussed. </li>

                </ul>
            </div>

            {/* VOTING RESULTS */}
            {/*<div className="py-4">*/}
            {/*    <h1 className="header-2" >Voting Results</h1>*/}

            {/*    <ul className="space-y-2">*/}
            {/*        <li>No voting has been held. </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/july-05-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. GRIN TESTNET   <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>

                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. GRIN TESTNET</h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__dtavarez__ : Hello! One minute to review the agenda https://github.com/grincc/agenda/issues/61

if anyone has other suggestions, now is the time
suggestions for today's agenda.


__deeev__ : Whats the deal with grin testnet? Block production is unstable?


__dtavarez__ : 3 things.

1- Seeders

2- Faucet

3- just make sure we keep mining Testnet

__phyro__ : so what's the topic of discussion now, the seeders first?

__yeastplume__ : we have a list of seed nodes. I was going to merge them into the next alpha release (but I'd like the couple of outstanding issues that are filling up resource descriptiors or causing nodes to stop to be addressed first(

 👍 phyro

__phyro__ : there was also one PR opened https://github.com/mimblewimble/grin/pull/3710

__yeastplume__ : sure, but I'm going to run through the list closer to release time and test them all

👍 dtavarez

__phyro__ : yes, i agree.

__MCMMike__ : 
>_yeastplume__ : we have a list of seed nodes. I was going to merge them into the next alpha release (but I'd like the couple of outstanding issues that are filling up resource descriptiors or causing nodes to stop to be addressed first(

you mean the mainnet seed nodes or testnet , as we from Grinnode will provide some relyable test-nodes soon as well. 
We are already in the DNS seed for mainnet and could provide some stable nodes for testnet also
btw 👋

👋 cekickafa, deeev

__yeastplume__ : nodes for both testnet and mainnet
will be changed/updated on the next release
https://grintools.revcore.net/seedcheck

And at the moment, there are no working testnet seeds at all
I can test and merge what we have into main anyhow so at least those building from source and testing will have it. We just want to make sure the list is finalised before the next release.

__dtavarez__ : We could ask again in the forum for seeders
but as long as the seeders shipped in the code works, we should be fine.

__phyro__ : as far as I understand, the seeds hardcoded in the last release don't work, you'd have to modify the code with new seeds (e.g. from the PR above), build it and then it would work.

__dtavarez__ : what amount of seeders do you think should be included? 5? 4?

__phyro__ : I don't have a strong opinion on this, 5 sounds good

__yeastplume__ : as many as we can get.

__dtavarez__ : that's then a goal.

__yeastplume__ : 5 sounds like a good goal

__dtavarez__ : awesome :) next... the Faucet...
last time I checked the faucet run by Quenntin was not running.
I think it would be good to have one running.

__cekickafa__ : @hendi was running a one?

__phyro__ : haven't used the faucet for a long time so don't know if it's working now or not. It's definitely good to have one available.

__dtavarez__ : I think we could continue to encourage the community to test heavily the wallet and the node.
last time I checked it was not working.
what I want to achieve is a healthy testnet playground.
last time we ran a QA "campaign" as a success I think we would need to do it again soon. The more eyes the better. And having a healthy testnet is the first step IMO.

💯 mo5itoo

__cekickafa__ : well, it became weird when there is 2 meeting simultanously i think:)

__dtavarez__ : to wrap up this one; the minimum amount seeders (testnet) to be hardcoded is then 5.
thank you for your time.
I'm out 👋

__yeastplume__ : woah, no we're not hardcoding a number of seeders, we're aiming for at least 5
if we don't have 5 we don't have 5.
sorry, read that as 'hardcoding 5 as the number of seeders'

__cekickafa__ : So the action point is to have at least 5 seed nodes.

__yeastplume__ : a goal, if possible

👍 cekickafa, dtavarez.

__cekickafa__ :  There is open discussion, has anybody words? or end meeting for note keeping?
ok. thank you all 👋

👋 cekickafa, deeev , renzokuken , satoshocrat , yeastplume.
 
__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Goal is at least have 5 seed nodes. </li>
                    <li><RhombusItem />Encourage the community to test wallet and node. </li>
                    <li><RhombusItem />Have running Faucet for testing. </li>
                </ul>
            </div>
        </section>
    );
}

