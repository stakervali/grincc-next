import React from 'react';
import UserIcon from "../../components/icons/userIcon";
import RhombusItem from "../../components/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import RightArrow from "../../components/icons/rightArrow";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../components/icons/downRightArrow";




function December212021(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes December 21, 2021</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted 50 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>
                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> future3000</li>
                    <li><UserIcon /> jankie1800</li>
                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> Details and review of the working development of GrinCC website by Stakervali.</li>
                    <li><RhombusItem /> Discussion and feedback on Stakervali funding work request.</li>
                    <li><RhombusItem /> Area51 stackexchange lottery prize details.</li>

                </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li> Vote to approve funding request for groundskeeper defistaker <b>Quorum Unavailable (IN PROCESS w/ UPDATE ON FORUM)</b> </li>
                    <li> Vote to approve contribution to prize giveaway <b>Quorum Unavailable (IN PROCESS w/ UPDATE ON FORUM)</b> </li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/december-07-2021" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Preview of grinCC website <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. Request for funding Groundskeeper @stakervali Dec-Feb 2021/22  <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                    <li>3. Sponsoring the Area 51 Community drafting lottery with e.g. 51 ツ in Price money<a href="#issue_3" className="text-primary"><DownRightArrow/>  </a> </li>
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Preview of grinCC website </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`
__defistaker__: I have [deployed on my user account](https://stakervali.github.io/), there is an option to publish it as project website, but it have some errors with linking css/js files. So it should be published as organization on account.

__anynomous__: There is much to like. 

* I really like the overview that shows in a few bullet points the essence of each meeting and which decisions were made
* Also I really like that it invites in one click to add an agenda items, good job :+1:
    
__defistaker__: Thanks, it needs a home page, describing grin community council's mission, current members etc.

__anynomous__: Yes, and a direct link to https://grin.mw/

__cekickafa__: looks nice to me. is it good to add active exchange links ? without endrosmeent
* __defistaker__: we can add it to hub page
    
__anynomous__: Yes, I think what we need is basically to create a hub that links everything in the Grin ecosystem. In this we can go a little further than  https://grin.mw/ which is a bit more conservative in linkouts. We need to make clear how the CC became to be and is similar yet also different in focus from the OC

__defistaker__: Is there an official white paper for grin cc? If not, I can dig into older meeting notes before formation of council

__anynomous__: No, there is no white paper, not even a very distilled description. If I remember correctly it was just decided that having another council would end a lot of meaningless discussions and ranting about community members who complained not being represented by the OC, that they are and old boys club, elite versus community etc. Most emotion based, not on arguments if you ask me, since the community was always heard in meetings (but that is just my opinion).
</br>
Also it was thought that having two councils could speed up things, divide and conquer. With the CC having more focus on community projects, community building, activities and usability and the OC having more focus on the core, cryptography, long term etc. A lot of overlap though, but I have seen much less complaining since we have two councils and more speed in development and activity in the community. So I guess we gained indeed more momentum and efficiency by having two councils.

__cekickafa__: He means code of conduct I think. set of rules 

__anynomous__: A yes, that is on the github. Anyhow, enough about old discussions for now. Any more feedback on the website

> __anynomous__: No, there is no white paper, not even a very distilled description. If I remember correctly it was just decided that having another council would end a lot of meaningless discussions and ranting about community

* __defistaker__: I can work on this and come up with a description.
    
__anynomous__: We can provide feedback and dig a bit in our memory and old meetings. If there is no more feedback on the website (feedback always welcome on the forum). 
                    
                    `}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Request for funding Groundskeeper @Stakervali Dec-Feb 2021/22 </h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {` 
 https://forum.grin.mw/t/request-for-funding-groundskeeper-stakervali-dec-feb-2021-22/9459 

__cekickafa__: vote?

__anynomous__: First feedback

__jankie1800__: I'd like to say working with stakervali has been an honor

__defistaker__: thanks jankie, likewise I am happy to work with you

__anynomous__: Get a room :wink:

__cekickafa__: well. i take help from stakervali a lot at grinpost medium and videos materials. he is helpful.

__anynomous__: Good to hear he has help with the grinpost, which I always enjoy reading. Also we have good help when there were unclarities or things that needed to be traced back to old meetings etc. I think it is great there is a project you can focus on, like the website. A search option would indeed be great. @__future3000__ do you have any feedback on this topic? 

__future3000__: I’ll have a think and see if I come up with anything.  But yeah it would be nice to have a really sleek UI/ UX website that could help onboard users

__defistaker__: Now that there is a foundation, I am aiming to convert grincc website to give  as much as information to people that heard first time about grin. That is in essence what I will do in this 3 month period.

__jankie1800__: I'd love a section to direct new developers to for onboarding. 

__defistaker__: I will add an ongoing projects section, so that a newcomer can see what devs are working on.

__anynomous__: That sounds like a useful way to spend your time. We need to avoid having a duplicate of grin.mw, but I think in our case we can do things a bit more different, e.g. more focus on linking and indexing everything, as well as what you already did, pull Grinners in to the meetings and give a quick overview of what is happening, which is great.

__cekickafa__: well. since grinmw minimalist. grincc can try different path.multidirectional.

__anynomous__: Exactly, multiple truths and ways can coexist perfectly. Yes, I really like a kind of roadmap of what happend in the past, what happens now and what we are working on (the wishlist) as both CC and OC, we are on the same road, just shouldering different parts

__cekickafa__: to me. a non tech user part is important. a direct link to videos or exchanges. 

__anynomous__: Unfortunately we cannot vote on your funding, since we do not have quorum, but I will ask all community members to bring forward any doubts if they have them now. Then the CC will take them in consideration when we do an official vote.
On the topics of vote @future3000 suggested we should look into a way to make voting by the CC public.
If enough members are present on Keybase we can ofcourse vote publicly, but lately we do it outside of the meetings itself while we prefer to do it completely transparently, e.g. voting on Github. We will post the result of our vote on the forum @__defistaker__

__defistaker__: okay, thanks

__anynomous__: Also before we move on to our next agenda item, I would like to inform @__jankie1800__ and @__scilio__ that we transferred their  @__jankie1800__ funding of his next quarter, in the case of @__scilio__ the payment for the 1st milestone (apologies it took us a while).
                    
                    
            `}</ReactMarkdown>

                {/*Issue 3*/}
                <h1 id="issue_3"  className="text-xl mt-10 mb-4 px">3. Sponsoring the Area 51 community lottery with 51ツ prize</h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
 https://forum.grin.mw/t/grin-stack-exchange-area-51-community/9406/20 

__anynomous__: Actually, we are still a bit in discussion here on the forum, if giving away a free price is in any way 'paying for users'. What is your opinion on that?

__defistaker__: I think renzokuken has a point, it may be against their rules 

__jankie1800__: personally, I don't see it as 'paying for users' as each user isn't getting paid for their involvement. Someone gets a prize and it is a fun way to spread awareness of a real asset in the stackexchange QA

__anynomous__: Personally, I also do not see this as paying. I mean it is very common to give free prizes, just for fun, engagement and because they work. It is like what I said on the forum, people need an 'excuse' for themselves to spend the time. E.g. I make this puzzle to have chance in a million to win a 1000 euro is not economical at all, but is a good excuse to do the puzzle you want to do anyway. Also we should see things in proportion, e.g. having fund with 51 Grin (10 euro or so), versus discussion we have on spending 100.000 of euro's on funding. This is just pocket change which is meant for community engagement and fun. In any case, I think we can 'offer' to @__renzokuken__ to chip in for a price, but only after we discuss it a bit more on the forum and see if we all feel good about it. What do you think @__future3000__? 

__future3000__: I agree. A lottery is different than airdropping or distributing to all users

__anynomous__: In that case, I think we can vote on it as council, it is only an offer we make to @__renzokuken__ which he can take now or later after some more thinking. To be continued also on the forum, we will post there the results of the vote and continue the discussion.

__anynomous__: That is all for today I think. 
</br>Is there anything more we need to discuss?</br>In that case, I thank you all for coming and sharing your thoughts and views for this beautiful little yellow project                 
  
__Meeting adjourned__
                
`}


                </ReactMarkdown>



            </div>


            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Complete vote for Stakervali funding request on forum.</li>
                    <li><RhombusItem />OC and CC history documentation resource.</li>
                    <li><RhombusItem />Area 51 prize, complete discussion on forum.</li>
                </ul>
            </div>

        </section>
    );
}

export default December212021;
