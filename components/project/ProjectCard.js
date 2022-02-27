import CheckPrimary from "../../assets/icons/checkPrimary";
import DotsCircle from "../../assets/icons/dotsCircle";
import CheckGray from "../../assets/icons/CheckGray";
import GithubIcon from "../../assets/icons/githubIcon";
import DiscourseIcon from "../../assets/icons/DiscourseIcon"
import {PROJECTSTATUS,MILESTONESTATUS} from "../../constants";

/**
 *
 * @param name
 * @param owner
 * @param status
 * @param description
 * @param milestones
 * @param forumLink
 * @param githubLink
 * @param approveLink
 * @param approveDate
 * @param fundingAmount
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectCard({name,
                                     owner,
                                     status,
                                     description,
                                     milestones,
                                     forumLink,
                                     githubLink,
                                     approveLink,
                                     approveDate,
                                     fundingAmount,
                                      }){

       const checkGrayIcon = ()=>{
           return (
               <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                className="w-3 h-3" viewBox="0 0 24 24">
               <path d="M20 6L9 17l-5-5"></path>
           </svg>
            </span>)
       }


        const milestoneList = milestones.map(ms=>{
            return(
                <p className="flex items-center text-gray-600 dark:text-gray-200 ">
                    {ms.status === MILESTONESTATUS.COMPLETED &&  <CheckPrimary/>}
                    {ms.status === MILESTONESTATUS.ONGOING && <DotsCircle /> }
                    {ms.status === MILESTONESTATUS.NOTSTARTED &&  checkGrayIcon() }
                    {ms.description}
                </p>
            )
        })

        return (
            <div
                className="h-full p-6 rounded-lg border-2 border-gray-300  dark:border-gray-600  flex flex-col relative overflow-hidden">
                {( (PROJECTSTATUS.INPROGRESS === status) &&  <span  className="bg-grinblue text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">IN PROGRESS</span> )}
                {( (PROJECTSTATUS.FINISHED === status) &&  <span  className="bg-gringreen text-white dark:text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">COMPLETED</span> )}

                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">@{owner}</h2>
                <h1 className="text-3xl text-gray-900 dark:text-gray-100 pb-4 mb-4 border-b border-gray-200 dark:border-gray-600 leading-none">{name}</h1>
                <p className={"text-lg text-gray-600 dark:text-gray-300"}>
                    {description}

                </p>
                <p className={"text-bold text-gray-800 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 "}>
                    Milestones
                </p>
                {milestoneList}


                <div className={"flex flex-row justify-between  "}>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-200 mt-3">Approved at <a href={approveLink} className={"text-primary"}> {approveDate}</a></p>
                        <p className="text-xs text-gray-500 dark:text-gray-200">Total funding amount: <b> {fundingAmount} </b></p>

                    </div>

                    <div className={"flex flex-row space-x-4 my-auto"}>
                        <a  className={"text-gray-500"} href={githubLink} >  <GithubIcon size={32} /> </a>
                        <a  className={"text-gray-500"} href={forumLink} >  <DiscourseIcon size={32} />  </a>
                    </div>
                </div>

                {/*<button*/}
                {/*    className="flex items-center mt-auto text-primary border-2 border-primary py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"> Forum*/}
                {/*    Link*/}
                {/*    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                {/*         strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">*/}
                {/*        <path d="M5 12h14M12 5l7 7-7 7"></path>*/}
                {/*    </svg>*/}
                {/*</button>*/}

            </div>
        )
}