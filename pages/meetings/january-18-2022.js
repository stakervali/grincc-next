import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function January182022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes January 18, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted 60 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> mcmmike</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> jankie1800</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> Refine and community wish list for more engagement. </li>

                </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

               <p>No votes held.</p>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/january-04-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Providing TOR version of grin.mw site and forum. <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. Create a grin-wishlist repo under grincc github account, to track requests from community. <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>

                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Providing TOR version of grin.mw site and forum</h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__anynomous__ : Is 2ro around, since he raised this point?

__defistaker__ : I guess he is not here. grincc is mostly on github, so it is unlikely to provide an onion link for community council

__jankie1800__ : seems like a suggestion really.  "Would the CC consider this?"

__anynomous__ : I was a bit surprised, I mean you can use tor to go to any normal website, also to grin.mw or the forum. So my question to him would why a dedicated tor address would be needed.

__defistaker__ : may be he is concerned about privacy; a bit much

__anynomous__ : I guess he is, but to my knowledge a tor hidden addresses, just means you can host a website without anyone knowing it is there. It does not provide much more privacy than going to a normal website using tor. But I am not an expert on the matter.

__cekickafa__ : its not a big deal for users.

__jankie1800__ : privacy isn't something of a concern; more of an approach imo- I can't answer for the 'need'- I too am not up to date on TOR site hosting// i do like the idea- an onion link is sort of like credit in the privacy world. Kind of like Igno dropping an onion link and not a discord chat

__defistaker__ : I am not familiar with tor hosting too. If he could joined, we may discussed more

__anynomous__ : I think if he is around to defend his point we can reconsider it. For me there is no reason against it, but without a reason for it, it would be hard to ask someone to invest time in it.

__jankie1800__ : I think answering 2ros question; the CC would seem to be open to the idea pending some more info on the merits

__anynomous__ : Well that is true, maybe we should look a bit more into the reasons why people have dedicated tor addresses for their website, and which other people use both a tor address and a normal web-address, see what their reasons are.
For now I think we can move on, I will send him a message on github, ask him to provide some more information. Best post it on the forum for discussion.`}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Create a grin-wishlist repo under grincc github account, to track requests from community</h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__defistaker__ : You suggested to create such a wishlist @__anynomous__. (I have compiled one (https://github.com/stakervali/grin-wishlist) based on wishlist on official repo mimblewimble/grin-pm#385) Is it possible to create a similar repo under github/grincc

__anynomous__ : Absolutely possible, I like the idea, well ofcourse, since it is mine :) Just thinking a bit about the format. It would be great if it could be upvotable per item.

__defistaker__ : We can open a forum topic, each post corresponding to one wish, so people can upvote in the forum. Also I can look if there is a way to upvote a github issue

__anynomous__ : That would be great, maybe there is something like a github  form, questionnaire etc. What do you think would it be good to combine this with already implemented points? For me it would be sort of a roadmap, so existing steps that where made, as well as wishlist to work on for the coming year(s) + discussion/voting on those points- It would be great if new users have one page to see all that has been accomplished already (this is a bit hidden now), plus all the great things to come, which is like a roadmap.

__jankie1800__ : I wouldn't do an individual post per item (creates noise and will all get scattered) if you go the forum route i think it would be better to keep items in a single formatted post

__anynomous__ : Ok, so maybe one page, but link outs to individual post for discussions, only allow upvoting. 

__defistaker__ : forum post is for only upvoting. I think it is best to keep discussions on github, separate issue for each wish
    
    __anynomous__ It would be great if new users have one page to see all that has been accomplished already (this is a bit hidden now), plus all the great things to come, which is like a roadmap.
   * __defistaker__ : I think an ongoing projects section is also necessary. I was thinking it as a separate section. We can grey out and give link to wishes that has been working or finished.

__anynomous__ : Mmm, I am starting to think, this might need to be framed in a website, e.g. separate tabs🤔 I think we need to look a bit into existing plugins as well, e.g.: [matterpoll/matterpoll:Create polls and surveys directly within Mattermost](https://github.com/matterpoll/matterpoll)

__cekickafa__ : i dont think a roadmap is useful anymore. Grin roadmaps always missed points. that wishlist is old as 2 years. most of them are hanging still

__anynomous__ : Well, that is ok. All roadmaps/plans are flawed and will always be subjected to change, but still they provide a aguide, not only to what is to come, but also to the road already travelled. @__cekickafa__ Quite a few points are worked on, interesting enough not all Priority 1 on the list. I think that is ok, it is also in the nature of Grin, people request funding to work on what they want to work on, not really like a central organization or programming team which checks things of in a planned order. But I get your point, lets not fixate to much on order or promised. E.g. not, these things will be done in 1 year, these in 18 month. We can keep it open and flexible, just like the existing Wishlist. The only addition is linking out, and allowing upvoting, which I think is important for the community and lastly, maybe show passed achievements to show the road already travelled. Or am I the only one who things we should celebrate a bit more our accomplishments.

__jankie1800__ : I'm excited that this is getting some attention; something a little more formalized is easier for people new to Grin to conceptualize

__anynomous__ : I agree with @__jankie1800__, even if you are involved for a long time it is usefull. Sometimes we forget all the things that happend in the passed, good to list them and celebrate those achievements, this also keeps the spirit high for both community members and developers- Ok, so we have to make this in a concrete plan, @__defistaker__ already created the basis, we should expand on that, see if there is  a plugin to allow voting bullet points, without breaking it into individual posts. I think we need to think a bit more on if and how we can combine this with passed achievements, or that we should make a separate roadmap for that. For now, great work taking this on @__defistaker__ . I will join you in googling for github plugins, if anyone has knowledge on this please share this now or later.

__defistaker__ : thanks. Yes, it may be hard to google "github voting plugin" it displays all kind of plugins :)
  * __anynomous__ : Indeed, better to ask someone who tried them all and found which actually would work.

__anynomous__ : Just thinking, maybe I should also open this for discussion on the forum, let others throw in their knowledge, might save us some work

__anynomous__ : I think that is all we have on the agenda for today. Is there anything else that should be discussed now?

__defistaker__ : just one last thing- @__mcmmike__ suggested to open a keybase channel for cc council members and groundkeepers.

__mcmmike__ :  asked , but I am not an admin by now and can do it on my own. we need to wait for admins to open the room

__anynomous__ : A yes, could anyone give @__mcmmike__ admin rights, e.g. @__yeastplume__  or @__quentinlesceller__

__yeastplume__ : what's a groundskeeper? 

__defistaker__ : jankie and me are groundkeepers, doing tasks for grin CC, like transcribing meeting notes, preparing newsletter etc 

__anynomous__ : Basically someone like lehnberg, who is available for maintenance, administrative tasks, github maintenance and cleaning, newsletters, whatever is needed

__defistaker__ : I think It is a term jankie came up with :)

__jankie1800__ : it's a fun way of thinking about doing the dirty work around here. transcribe notes, financial reporting, basically whatever the councils need.. fixer/ do-er etc :)

__anynomous__ : They are like the greace in the CC machine, or is that a wrong analogy.

__yeastplume__ : Okay, let me check what we need to do here (I'm not a master of keybase admin, unfortunately)

__anynomous__ : A, well @__quentinlesceller__ is. We discussed it before, but I think it slipped his mind.

__yeastplume__ : Okay, no worries will discuss it with him when he's around (he's time-zone challenged with respect to us right now) 

__anynomous__ : Ok, I think that is really all then for today. 
                    
          


__Meeting adjourned__
                
`}


                </ReactMarkdown>



            </div>


            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Enquire with community on merits of TOR based grin.mw site.</li>
                    <li><RhombusItem />Refine wishlist items into repo with inclusion of community voting mechanism; further discussion to be held on forum.grin.mw</li>
                    <li><RhombusItem />Proceed to open channel for working with council and groundskeepers</li>

                </ul>
            </div>





        </section>
    );
}


