import Link from 'next/link'
import {useEffect, useState} from "react";
import DuplicateIcon from "../../assets/icons/duplicateIcon";



export default function Home() {

    let [grinWalletStatus,setGrinWalletStatus] = useState("unknown");

    useEffect(()=>{

        fetch("https://grinnode.live:8080/walletcheck/grin1jezf3lkcexvj3ydjwanan6khs42fr4036guh0c4vkc04fyxarl6svjzuuh")
            .then(response=>response.json())
            .then(data=>{
                if(data['isWalletValid'])  {
                    setGrinWalletStatus("online");
                    console.log("grin wallet is online");
                }else{
                    setGrinWalletStatus("offline")
                    console.log("grin wallet is offline");
                }
            })
            .catch(e=>{
                setGrinWalletStatus("unknown");
                console.log(e);
                console.log("grin wallet status is unknown");
            })

    },[])

    return (
        <div className="my-container">
            <h1 className="header-1">Grin Community Council Addresses</h1>
            <div className="py-4">
            <h2 className="header-2">About</h2>
            <p>This document is the only valid list of addresses for donations, sponsorships, or other forms of payments intended for the Grin community council project.</p>
            <p>For GRIN Original Council payment addresses see <Link href="https://github.com/grincc/finance/blob/main/addresses.md"><a>here</a></Link>.</p>
            </div>
            <h2 className="header-2">Verification</h2>
            <p>This document should be hosted on the following address:</p>
            <p><Link href="https://github.com/grincc/finance"><a>Grin Community Council Finance repository</a></Link> </p>
            <h2 className="header-2">Contact</h2>
            <p>Any questions or concerns about authenticity can be raised publicly in the Grin community via <Link href="https://keybase.io/team/grincoin" ><a>keybase</a></Link>.</p>

            <div className="mt-8 border rounded-md border-gray-400 p-4">
            <h2 className="header-2">List of addresses</h2>

            <h3 className="text-lg text-gray-700 dark:text-gray-100">Grin
                {grinWalletStatus ? <span className="py-1 px-2 mx-2 rounded-full text-xs text-white bg-green-600">online</span> :
                                <span className="py-1 px-2 mx-2 rounded-full text-xs text-white bg-red-600">offline</span>
                }
            </h3>

            <p className="break-all"> grin1jezf3lkcexvj3ydjwanan6khs42fr4036guh0c4vkc04fyxarl6svjzuuh

            </p>

            <h3 className="text-lg text-gray-700 dark:text-gray-100">Bitcoin</h3>
            <p className="break-all"> bc1qmdhmgmhd6j89225hzdh7dxqgmen3y2q0g4vgpez0tw9tkp4ae39qsqvuyl</p>

            </div>


        </div>



    )
}