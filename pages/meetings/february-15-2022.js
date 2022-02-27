import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function February012022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes February 15, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted 30 min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> phyro</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> jankie1800</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> Project and wishlist pages has been designed for grincc web site. </li>
                    <li><RhombusItem /> A PR for PIBD has been made in which a node is able to sync itself fully via PIBD under ideal conditions. </li>

                </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li>No votes held </li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/february-01-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Update on Grin community website with @defistaker <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. Update on PIBD development with @yeastplume <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Update on Grin community website with @defistaker </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__anynomous__ : A few updates before we begin:

                     1) David Tavarez’s funding request for February-April was approved by a formal council vote[[forum request]](https://forum.grin.mw/t/request-for-funding-davidtavarez-feb-apr-2022/9518/15)
                     2) First community miners are being tested and sent this week
__defistaker__ : So I did update the site with comments on progress thread, added a light/dark theme with a button, added official grin site to footer etc.
 * __anynomous__ : link?
 * __defistaker__ : https://stakervali.github.io/
    
__defistaker__ : I also added a home page with a short explanation of Grin CC's mission. I am working on Projects page, not deployed yet, but I can share SS. This is the project info card with a short description, milestones, project owner, approval details and github/forum links. I also added a tab to choose completed and on going projects 
<p align="center">
  <img width="300" height="410" src="https://u.teknik.io/KR1av.png">
</p>
  
__anynomous__ : Looking sleek. I will take a more detailed look later, but it looks like it is getting ready to go main. From the screen I like the format and presentation- Sorry, I did not yet have time to look more into gihub plugins or visuals for a Wishlist or roadmap for Grin (showing old and new). But nice seeing things progressed on your side.
 * __defistaker__ : thanks
    
__defistaker__ : For deployment, If I deploy to a server, can we redirect domain name (grin.cc) to it ?
 * __anynomous__ : Who controls that domain at the moment, not sure who bought it but sure we could link it. 
 * 👍 (__defistaker__)
 
                    
                    `}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. Update on PIBD development</h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`__anynomous__ : __@yeastplume__ How are things going on your side, any updates on PIDB or others?

__yeastplume__ : not bad at all, should be a massive step forward with PIBD on the next PR merge here https://github.com/mimblewimble/grin/pull/3692, because the PIBD sync process should work at least on a controlled testnet provided nothing goes wrong, but the basic process works, it's just a matter of refining the rest of the proces. There's a separate branch from master that contains all of the pibd changes, so anyone should be able to build and test it
 * __jankie1800__ : that's quick work @yeastplume congrats on the progress.
    * :tada: (__yeastplume__, __cekickafa__) :rocket: (__anynomous__)
    
__defistaker__ : On the example on design side of website, PIBD was also on wishlist. So should I remove it from the list? Add it to on going projects?
 * __yeastplume__ : yes, it's definitely beyond a wish now :D 
    
__anynomous__ : @__defistaker__ Maybe keep on the wishlist, but as in progress. But you could also remove it, as longs as it is in one page shown what is wished, worked on in the past and in the present. It depends a bit what format the wishlist and roadmap and pending projects page will take.
 * __defistaker__ : Okay, I can move it to on going projects. Or I think we can keep it in wish list and write a note in the description that it is being worked on actively.
    
__defistaker__ : Another question, is PIBD funded by community fund ? If not should we include projects funded by OC. I think we should :)
 * __yeastplume__ : no, it's part of my ongoing work, I'm 'hired' by the OC at the moment so to speak
 * __anynomous__ : Good, as long as your compensated for your effort, or are otherwise getting around.
   * 💯 (__jankie1800__, __defistaker__) 👍 (__yeastplume__, __cekickafa__)

__anynomous__ : Anyhow, looks like things are progressing nicely on the website. I am working on extending the hub part with some more folders, /memes,  /art, /marketing. With PIBD also progressing rapidly, it looks like everything is going nicely. Are there any other things we need to discuss, or that any of you would like to share today?

__anynomous__ : Thank you all, hope to see you all again in 2 weeks.

👋 (__anynomous__, __yeastplume__, __phyro__, __cekickafa__, __defistaker__, __jankie1800__)
                    
                    
             


__Meeting adjourned__
                
`}


                </ReactMarkdown>



            </div>


            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem />Details for inflation bugs bounty will be discussed internally by OC.</li>
                    <li><RhombusItem />Groundkeeper's task list will be clarified for better performance measurability.</li>
                    <li><RhombusItem />jankie's groundkeeper's fund proposal will be voted by CC and announced on the forum.</li>
                    <li><RhombusItem />@scillo's payment for coinswap implementation - milestone 1 will be transferred in the next 1-2 weeks and announced on the forum.</li>

                </ul>
            </div>





        </section>
    );
}

