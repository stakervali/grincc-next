import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function February012022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes January 3, 2022</h1>

            <p className="py-8">Community Council (CC) meeting held @ 15 UTC in grincoin#general channel on Keybase.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> satoshocrat</li>
                    <li><UserIcon /> nicolasflamel1</li>
                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> dtavarez</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem />Cekickafa was asked if he contacted community member naive about the testminer, and he replied, "Yes, another community member funded his electricity costs"  </li>
                    <li><RhombusItem /> Python cffi secp256k1-zkp wrapper - bounty. The code has been cursorily reviewed and the tests are present, but have not yet been initiated.  </li>
                    <li><RhombusItem />The distribution of the Python Wrapper bounty has been unlocked and give to nicolasflamel1 due to inactivity and lack of response by walkbackgod.  </li>
                    <li><RhombusItem />Community Council will be sponsoring a meme contest to the amount of $5-$10 payable in Grin. </li>
                    <li><RhombusItem />Discussion regarding forum post https://forum.grin.mw/t/minimalism-in-spending-of-the-community-council/10228 regarding minimization of spending from the CC.  </li>
                    <li><RhombusItem />Anynonmous will reach out to Renzokuken to ensure the code is complete, David Tavarez will review for completion as well  </li>

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

                <p>Last meeting's notes <a href="/meetings/december-20-2022" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1.   <a href="#issue_1" className="text-primary">Python cffi secp256k1-zkp wrapper - bounty  <DownRightArrow/> </a> </li>

                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. Python cffi secp256k1-zkp wrapper - bounty </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {`_cekickafa_ He is absent now i think but code is there, some contributions, nice to see👍

_anynomous_ think we need two formal reviews before paying out, but based on everything I have seen I do not think that will be any issue.
Regarding the distribution of the bounty, to me it looks logical 100% of the bounty will go to @nicolasflamel1. Walkback god has our thanks for initially taking this up, but since 1) he only contributed a little and 2) he disappeared without communication and 3) the nature of a bounty is all or nothing or a checkpoint, I think it is only fair that @nicolasflamel1 will claim the full bounty of 10k$ in BTC. Orriginally a 10% payment in Grin was proposed but since the CC is low on Grin funds, I propose the bounty will be paid in full in BTC.

Please upvote if you agree, if you think this is unfair to Walkback god, please let us know by downvoting or providing your arguments here in the comments.


_cekickafa_ Well, i pinged  @walkbackgod twice. I would like to hear from him also but couldnt. Thats all i can say. He seemed interested with Grin, maybe he joins again.


_anynomous_ I think so, probably life just happened, and not everyone checks every communication channel frequently. In any case, he has our thanks for taking on this bounty innitially, hopefully we will see more of him/her in the future, just like I hope we will see more from you in the future @nicolasflamel1


I think we need two formal reviewsout, but based on everything I have seen I do not think that will be any issue. Regarding the distribution of the bounty, to me it looks logical 100% of the bounty will go to @nicolasflamel1. Walkback god has our thanks for initially taking this up, but since 1) he only contributed a little and 2) he disappeared without communication and 3) the nature of a bounty is all or nothing or a checkpoint, I think it is only fair that @nicolasflamel1 will claim the full bounty of 10k$ in BTC. Orriginally a 10% payment in Grin was proposed but since the CC is low on Grin funds, I propose the bounty will be paid in full in BTC.

I think it can be paid
I would like to propose to donate 100 Grin to this meme contest (something like 7 dollar in value currently)
The pip package is already published
@dtavarez Have you tested it? I only browsed the code, but did not run any tests.
anynomous
As for todays second topic" 2) CC sponsoring the 2023 meme contest (5-10$) in Grin https://forum.grin.mw/t/2023-meme-contest-anything-goes-just-have-fun-meming/10254

I will donate too

_anynomous_ @dtavarez Have you tested it? I only browsed the code, but did not run any tests.
Not yet, I could dig more and write some test
I’ll do it, I actually want to test it anyways
The test cases are there I think, mostly we just need to run those.
i already donated 500 grin to ipollo campaing for test miners, but i will donate also. :)
Please upvote or downvote this proposal:
keybase://chat/grincoin#general/56143

Same for our groundkeepers, @cekickafa @satoshocrat . I know this might be inconvenient, but you know it now while having 4-5 months of funding

_cekickafa_ Well, this applies to all community. There is nothing wrong about taking conservative measures.

_anynomous_ I agree, in the long run this will really benefit the project and the community while just being saving for a short while.

_cekickafa_ I am committed to Grin, and do my best as much as i can do.

_dtavarez_ but my position remains the same: the funds should be dedicated to the development of Grin, and we must keep it that way

_anynomous_ We will, we will just be strategic about the timing and impact of the funds.
I think that is all for today. If there is anything more, please bring it to the discussion now.

_dtavarez_ I do not feel OK deciding what is important and what is not, that's why I keep bringing the Post 5.0 wish list
maybe we should review the list and add bounties
create bounties based on that list
and keep the funds open to long task like PIBD implementation

_anynomous_ And if not, I would like to thank you all for your input today. Do not forget to provide feedback on the forum and contribute memes:
https://forum.grin.mw/t/minimalism-in-spending-of-the-community-council/10228/21
https://forum.grin.mw/t/2023-meme-contest-anything-goes-just-have-fun-meming/10254/3

Community members can look at thie post  5.0 wishlist and use it as basis to provide their feedback on the minimal spending proposal, which features should we make exceptions for and fund right away?
Probably 90% of the community will say PIBD and CoinSwap should be exceptions, but I let everyone decide that for themselves and provide arguments on the forum
EDITED
Cya all in the next meeting in two weeks from now, till then have fun meming 😊 
                 


__Meeting adjourned__
                
`}
                </ReactMarkdown>
            </div>
            {/* Action POINTS */}
            <div className="py-4">
                <h1 className="header-2">Action Points</h1>

                <ul className="space-y-2">
                    <li><RhombusItem /> Anynonmous will reach out to Renzokuken to ensure the Python Wrapper code is complete; David Tavarez will review for completion as well.</li>

                </ul>
            </div>
        </section>
    );
}

