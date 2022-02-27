import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import RightArrow from "../../assets/icons/rightArrow";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




function September142021(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes September 14, 2021</h1>

            <p className="py-8">Community Council (CC) meeting held @ 15 UTC in grincoin#general channel on Keybase. Meeting lasted 95 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="header-2" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> mcmmike</li>
                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> mark_hollis</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> phyro</li>

                </ul>
            </div>
            {/*<div className="py-4">*/}
            {/*    <h1 className="header-2" >Short Summary</h1>*/}
            {/*    <ul className="space-y-2">*/}
            {/*        <li><RhombusItem /> upbit listing proposal turns out to be a scam.</li>*/}

            {/*    </ul>*/}
            {/*</div>*/}

            {/*/!* VOTING RESULTS *!/*/}
            {/*<div className="py-4">*/}
            {/*    <h1 className="header-2" >Voting Results</h1>*/}

            {/*    <ul className="space-y-2">*/}
            {/*        <li>Vote to offer inflation bugs bounty (by OC) VOTE PASSED (YES)  </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/august-31-2021" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Review of task-list from <b>@jankie1800</b> and <b>defistaker</b>. <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. Contact OC for payment transfer and if needed clarifications. <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                    <li>3. Mining equipment purchase options<a href="#issue_3" className="text-primary"><DownRightArrow/>  </a> </li>
                    <li>4. Organization of MW GRIN / Berlin Meetup group<a href="#issue_4" className="text-primary"> <DownRightArrow/>  </a> </li>
                    <li>5. Discuss options to update grin website and development of grincc website<a href="#issue_5" className="text-primary"> <DownRightArrow/>  </a> </li>
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Review of task-list from <b>@jankie1800</b> and <b>defistaker</b>  </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`
* __mcmmike__ : Did you both create a GRIN forum thread with possible tasks to support GRIN community? I did see a draft of the Grin Newsletter from you, which we will publish once you got the correct permissions.

* __stakervali__ : We talked about it last night, jankie was going to open a forum topic. But we have been communicating about the tasks in the last two weeks. I can give a quick summary now:

* __mcmmike__ : Lets please summarize it on the forum so it gets more public exposure, as this was a task for you two to work on. We agreed on it last meeting afaik?

* __stakervali__ : Okay, I will open a topic after the meeting.
 - 👍 __mcmmike__                    
                    
                    `}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Contact OC for payment transfer and if needed clarifications </h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {` 
* __mcmmike__ : @anynomous can you take over here please and give us a status?

* __anynomous__ : OC has been contacted (John and Joltz). They indicate the CC and OC need for a tool to verify how many keys are used to sign a MultiSig transaction as security proof. The script we developed provides this security proof by including additional transaction signatures in a text file which combined with the online transaction is used by the script to verify which keys were used to sign.

  The tools works, tested by Anynomous and John Tromp and other CC members, published: (https://github.com/grincc/security) Anyone can test and run the code to find proof the CC has had recent access to all 6 keys. Later the tool will be improved so the OC and CC can provide proof of which keys were used over multiple transactions.

  So, yesterday I had contact with both John and Joltz, they are both fine with the security proof since it is now public and verifiable by anyone.
John already contacted the OC last week, and according to Joltz they will proceed this week with the payment to the CC. So with a bit of luck we have access to our funding this week.

* __mcmmike__ : from my understanding all technical requirements are now fulfilled?

* __anynomous__ : They are, and it now has been confirmed by both John and Joltz.

* __mcmmike__ : ok good, any question/suggestions from anyone about this topic?

* __anynomous__ : The delay in funding unfortunately resulted in us losing out on our chance to buy a G1 miner, but more about that in the next agenda topic.                    
                    
            `}</ReactMarkdown>

                {/*Issue 3*/}
                <h1 id="issue_3"  className="text-xl mt-10 mb-4 px">3. G1 miners sold out. Discuss alternatives such as a) to buy a large number of G1 mini's and how to manage them b) scale down on the buying </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
* __anynomous__ : So in summary, we wanted to buy 12 G1 mini miners and one G1 as agreed after discussions here and on the forum. Unfortunately the G1 miners have been sold out, which mean we have to go with an alternative plan, above I give two such alternatives, but feel free to give other suggestions.
* __cekickafa__ : G1 is noisy..and high gps

* __mcmmike__ : There are not G1 anymore, all sold out and none could be reserved for us as I could not promise them a payment date
* __cekickafa__ : ok sorry. only g minis

* __anynomous__ : It is, unfortunately I will never hear its noise😔

* __mcmmike__ : we have one running once the CC meets I can let you listen to it

* __anynomous__ :  sweet 😊

* __stakervali__ : Will the CC rent a facility for running miners, if so number of g1 minis can be incremented

* __anynomous__ : To me, the most logical option would be to go with option A, buy the same amount roughly in G1 mini's, but we will need to be VERY FAST, this time. So I will keep on asking the OC for status updates, and we would have to contact NHash ASAP.
But that is my opinion, what do you all think?

* __stakervali__ : I agree

* __anynomous__ : For the moment, Hendi informed us he has a facility available that could host miners for 15 euro cent per kWh, with a bit of luck we can still find cheaper options.

* __mcmmike__ : I would suggest once we get the funding to schedule another meeting and discuss this, as we need to also come up with a SWAP plan for BTC->USDT for sending it to them. In the meantime we can discuss this on the forum, as G1 are sold out , which alternatives we have and who hosts them.

* __anynomous__ : A, yes, we should have a separate meeting about that.
But for now, lets check, who is in favor of option:
A, buying the equivalent hash power in G1 mini's
 - 👍 __cekickafa__, __stakervali__, __anynomous__

* __anynomous__ : B, scaling down.

* __mcmmike__ : If we go with G1-minis I am in favor of sending them to community members as well as host them on GRIN CC sites.

* __anynomous__ : Lets decide here, to take actions in 2-3 days from now, in other words, that is the time will discuss this on the forum, so we can proceed directly after receiving the funds, to contact Nhash and have a meeting about the conversion of BTC -> USDt I would like that as well, but it does create an administrative challenging. Lets, discuss this on the forum, preferably community members with a long standing history, who can host a couple at least.

* __mcmmike__ :
  > __anynomous__ : "I would like that as well, but it does create an administrative challenge"

  I would suggest we buy 5-10x G1-minis for each of trhe 5 continents to one trusted member who ships them to the community members to run the.

    > "Lets, discuss this on the forum, preferably community members with a long standing history, who can host a couple at least."

  Yes I agree, Let's proceed.

 
                
`}
                </ReactMarkdown>

                {/*Issue 4              */}
                <h1 id="issue_4"  className="text-xl mt-10 mb-4 px">4. MW Grin/ Berlin Meetup group</h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{` 
* __mcmmike__ : I did receive an email the meetup group has no organizer and would be deleted. In order to avoid another GRIN group to be deleted I took the liberty and made me the organizer. It is a payed subscription but for the next 6 month(s) its fine and the group is still active and did not get deleted. So we in control again of this group.

* __cekickafa__ : good job. thanx @mcmmike

* __mcmmike__ : that is more or less all about this topic from my side.

* __stakervali__ : This is an exciting news. We can announce this with newsletter                
`}

                </ReactMarkdown>

                {/*Issue 5              */}
                <h1 id="issue_5"  className="text-xl mt-10 mb-4 px">5. Discuss options to update grin website and development of grincc website </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{` 
                
* __stakervali__ : Me with jankie added the topic. So official website is generated with jekyll site generator. Last week I have tried to learn about it, since I never used it before. I have cloned and setup official website. I think, we can make updates via PR in the next two weeks.

* __anynomous__ : Nice, any specific changes you would like to make? For now great, we have the ability to make changes again.

* __stakervali__ : Maybe we can update the theme, improve/modernize it. We can update news section. @jankie also will be working on grincc/official website, we have talked about it thoroughly in the last two weeks

* __anynomous__ : Sure, but lets be conservative in our changes, and let people on the forum give input on suggested changes (the major ones).

* __cekickafa__ : A fresh can be good.

* __anynomous__ :One thing that still can be improved I think is the linking of everything grin.

* __cekickafa__ : feels like an improvement :)

* __stakervali__ : Also for grincc, we are planning to create a website, where users can navigate meeting notes, search etc. similar to official grin site

* __anynomous__ : Nice, in general I would like to see kind of a spider web of all the sub projects of grin, repositories with tutorials, lists of links to explanatory videos etc. Grin is still to much fragmented, and many old repositories are kind of unknown since no one put them or linked them in a single place. We can discuss this more on the forum.
 
                
`}


                </ReactMarkdown>

 {/*Issue 5              */}
                <h1 id="issue_6"  className="text-xl mt-10 mb-4 px">6. Miscellaneous </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{` 
                
* __cekickafa__ : I see @mark_hollis has joined . Maybe he has words?

* __mark_hollis__ : I recently made an <a href="https://forum.grin.mw/t/grin-ledger-hardware-wallet-progress-thread-by-markhollis/8670/32">update post</a>. I have worked these weeks on the key derivation at the firmware side.

* __anynomous__ : Great, are there any big roadblocks you foresee, or do you feel you are close to going to a test phase, I mean testing with users?

* __mark_hollis__ : Further work on Grin's PSBT version. Again a lot of debugging. Rangeproof implementation on the firmware side seems to me the biggest roadblock. I'm not near a user test phase yet.

* __cekickafa__ :  May I ask an eta on time ?

* __mark_hollis__ : Hard to estimate, I think some extra few months.

* __anynomous__ : A, maybe post these roadblocks as well on the forum, maybe someone has suggestions. The problem now is that there are no libraries to generate rangeproofs? I would guess more coins need them.

* __mark_hollis__ : Monero has also bulletproofs

* __phyro__ : I think Monero may have already switched to BP++ (not sure about the HW implementation though) Grin is very special in this regard probably. We have some custom BP implementation I believe

* __mark_hollis__ : I looked into the Monero ledger HW implementation (not too in depth), I didn't see something rangeproof related there yet. Last I saw a paper for Monero bulletproofs on Trezor.

* __anynomous__ : Hope you will find some work you can partly reuse. You can put this on the forum as well, maybe others there have suggestions like @phyro had.

* __mark_hollis__ : I will post it on the forum

* __anynomous__ : For now I think we reached the end of our agenda for today. With quite some tasks to do:


__Meeting adjourned__
                
`}


                </ReactMarkdown>



            </div>


            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Ask OC for status update on the payment in a few days.</li>
                    <li><RhombusItem />Plan separate CC meeting to discuss payment to NHash (conversion BTC -> USDT).</li>
                    <li><RhombusItem />Create forum posts to discuss task-list from @jankie1800 and @defistakerm.</li>
                    <li><RhombusItem />Update buying community miner thread on the forum, discuss the alternatives of buying many G1 mini miners instead of 12 G1 + 1 G1. Discuss if community members can host some of these.</li>

                </ul>
            </div>





        </section>
    );
}

export default September142021;
