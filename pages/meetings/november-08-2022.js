import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function November082022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes November 8, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 15 UTC in grincoin#general channel on Keybase. Meeting lasted 52 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>
                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> mattczt</li>
                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> MW/Grin Workshop+Hackaton in Istanbul idea introduced and decided to discuss more broadly on forum about planning budget, organizing and technical details. </li>
                    <li><RhombusItem /> Running testnet.explorer to check testminers agreed. </li>
                    <li><RhombusItem /> Funding duty tax bill for testnet miner sent to @mattczt3 is mentioned. </li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/october-25-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. MW/Grin Workshop+Hackaton in Istanbul.  <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. Request for funding duty tax bill for testnet miner sent to @mattczt3  <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>

                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. MW/Grin Workshop+Hackaton in Istanbul </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`
__anonymous__ : Lets take 1 minute to review the agenda, if any more items need to be added let us know.


__dtavarez__ : I already introduced the topic and gave all details I have
In summary: there is a big chance of having a MW/Grin workshop+hackaton in Istanbul

__anonymous__ : The way I see it, we can only benefit from a hackaton. Not only for the actual output in code and exploration of topics, but also to introduce a wider group of capable crypto researchers to Grin and MW. They might become future developers.
I think it is best to offer a list of a few topics they can chose to work on based on their interest and background. Also they are free to make suggestions for topics of their own

👍 cekickafa, dtavarez, defistaker

I would love for them to explore the implementation of Grin vauchers (slatepack like message with the mnemonic) that can be loaded to top up a wallet, as paper wallet or as w one-step (transaction actually happens before sending the voucher) transaction.
But again, it depends on whether they like to work on this topic.

__dtavarez__ : That’s sounds a good idea, maybe I could open a forum post to collect all the ideas there

💯anonymous

I wonder if we can suggest things that already have a bounty ?
I also like the idea of encouraging them to fix at least an issue from GitHub
Anyways I’ll collect the suggestions in a forum post
Let’s move the conversation to the forum so more people can give their opinions

👍 anonymous

Also I would like to read more opinions in regards to a budget limit for this
So the organizers could have a better idea and makes the necessary adjustments.

__anonymous__ : Same here. I am fine with bounties and awards, I am not sure if and how much we should cover other organizational costs. I think those should at least partly be for the university.

__dtavarez__ : I think the university will provide the space and the internet connection as far as I know. And the support needed to make it happen
  
`}
                </ReactMarkdown>

                {/*Issue 4              */}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2.  Request for funding duty tax bill for testnet miner sent to @mattczt3 </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
__dtavarez__ : is @mattczt3 around?

__mattczt3__ :  Hi I'm here.

__dtavarez__ : Is there any way you could share the proof of the paid bill with some of us in private? You can hide personal opinion of course
I guess we it was agreed you will have running a testnet miner running it is fair to reimburse that

__mattczt3__ : Yes of course, I will send to mike if that's okay ? Is I've already shared info with him.

__dtavarez__ : Could you send it to more than one person?

__mattczt3__ : I will also send to you.

👍 dtavarez

__anonymous__ : As long as there is proof, I have no objection to compensate, it only is reasonable I think.

__mattczt3__ : Thanks, I'm happy to donate my time for free of course.
I have a few issues with the wallet listener stopping, I will look into it.

__cekickafa__ : Side Note: also @-naive received a miner for testnet.

👍 anonymous

__mattczt3__ : So I will send the proof to date and mike as soon as I can.

👍 dtavarez

__dtavarez__ : 

>__mattczt3__ : I have a few issues with the wallet listener stopping, I will look into it.

I think @satoshocrat could help you with that maybe.

__mattczt3__ : Thanks i will ask.

__dtavarez__ : 

>__cekickafa__ : Side Note: also @-naive received a miner for testnet.

Did he receive it already?

__cekickafa__ : Yes, he dİd.

__dtavarez__ : Is his miner running?

__cekickafa__ : Not yet, but maybe running witihin days. Will ask him.

__dtavarez__ : How can we verify that?

__mattczt3__ : 

>__dtavarez__ : How can we verify that?

Block explorer is not working. But I can tell on my node if anyone else is mining. Dave I've sent screens to tg

__dtavarez__ : How are we gonna verify the miners will be running on testnet only? I’m asking but probably that question was already answered.

>__mattczt3__ : Block explorer is not working.

That’s correct, I need to fix that. I’ll do it this week.

__cekickafa__ : Thats cool.

__mattczt3__ : 

>__dtavarez__ : How are we gonna verify the miners will be running on testnet only? I’m asking but probably that question was already answered.

You can tell by the difficulty I suppose, not sure.

__dtavarez__ : Ok, let’s solve the Block Explorer for now.

👍 mattczt3, cekickafa

__cekickafa__ : I pinged naive, asked if he is running.

__mattczt3__ : Yeah I said I will run through the setup again and make notes, he might be waiting for that. I will be busy for at least another week though.

__dtavarez__ : Cool.There is a opened forum post for this topic, I think keeping the community posted would be good

__mattczt3__ : No, we talked about it on the funding request, I will make a new topic.

👍 dtavarez

__dtavarez__ : Better then. Well if there’s no more to comment, we could close this meeting. Thanks for your time. 
                
 
                    
__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Further discussion about MW/Grin Workshop+Hackaton in Istanbul at forum. </li>
                    <li><RhombusItem />Check testminers via testnet.explorer. </li>
                    <li><RhombusItem />Funding duty tax bill for testnet miner sent to @mattczt3 agreed. </li>
                    <li><RhombusItem />  </li>

                </ul>
            </div>
        </section>
    );
}

