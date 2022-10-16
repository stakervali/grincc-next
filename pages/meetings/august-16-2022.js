import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function February012022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes August 16, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 15 UTC in grincoin#general channel on Keybase. Meeting lasted 55 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>
                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> scillo</li>
                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem />Request for funding @davidtavarez August-December 2022. </li>
                    <li><RhombusItem />Community Mining Project update  </li>
                    <li><RhombusItem />Discussion about Coinswap milestone 2.</li>

                </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li>No objections raised for Request for funding @davidtavarez August-December 2022 from community. </li>
                    <li>Community Mining Project/ facility costs and location discussed. </li>
                    <li>Discussion about Coinswap milestone 2 and phase 3 delivery plan discussed.  </li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/august-02-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Community Mining Project update<a href="#issue_1" className="text-primary">  <DownRightArrow/></a> </li>
                    <li>2. Request for funding @davidtavarez August-December 2022.  <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                    <li>3. Discussion about Coinswap milestone 2 <a href="#issue_3" className="text-primary"><DownRightArrow/>  </a> </li>
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Community Mining Project update</h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`As for the Community Mining Project, 5 G1 minis are already connected. So far everything is going well, it remains to be determined how the procedure to manage the process would be. The process should include: who would be responsible for ensuring that everything is working properly, as well as who would be responsible for making withdrawals to the corresponding portfolio.

### Costs.
The Facility is offering to manage the equipment for 35% of the mined amount. As well as a one-time payment based on the cost of the power required to start the equipment.

### Location.
Location will be disclose it in the future with trustful community members, and probably fully disclose it to the public later.

### Extra.
Facility owners are also interested in supporting the Grin network by mining themselves. They already are mining other projects.

__defistaker__ : I count 11 devices in the picture, all of them belongs to CC ?

__dtavarez__ : They are also mining. Only 5 belongs to the community.

👍 defistaker

__cekickafa__ : i think same person will be responsible for ensuring everyting is working and making withdrawals. Naturally i mean.

__dtavarez__ : A secure VPN is already running to admin the devices    remotely. Admin can access via ssh and/or vnc
I think a forum post will be fine to collect the feedback, comments and suggestions.
3 more minutes before moving on to the next topic.

👍 cekickafa

__defistaker__ : The hardware is installed, would it be logical to move them unless there is a better option?

__dtavarez__ : 

>__defistaker__ : The hardware is installed, would it be logical to move them unless there is a better option?
Sure.

__defistaker__ :   I think we should accept the offer for the time being %65 of something is better than %100 of nothing.

__dtavarez__ : they are testing how to keep the devices cool
should we continue the conversation about the project in a forum post?
that will give more time to people to comment on.

👍 cekickafa, defistaker`}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Request for funding @davidtavarez August-December 2022.</h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`https://forum.grin.mw/t/request-for-funding-davidtavarez-august-december-2022/9952

__dtavarez__ : The request was unanimously approved by the CC internally. if anyone has any objections, this would be a good time to express them.

👍 cekickafa

__cekickafa__ : well, even we dont have enough person for joining a 2 week period meeting, i fully support also.

__dtavarez__ : the post has been up for two weeks already.

__defistaker__ : I am excited on Grin-wallet API related development, I hope it facilitates expansion of Grin.

__dtavarez__ : I think it will.

🚀defistaker, 🎉cekickafa

__cekickafa__ : 

>__dtavarez__ : the post has been up for two weeks already.
no i mean people joining to meeting, i will fully support a developer for sure.

__dtavarez__ : so 5 more minutes to then enter to the meat of the meeting: mwixnet next steps (?)
                    
                    
            `}</ReactMarkdown>

                {/*Issue 3*/}
                <h1 id="issue_3"  className="text-xl mt-10 mb-4 px">3. Discussion about Coinswap milestone 2</h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`__cekickafa__ : well, @scilio is here i think.

👍 scilio

__dtavarez__ : and we can let the conversation flow. I am very happy to see the latest PR merged 🎉

🚀defistaker, scilio, 🎉cekickafa

__scilio__ : me too! I've got a few small improvements to make that came about from the PR, and then will start working on milestone 3, with the CC's approval.

🎉 scilio, johndavies, dtavarez, mattcxt3

__cekickafa__ : congratulations already. Happy to see that become real 
@scilio.i mean milestones.. 3 is final phase.

__defistaker__ : Congratz @scilio on the progress.

__dtavarez__ :

>__scilio__ : me too! I've got a few small improvements to make that came about from the PR, and then will start working on milestone 3, with the CC's approval.
One thing, would you mind recalling here the agreements in relation to the payments, did this milestone include any payments, if so, how much was it, if you feel comfortable talking about it here, of course.

__scilio__ : 
£15,000 for Milestone 2, which has not yet been paid out.
£25,000 for Milestone 3, once it's completed.

https://forum.grin.mw/t/request-for-funding-scilio-coinswap-implementation/9149

👍 cekickafa

__dtavarez__ : thank you for the reminder 👍

👍 scilio

@yeastplume left some comments, would you like to respond to that @scilio ?

>@yeastplume
>- A more detailed delivery plan should be worked out instead of whatever had been agreed constitutes 'phase 3'.
>- Future work should be done in much smalller, more atomic PRs on a more frequent basis. It is very difficult to review or even coordinate reviews of extremely large PRs which leads to a lot of delay.
do you think that can be possible?

__scilio__ : Small PRs is no problem, as long as they can be reviewed in a reasonable manner.

👍 dtavarez

__dtavarez__ : Awesome.


__scilio__ : I can try to refine each bullet point in phase 3 later today
The current plan was spelled out in the PR for milestone 2.

https://github.com/mimblewimble/mwixnet/pull/3

💛 cekickafa, satoshocrat

\`\`\` 2c. Basic reorg protection \`\`\`
\`\`\` 3b. Inter-server communication  \`\`\`
\`\`\` 3c. e2e tests that spin up multiple local servers, demonstrating the multi-server workflow against a mock GRIN node \`\`\`
So those are the tasks I'll be refining into more detailed acceptance criteria.
__dtavarez__ : personal comment, if I may, please, now that you may have a better perspective of the project, if you understand that something could be done better that has not been discussed before, do not hesitate to suggest it, even if it changes the budget a little bit.
I think we all agree that the important thing is to complete the project in the best possible way and that all parties are in the best interest of the project. Personally, I do not think there is a problem if value-adding improvements are included but this is my personal opinion of course I know by experience that documenting, planning are boring stuff at least for me for example.
But the important thing is that things are done in the right way.
__scilio__ :  I think the current plan still makes sense. The one thing I may try to improve is for kernel generation. @phyro described how it can be done with only a single kernel for the transaction. If that turns out to be a lot more complex than the original plan, I may request more for that change. But it appears to be close to what I was planning, so at this point I'm still good with the original request.
👍 dtavarez, cekickafa, defistaker.
__dtavarez__ : cool.
__scilio__ : 
>__dtavarez__ : I know by experience that documenting, planning are boring stuff at least for me
yes, I am right there with you :)
__dtavarez__ : excellent! and thank you for the work!
💯 defistaker
__scilio__ : Thanks!
__cekickafa__ : yes, thank you @scilio🤝
❤️ scilio
I think all topics discussed. Anything else we forgot?
__defistaker__ : guess that's all
thanks all 👋
__dtavarez__ : thank you 👋
👋 cekickafa
__cekickafa__ : well, it was a good meeting. thank you all  👋
                
  
__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem /> Forum post for Community Mining Project update.</li>
                    <li><RhombusItem /> Review and test Coinswap Milestone 2 </li>
                </ul>
            </div>
        </section>
    );
}

