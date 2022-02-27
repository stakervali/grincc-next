import React from 'react';
import UserIcon from "../../assets/icons/userIcon";
import RhombusItem from "../../assets/icons/rhombusItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DownRightArrow from "../../assets/icons/downRightArrow";




export default function February012022(props) {
    return (
        <section  className="my-container ">
            <h1 className="header-1" >Council Meeting Notes December 7, 2021</h1>

            <p className="py-8">Community Council (CC) meeting held @ 10 UTC in grincoin#general channel on Keybase. Meeting lasted - min.
                Notes are truncated, and conversations sorted based on topic and not always chronological. Quotes are edited for brevity and clarity, and not always exact.
            </p>
            <div className="py-4">
                <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                <ul>

                    <li><UserIcon /> anynomous</li>
                    <li><UserIcon /> phyro</li>
                    <li><UserIcon /> yeastplume</li>
                    <li><UserIcon /> mark_hollis</li>
                    <li><UserIcon /> quentinlesceller</li>
                    <li><UserIcon /> cekickafa</li>
                    <li><UserIcon /> defistaker</li>
                    <li><UserIcon /> tromp</li>
                    <li><UserIcon /> jankie1800</li>
                    <li><UserIcon /> scillo</li>

                </ul>
            </div>
            <div className="py-4">
                <h1 className="header-2" >Short Summary</h1>
                <ul className="space-y-2">
                    <li><RhombusItem /> upbit listing proposal turns out to be a scam.</li>

                </ul>
            </div>

            {/* VOTING RESULTS */}
            <div className="py-4">
                <h1 className="header-2" >Voting Results</h1>

                <ul className="space-y-2">
                    <li>Vote to offer inflation bugs bounty (by OC) VOTE PASSED (YES)  </li>
                </ul>
            </div>

            {/* AGENDA POINTS */}
            <div className="py-4">
                <h1 className="header-2">Agenda Points</h1>

                <p>Last meeting's notes <a href="/meetings/november-23-2021" className="text-primary text-sm" > here</a> </p>

                <ul className="space-y-2">
                    <li>1. Upbit listing proposal <a href="#issue_1" className="text-primary">  <DownRightArrow/> </a> </li>
                    <li>2. Inflation bugs bounty <a href="#issue_2" className="text-primary"><DownRightArrow/> </a></li>
                    <li>3. Request for funding Groundskeeper @jankie Dec-Feb 2021/22<a href="#issue_3" className="text-primary"><DownRightArrow/>  </a> </li>
                    <li>4. Update on payment for @scilio's coinswap implementation - milestone 1<a href="#issue_4" className="text-primary"> <DownRightArrow/>  </a> </li>
                    <li>5. Development update by @yeastplume<a href="#issue_5" className="text-primary"> <DownRightArrow/>  </a> </li>
                </ul>
            </div>

            <div className="px-4" >

                {/*Issue 1*/}
                <h1 id="issue_1"  className="text-xl mt-10 mb-4 px">1. </h1>
                <ReactMarkdown className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {``}
                </ReactMarkdown>

                {/*Issue 2*/}
                <h1 id="issue_2"  className="text-xl mt-10 mb-4 px">2. </h1>

                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >
                    {` 
                    
                    
            `}</ReactMarkdown>

                {/*Issue 3*/}
                <h1 id="issue_3"  className="text-xl mt-10 mb-4 px">3. </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{`
                
 
                
`}
                </ReactMarkdown>

                {/*Issue 4              */}
                <h1 id="issue_4"  className="text-xl mt-10 mb-4 px">4. </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{` 
                
`}

                </ReactMarkdown>

                {/*Issue 5              */}
                <h1 id="issue_5"  className="text-xl mt-10 mb-4 px">5.  </h1>
                <ReactMarkdown  className="meeting-text"  remarkPlugins={[remarkGfm]}  >{` 
                


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

