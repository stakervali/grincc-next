import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function February012022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes December 6, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 15 UTC in grincoin#general channel on Keybase. Meeting lasted 67 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> nicolasflamel1</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> quentinlesceller</li>
                    <li><UserIcon /> future3000</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem />Dissolving the GRINCC and returning funds <a href={"https://forum.grin.mw/t/pause-grin-community-council-we-need-your-opinion/10185"}>opinion</a> is voted against due to feedback from community and council members.  </li>
                    <li><RhombusItem /> Suggestion about allowing GrinCC Github access to groundskeeper is voted & agreed.  </li>
                    <li><RhombusItem /> The demand for unlocking <a href="https://forum.grin.mw/t/locked-support-ledger-wallet/8517">Support for Nano Hardware wallet bounty </a> decision is left to Original council..  </li>
                    <li><RhombusItem /> On Python wrapper bounty current progress discussed, @cekickafa will contact @walkbackgod.  </li>
                    <li><RhombusItem /> Process of payment managements about approved funding requests is to be tracked by @cekickafa.  </li>
                    <li><RhombusItem /> A time period of **48 hours** is defined with regard to the signing of transactions by key holders for approved funding requests.   </li>
                    <li><RhombusItem /> Community farming project management is being discussed.  </li>
                    <li><RhombusItem /> Test miners check-management is discussed.  </li>
                    <li><RhombusItem /> Gui wallet development is mentioned by  @yeastplume.  </li>

                </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li>Suggestion about allowing GrinCC Github access to groundskeeper is voted & agreed.  </li>
                    <li>Dissolving the GRINCC and returning funds has been voted & declined</li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/november-22-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1.   <a href="#issue_1" className="text-primary">Vote for Dissolving GrinCC and return funds to OC.  <DownRightArrow/> </a> </li>
                    <li>2.   <a href="#issue_2" className="text-primary">Give our opinion on the mining farm in the CC Telegram chat<DownRightArrow/> </a></li>
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Vote for Dissolving GrinCC and return funds to OC. </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__anynomous__ : @future3000 gave a nice summary of the discussion Github

https://github.com/grincc/agenda/issues/73#issuecomment-1338374177

Brief summary from forum discussions:

not everything is included.

  __Question for all CC members__: Does anyone want to leave?

  __Vote__: Should a groundskeeper be added as a keyholder and be responsible for drafting all transactions ? inline with this proposal [here:](https://github.com/grincc/agenda/issues/72#issuecomment-1321260181 ) 

  __Agenda__: Community Council (CC), 22 November 2022 #72 (comment)

  __Vote__: Should the limit to send a transaction from an approved funding request be 24 or 48 hours?

   __Discussion__ : If a grounds keeper is not added as a key holder, then who's responsibility will it be for drafting transactions ?

   __Further Discussion__

  1.CC mining farm management. What exactly is required | Who's willing to step up and manage the admin side of it.

  2.  Should specific CC members take responsibility for leading meetings, or just whoever is around? I'm willing to lead the 10:00 UTC meeting.

  3.  Should CC members be excepted to be anything more than key holders?

  4.  What should the max time limit be to vote on a funding request?
  5.  If CC is paying electric cost for testnet miners, how can er verify that those specific miners are on testnet?
  6.  Is anyone willing to take responsibility for managing the CC Grin payments ?

__cekickafa__ : yes, it is all summed.

__anynomous__ : First thing that I find important to mention is that I noticed based on the discussion that the 'problem' or the feeling of there being a problem is mostly limited to the Community Council itself. To be more specifically @dtavarez feels strongly about this since he has been patching up the gaps of activity of other members and since he did not receive his 10% Grin payment in time.
All in all we can learn lessons from these mistakes, but I have the impression the community itself is not asking the CC to dissolve or return funds.

__cekickafa__ : I didn't get that impression either about dissolving.


__dtavarez__ : 👋

👋 anynomous, defistaker

__defistaker__ : I am against it for one, there could be on-going projects which we may or may not know that can apply for funding. We have a procedure and funds to develop Grin, we should hold on to it.

__future3ooo__ : I vote no to dissolving.

__anynomous__ : I also vote agains disolving, I want to make procedural improvements, but am 100% against stopping our activity all together.

__dtavarez__ : maybe we could integrate some of the lessons learned to the procedures
that would it be a good outcome imo.

👍 future3ooo, anynomous

__anynomous__ : One of the most important improvements we have to make is to define a clear habit of paying transactions after CC meetings. In this way we can be more efficient since we know that payments are every 2 weeks, and at the same time we make clear to those who have Funding Requests when they can expect payments.
Secondly we have to define the time maximally needed to sign a transaction. I propose 48h with an aim of being better than this minimal requirement and drafting and signing most payments within 24 hours after a meeting.

__dtavarez__ : I think the only disagreement I have is in regards to that
I prefer 24 hours.

__cekickafa__ : 48h is better than 24h.

👍 anynomous

__anynomous__ : A third improvement which all CC members allready agreed on is that we will have another CC member hold the keys to the Grin CC wallet, so we can ensure this wallet is accessible all the time.
I think 48 hours is more realistic for all cases although I expect that 9 out of 10 times we can make it work within 24 hours.

__dtavarez__ : I would not expand the number of CC members, but I would invite gatekeepers to the CC github.

__future3ooo__ : I’m going with 48 too. Seems more practical.

>__dtavarez__ : I would not expand the number of CC members, but I would invite gatekeepers to the CC github.
What about if someone wants to leave the CC?

__dtavarez__ : 

>__future3ooo__ :What about if someone wants to leave the CC?
a new CC member can be added like @mo5itoo was added same process.

__anynomous__ : I agree with @dtavarez, in case someone wants to leave we can ask the community if they are ok with voting in a groundkeeper.
One worry I still have about our improvements is who calculates and drafts transactions, it is quite time consuming, signing is manageable, but firs tracking, calculating and drafting transaction is quite a bit of work.

__dtavarez__ : but I don't think any of the CC members want to leave, as far as I know.

__cekickafa__ :

>__anynomous__ :One worry I still have about our improvements is who calculates and drafts transactions, it is quite time consuming, signing is manageable, but firs tracking, calculating and drafting transaction is quite a bit of work.
i can help about that as much as i can.

🙏🏻 future3ooo, anynomous.


__future3ooo__ : 

>__dtavarez__ : but I don't think any of the CC members want to leave, as far as I know.
I’m not so sure about this. That’s why I bought it up.

__anynomous__ : If someone wants to leave, lets leave it those members themselves to announces it or not.

👍 dtavarez, future3ooo

Lets vote here and now on giving access to @cekickafa for Github. Should we also give @satoshocrat access to the Grin CC Github?

__dtavarez__ : both I think.

👍 anynomous

__anynomous__ : I think both would be best, in case @cekickafa gets ill or needs some time for something else.

__future3ooo__ : I’m happy for both.

👍 dtavarez

__anynomous__ : Probably we can limited it to one or two of the subdirectories, or all. Lets discuss it further in the CC chat and also ask @mcmmike opinion. I think he already made some sugestions.

__cekickafa__ : i hope i dont get ill :)

__anynomous__ : Stay healthy and Grinning ;)

💯cekickafa

__cekickafa__ : All of us.

__anynomous__ :  👍   Ok, that is decided allthough we need one more vote to make it final, but I assume we will get that vote.

On to our next topic:`}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Give our opinion on the mining farm in the CC Telegram chat </h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__dtavarez__ :  regarding the Mining Project, someone or several people are needed to follow up on the farm, making sure that the g1's are running and the rewards are being withdrawn.

__anynomous__ : My opinion has always been and will be, to make it as hands-off as possible. Let the guys from the mining facilities do the work for modes pay. We only transfer to the GrinCC wallet.

Also I think it is important to clarify that these miners are in fact "community miners". We bought them as community council, but the decision and responsibility is for the whole Grin community, similar to how this council is also just a representative body for the whole community. As such the council members should cut ourselves some slack and not always take the burden upon ourselves.

__dtavarez__ : there are some technical issues that could be done to improve the security of the network that a more experienced person could accomplish; this would be a one-time thing.

__anynomous__ : Ok. I would see this as optional. Only if and when time and motivation is available.

👍  dtavarez

We should also make sure that withdrawing is relatively easy and that at least two members can have the access, similar to the wallet.  We could even make so that all members who have access to the Grin CC wallet, also have access to the mining pool account.

__dtavarez__ : true. then we can open the debate in the forum and wait for someone to assume the responsibilities.


__anynomous__ : Maybe you can explain later in the CC chat how difficult or easy withdrawing is.

__future3ooo__ : 

>__dtavarez__ :  regarding the Mining Project, someone or several people are needed to follow up on the farm, making sure that the g1's are running and the rewards are being withdrawn.
What if one of the G1s goes down and requires someone at the facility to check it ?  I assume there’s a direct contact that we need to reach out to ?

__dtavarez__ : correct. all the contacts will be shared.

👍 anynomous, future3ooo

__anynomous__ : Ok. Anything else that needs to be discussed or mention on this topic? If not we can discuss shortly how to manage the test miners. I guess we need access to that mining pool, just for monitoring?

__cekickafa__ : i think from testnet explorer, you can monitor also.

👍 anynomous

__anynomous__ : We can probably see the total hashrate of the testnet miners. So if we know all of those are the ones we pay for, I guess that is enough. Or if there is another constant test miner that we know of, we can still simply know what the total testnet hash/graph rate should be.

💯cekickafa

Ok, with that I think we discussed everything that was on the agenda.
Is there anything we still need to discuss?

__nicolasflamel1__ : Following up on a pending topic from the last meeting. Did anyone hear from @renzokuken and/or walkbackgod about unlocking the Python CFFI secp256k1-zkp wrapper bounty? And did anyone hear from the Grin OC about unlocking the Ledger hardware wallet support bounty?

__dtavarez__ : I'm in favor of unlocking the HW bounty.very in favor

👍 future3ooo, mably, nicolasflamel1, cekickafa, defistaker

__anynomous__ : About the Ledger hardware wallet bounty. We did some checking and the bounty is actually put and managed by the OC. So it is up to them to decide what to do with that bounty. @phyro @yeastplume @quentinlesceller
It would make sense to open up the bounty. But it is not for us to decide.

__nicolasflamel1__ : How about the Python wrapper bounty? Walkbackgod's last github commit and forum post regarding the Python wrapper were more than 2 months ago. As per the bounty's progress requirement, it should be unlocked now. Walkbackgod can re-apply for the bounty if they want to continue working on it.

__cekickafa__ : i will contact again about it.

👍 nicolasflamel1

__dtavarez__ : 

>__nicolasflamel1__ : How about the Python wrapper bounty? Walkbackgod's last github commit and forum post regarding the Python wrapper were more than 2 months ago. As per the bounty's progress requirement, it should be unlocked now. Walkbackgod can re-apply for the bounty if they want to continue working on it.
for that it would be nice to open a request on the forum and ask for feedback.

👍 nicolasflamel1

__quentinlesceller__ :  Sorry, maybe I don’t have all the elements but given the MWC ledger support. What should we do about the bounty ?

__cekickafa__ : applied as MWC ?

__anynomous__ : It was proposed to maybe open up the bounty again. Since @nicolasflamel1 build Ledger support for Grin, that would mean the bounty would become his.

__dtavarez__ : 

>__quentinlesceller__ :  Sorry, maybe I don’t have all the elements but given the MWC ledger support. What should we do about the bounty ?
what would it the process to unlock the bounty?

__quentinlesceller__ : Okay. I see, given the fact that the bounty is now locked for 1 year + that would make sense.

__anynomous__ : Also it should be considered some work has been done on the Rust implementation by @mark_hollis. This makes it a bit more complex.
But in general it makes sense to unlock the bounty.

__dtavarez__ : the sad part is that there is no code from mark.and the code has to be open sourced. nicola's work is right there for everyone to  use it.

👍 nicolasflamel1


__anynomous__ : We indeed have no view of the current status or progress. In any case, I leave that  to @quentinlesceller and the OC to decide.

👍 dtavarez, quentinlesceller, nicolasflamel1, cekickafa, defistaker, yesgrinyes

I think we have to add as TO DO for this meeting to contact @renzokuken and @Walkbackgod

👍 nicolasflamel1, cekickafa

__cekickafa__ :Ok,noted.

__anynomous__ :Is there anything else we need to discuss in this meeting?

__cekickafa__ : That is all i think.

__anynomous__ : In that case I would like to thank you all for your input today. Lets not forget our TO DO's for next meeting and also to do payments now .... 😉

😊 defistaker, nicolasflamel1

O, If @yeastplume is here. Just a short question, what is the status of the GUI wallet, can it already be played with or are the screenshots or mockups?

__yeastplume__ : Sure,  yes. Opening, closing and creating wallets and syncing the node. I'm working on creating transactions, but right at this moment I've stopped to rework the transaction list display. Progress is coming along nicely very much thanks  to @lesserkey

🚀anonymous, nicolasflamel 🎉cekickafa 👍 dtavarez

__anynomous__ : Great that you are working together on this. If mockups of the wallet are there, be sure to share them on the Forum. Looking forward to see and test the Grin GUI wallet.

👍 yeastplume, future3ooo

Ok. I am of now, thanks all. 👋 
           

__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Give GrinCC- github access to groundskeeper for more management improvements. </li>
                    <li><RhombusItem />Contact @walkbackgod and @renzokuken about Python wrapper bounty progress again. </li>
                    <li><RhombusItem /> Discuss and define the responsibilities about mining farm management process. </li>
                </ul>
            </div>
        </section>
    );
}

