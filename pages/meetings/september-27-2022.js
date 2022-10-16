import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function September272022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes September 7, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted 62 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> Future3000</li>
                    <li><UserIcon /> phyro</li>
                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> vegycslol</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem />  <a href="https://forum.grin.mw/t/request-for-funding-cekickafa-september-december-2022/10023">Request for funding</a>  @cekickafa voted and approved by present members. </li>
                    <li><RhombusItem /> Testnet miner location and running costs are discussed in conjuction with <a href="https://forum.grin.mw/t/request-for-funding-mattczt-october-2022/10034">Request for funding @mattczt October 2022</a> has been discussed. </li>
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

                <p>Last meeting's notes <a href="/meetings/september-13-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Request for funding @cekickafa September -December 15 2022<a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. Testnet miner issue & Request for funding, @mattczt, October 2022<a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                    <li>3.  <a href="#issue_3" className="text-primary"><DownRightArrow/>  </a> </li>
                    <li>4.  <a href="#issue_4" className="text-primary"> <DownRightArrow/>  </a> </li>
                    <li>5.  <a href="#issue_5" className="text-primary"> <DownRightArrow/>  </a> </li>
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Request for funding @cekickafa September -December 15 2022 </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`https://forum.grin.mw/t/request-for-funding-cekickafa-september-december-2022/10023



__anonymous__ :My opinion is as I stated on the forum that @cekickafa should continue the good work. I do however see that there is room for more workload since the request is for 1500 € per month. How much time do you think your tasks currently take @cekickafa?Is there room for more workload?

__cekickafa__ : if needed, sure.

__anonymous__ : I see that in the last funding period, you made extra documentation for mining, updated the financial documentation etc.
Similar in this funding period you could take on extra tasks, I do no know if you have some in mind yourself or if the community has sugestions.

__future3000__ : @cekickafa curious how many hours per week would you estimate that you spend on your main tasks?
👍 anonymous

__cekickafa__ : Extra documents will undoubtedly be beneficial to the community.

__anynomous__ : 

>__future3000__ : @cekickafa curious how many hours per week would you estimate that you spend on your main tasks?
I second that question. How much hours do you estimate your main tasks take in a week?

__cekickafa__ : Frankly i didnt measure the time but it takes more than 30 hours weekly .

👍 future30000

__anynomous__ : Ok, that is more than I would have estimated.
@dtavarez Suggested you take on a financial transparency report as additional task for you next funding period. I think that would be a good extra tasks for this period. Are there other suggestions for one time projects, documentation etc

👍 cekickafa

__cekickafa__ :yes, financial transparency report should be done. I included it in my request also.

👍 anonymous

__anynomous__ : In principal I am ok with voting in favour of this funding request, I do think we should collect some additional tasks for you though in the mean time, any suggestions there will remain welcome.
I would like to continue to a vote for all community members. Based on this we will inform the other CC members and make an official vote.
Thumbs 👍👎 for continue funding. Additional remarks or tasks are still welcome.

👍 dtavarez,anonymous future3000

With that we can proceed to the next topic.`}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Testnet miner issue & Request for funding, @mattczt, October 2022 </h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`https://forum.grin.mw/t/request-for-funding-mattczt-october-2022/10034

__anonymous__ : I think valid suggestions were made on the forum. Lets start with the question, do we need another miner on testnet?

__yeastplume__ : I would say yes.

__anonymous__ : I think currently @hendi has two miners running on testnet, are there more?

__yeastplume__ : we could very much use some redundancy there
we have quite a lot of things to test coming up, with PIBD and the gui work which should becoming much more visible over the next few months

👍 dtavarez 👀 future3000

__future3000__ : I don't like the idea of CC having to reimburse for electric when it's 32/kwh. I’m sure we can come up with a better solution for this. Like running a test net miner in the CC farm.

👍 anonymous

__anonymous__ : Ok, some redundancy would be good IMO as well. I do think however we should keep things as simple as possible.
E.g. CC compensating electricity costs adds a lot of hassle. So only based on volunteered mining, or costs for electricity can be covered by splitting on main net and test net. I have to add that I have no idea how to achieve that, Tromp mentioned it was possible,
That is a valid point, we have a lot of G1 Mini's from the CC, maybe pointing 1-2 to testnet would be the most simple solution.
Alternatively, if Ipollo would be willing to dontate 1, we could let @mattczt take care of it, but I do not like the idea of ordering another G1 mini from CC budget.

__yeastplume__ :  why is compensating for electricity a hassle? Usage and cost are easy to track.

__anonymous__ : unnecesarry administration IMO. easier to devide hashing power 50% to main net to cover the costs and other 50% to testnet.

__yeastplume__ : that sounds far more difficult, but it's up to you

__anonymous__ : Even within the CC we decide to put our mini's centralised for lower electricity prices as well as to keep administration simple.
I do not know how to do it, so it might be one click or it might be mighty complex, no clue. Maybe we can break this idae up. Lets start with, should the CC fund another miner to @mattczt, or should we provide some of the CC miners to mine testnet.
yeastplume
why is compensating for electricity a hassle? Usage and cost are easy to track

👍 defistaker

__future3000__ : 

>__yeastplume__ :  why is compensating for electricity a hassle? Usage and cost are easy to track.
The admin and the power cost is very high. You’d lose money running on mainnet with those elec rates, not that it matters in this case. But CC could be better to buy another ourselves for testnet, then run that in the CC Farm.


👍 cekickafa

__yeastplume__ : I just don't understand how the admin is high. You put a $10 elec meter on a socket and run the miner, then multiply by cost per kWh as noted on you electricity bill.

__anonymous__ : It depends what you call high administration. Any additional payments adds complexity. Sure it is doable, but if there is a solution that does not involve making transactions, that is always simpler. Does anyone know much about @mattczt? I did see he is a long time contributor, lately active again, but I do not know him at all as person.

__cekickafa__ : i think Nhash is positive about sending a g1 mini to community. They didnt reject the idea.

👍 future3000, anonymous


__dtavarez__ : Wattage in Watts / 1,000 × Hours Used × Electricity Price per kWh = Cost of Electricity.

__anynomous__ : In any case, I am running into time limits, I have to pick up one of my kids.
My suggestions, break this discussion down into the following questions:

1) A Pay for miner @mattczt or B, use existing CC miners on mainnnet (consider huge difference in energy price)
2) If we want to support mattczt, do want the CC to pay for it, or only if sponsored by Ipollo?
3) Do we want to compensate for electricity costs.

__dtavarez__ : Minis consume 100 watts.

__anynomous__ :

>__cekickafa__ : i think Nhash is positive about sending a g1 mini to community. They didnt reject the idea.
Cool, in that case I am in favor of sharing it to @mattczt if we get it, the energy is not a big deal, I gave my opinion but it is not a bid deal.
Have to go now, please continue the discussion on this topic, I am fine either way.👋

👋 defistaker, future3000 , cekickafa

__future3000__ : 

>__yeastplume__ : I just don't understand how the admin is high. You put a $10 elec meter on a socket and run the miner, then multiply by cost per kWh as noted on you electricity bill.
Depends what he wants payment in. If it’s BTC then CC will have to create/ sign a tx for £30 each month. Not a big deal but could be avoided.

__cekickafa__ : Be certain about nhash answer about sponsorhip , and proceed maybe.

👍  anonymous

i can contact admin, and ask what they think. Mcmmike is contacting as well.

__anynomous__ : 

>__future3000__ : Depends what he wants payment in. If it’s BTC then CC will have to create/ sign a tx for £30 each month. Not a big deal but could be avoided.
I agree, 100% payment in Grin would be preferred by the CC.

__future3000__ : Yeah let’s see what they say and come back to this. Either way, sounds like it’s important we have something else running on testnet.

👍 cekickafa.

__cekickafa__ : For notekeeping, thats all i think.

__anynomous__ :  Yep, that's a wrap. 
                    
                    
             
__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Contact Nhash & ipollo for test miner donation.</li>
                    <li><RhombusItem />Decide on location and management of test miners.</li>
                </ul>
            </div>
        </section>
    );
}

