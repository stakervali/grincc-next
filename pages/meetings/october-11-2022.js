import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function October112022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes October 11, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 15 UTC in grincoin#general channel on Keybase. Meeting lasted 44 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> <a href='https://forum.grin.mw/t/request-for-funding-assistant-groundskeeper-satoshocrat-oct-dec-2022/10037'>Request for funding @satoshocrat</a> voted and approved by present members. </li>
                    <li><RhombusItem /> Test Miner donations & locations and current situation has been discussed.  </li>
                </ul>
            </div>



            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/september-27-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1.   <a href="#issue_1" className="text-primary">Request for funding @satoshocrat October - December 15 2022 <DownRightArrow/>  </a> </li>
                    <li>2.   <a href="#issue_2" className="text-primary">Test Miner donations & locations<DownRightArrow/> </a></li>

                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1.  Request for funding @satoshocrat October - December 15 2022</h1>
                <a href={'https://forum.grin.mw/t/request-for-funding-assistant-groundskeeper-satoshocrat-oct-dec-2022/10037'}>Forum link</a>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__cekickafa__ : So we proceed or?

__anonymous__ :I would propose to do a quick update. Are you happy with Satoshocrats help?
If so are you in favor of continued funding?

__cekickafa__ : i have no objections..

__anonymous__ : Ok. I think he did a good job, so as I mentioned on the forum, I am also in favor of continued funding. If there are no complains, I will ask the CC members to vote on this matter.

👍 cekickafa, defistaker
`}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Test Miner donations & locations</h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`
__anonymous__ : As a a quick update on the miners. Thx for contacting Ipollo and NHash @cekickafa. I asked @mattczt if he agrees to use one for mining Testnet and one to mine on main net to compensate for electricity costs. If he does, both will be send to him. If he prefers to get paid in Grin by the CC, we can send him one and the other to @hendi  to replace the broken miner he used to mine on Testnet.

__cekickafa__ :Thats great.

__anynomous__ : Yep, thx to you we secured two more miners for this purpose. 🙏🏻

__cekickafa__ : Also powpower agreed, it can be 3 i  think🙏

__anynomous__ : O, wouw, that is great. We have another sponsor :)

__cekickafa__ :i forwarded @mcmmike telegram for details, they asked whom to ship. .

👍 anonymous

__anynomous__ : In that case, we can send the third one to Hendi. That is perfect, MCMMike will handle the rest.
I think we do not have much more to discuss. Are there any other topics you would like to discuss?

__cekickafa__ : Hope so, @mcmmike thankx for handling these also.
Not at the moment. Thats all agenda topics.

One note. We can need a small unboxing video for ipollo. They demanded that, altough i had put an unboxing video. It would be cool if mattczt do a quick unboxing video, than i can enlarge it with few logos etc and publish it on youtube channel.

__yeastplume__ : just wanted to talk about testnet anyhow. Glad to see a miner will be on it, because we'll need to start testing transactions within the UI soon!

🦜

__anonymous__ : Great, with some luck we will have 2-3 extra testnet miners, that should mean more stability on testnet.

Alright, lets wrap up this unofficial short meeting. Hope more of us will be able to make it next time. Thanks for joining.

👍 anonymous, defistaker 
                    
           


__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>
                <ul className="space-y-2">
                    <li><RhombusItem />Satoshocrat funding request to be voted. </li>
                    <li><RhombusItem />Test miners shipping adress proceess.</li>
                </ul>
            </div>
        </section>
    );
}

