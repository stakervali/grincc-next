import Check from "../../assets/icons/check";
import CheckPrimary from "../../assets/icons/checkPrimary";
import DotsCircle from "../../assets/icons/dotsCircle";
import ProjectCard from "../../components/project/ProjectCard";
import {MILESTONESTATUS, PROJECTSTATUS} from "../../constants";
import {useEffect, useRef, useState} from "react";
import Wishlist from "../../components/project/Wishlist";


export default function Index() {

    const buttonOngoing = useRef();
    const buttonFinished = useRef();
    const buttonWishlist = useRef();

    const projectInfos = [
        {
        id: "coinswap-implementation",
        name: "Coinswap Implementation",
        owner: "Scillo",
        status: PROJECTSTATUS.INPROGRESS,
        description: "This projects aims to implement a MimbleWimble CoinSwap service.",
        milestones: [
            { description : "Serve & Apis",status: MILESTONESTATUS.COMPLETED},
            { description : "Single Server (Trusted Coinswap)", status:MILESTONESTATUS.ONGOING },
            { description : " Multi-Server (Trustless Coinswap)",status: MILESTONESTATUS.NOTSTARTED},
        ],
        githubLink: "https://github.com/",
        forumLink : "https://forum.grin.mw",
        approveDate: "22 February 2022",
        approveLink : "",
        fundingAmount : "£50,000"
    } ,
        {
            id: "improving-grin++",
            name: "Improving Grin++ ",
            owner: "davidtavarez",
            status: PROJECTSTATUS.FINISHED,
            description: "This projects aims to improve Grin++ project.",
            milestones: [
                { description : "Improving Grin++, specially the Android version",status: MILESTONESTATUS.COMPLETED},
                { description : "Improving the support of Grin++t for Raspberry Pi", status:MILESTONESTATUS.ONGOING },
            ],
            githubLink: "https://github.com/GrinPlusPlus/",
            forumLink : "https://forum.grin.mw/t/request-for-funding-davidtavarez-nov-jan-2021-22/9265/10",
            approveDate: "12 October 2021",
            approveLink : "https://github.com/grincc/agenda/blob/main/notes/12-10-2021-council-meeting-notes.md",
            fundingAmount : "€15,000"
        },

        {
            id: "improving-grin++-(2)",
            name: "Improving Grin++ (II) ",
            owner: "davidtavarez",
            status: PROJECTSTATUS.INPROGRESS,
            description: "This projects aims to improve Grin++ project.",
            milestones: [
                { description : "Facilitate payment proofs  ",status: MILESTONESTATUS.ONGOING},
                { description : "Simplify the process of enabling Tor bridges ", status:MILESTONESTATUS.ONGOING },
                { description : "Complete one-time use slatepack addresses ", status:MILESTONESTATUS.ONGOING },
            ],
            githubLink: "https://github.com/GrinPlusPlus/",
            forumLink : "https://forum.grin.mw/t/request-for-funding-davidtavarez-feb-apr-2022/9518",
            approveDate: "26 January 2022",
            approveLink : "https://forum.grin.mw/t/request-for-funding-davidtavarez-feb-apr-2022/9518/15",
            fundingAmount : "€15,000"
        },
        {
            id: "QR-slatepacks-in-cli",
            name: "Slatepacks as QR codes in CLI",
            owner: "cliik",
            status: PROJECTSTATUS.FINISHED,
            description: "This projects aims to generate slatepacks as QR code to have better usability.",
            milestones: [
                { description : "Implementation of grin-wallet",status: MILESTONESTATUS.COMPLETED},
                { description : "Approval of PR in mimblewimble/grin-wallet repo", status:MILESTONESTATUS.COMPLETED },
            ],
            githubLink: "https://github.com/mimblewimble/grin-wallet/pull/655",
            forumLink : "",
            approveDate: "-",
            approveLink : "",
            fundingAmount : "-"
        }

    ]

    const [filteredProjectInfos,setFilteredProjectInfos] = useState([])
    const [filterWord,setFilterWord] = useState(PROJECTSTATUS.INPROGRESS);

    useEffect(()=>{
        updateButtonColors(filterWord);
    },[])

    useEffect(()=>{

        if (filterWord=== PROJECTSTATUS.FINISHED || filterWord=== PROJECTSTATUS.INPROGRESS) {
            setFilteredProjectInfos(projectInfos.filter(i=>i.status===filterWord));
        }else {
            setFilteredProjectInfos(projectInfos);
        }


    },[filterWord])

    const handleFilter = (word)=>{
        setFilterWord(word);
        updateButtonColors(word)
    }

    const   updateButtonColors = (word)=>{
        if(word === PROJECTSTATUS.FINISHED){
            buttonFinished.current.classList.add("bg-gringreen","text-white");
            buttonOngoing.current.classList.remove("bg-grinblue","text-white");
            buttonWishlist.current.classList.remove("bg-yellow");

        } else if(word === PROJECTSTATUS.INPROGRESS){

            buttonOngoing.current.classList.add("bg-grinblue","text-white");
            buttonFinished.current.classList.remove("bg-gringreen","text-white")
            buttonWishlist.current.classList.remove("bg-yellow" )
        } else if(word === "wishlist"){
            buttonOngoing.current.classList.remove("bg-grinblue","text-white");
            buttonFinished.current.classList.remove("bg-gringreen","text-white")
            buttonWishlist.current.classList.add("bg-yellow" )
        }
    }


    return (
        <div className={"my-container"}>
            <h1 className={"header-1"}>Community Projects</h1>

            <p className={"text-center"}>
                Here you can browse the projects supported by community funding and requested features by Grin community.
            </p>

            <div className="text-center pb-12">
                <div className="inline-flex   mx-auto border-2 border-gray-200 rounded overflow-hidden mt-6 ">
                    <button onClick={()=>handleFilter(PROJECTSTATUS.INPROGRESS)}  ref={buttonOngoing} className="border-2 border-gray-200 py-1 px-4 flex-grow-0  bg-grinblue text-white focus:outline-none">In Progress</button>
                    <button onClick={()=>handleFilter(PROJECTSTATUS.FINISHED)} ref={buttonFinished} className="border-2 border-gray-200 py-1 px-4 flex-grow-0  bg-gringreen text-white focus:outline-none">Completed</button>
                    <button onClick={()=>handleFilter("wishlist")}  ref={buttonWishlist} className="border-2 border-gray-200 py-1 px-4 flex-grow-0 text-gray-dark bg-yellow dark:text-gray-300 focus:outline-none">Wish List</button>
                </div>
            </div>

            <div className="flex flex-wrap -m-4">
                { ( filterWord!== "wishlist" && filteredProjectInfos.map(info=>{
                    return (
                        <div className="p-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
                            <ProjectCard  name={info.name}
                                          owner={info.owner}
                                          status={info.status}
                                          description={info.description}
                                          milestones = {info.milestones}
                                          githubLink = {info.githubLink}
                                          forumLink = {info.forumLink}
                                          approveLink={info.approveLink}
                                          approveDate={info.approveDate}
                                          fundingAmount = {info.fundingAmount}
                            />
                        </div>
                    )
                }) )}
                { (filterWord === "wishlist" && <Wishlist /> )}

            </div>


        </div>
    );


}