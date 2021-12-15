import Link from 'next/link'
import {useEffect, useState} from "react";




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
        <div>
            <h1 className="text-6xl text-yellow" >Crin Community Council Addresses</h1>
            <h2>About</h2>
            <p>This document is the only valid list of addresses for donations, sponsorships, or other forms of payments intended for the Grin community council project.</p>
            <p>For GRIN Original Council payment addresses see <Link href="https://github.com/mimblewimble/grin-pm/blob/master/financials/addresses.md"><a>here</a></Link>.</p>
            <h2>Verification</h2>
            <p>This document should be hosted on the following address:</p>
            <p><Link href="https://github.com/grincc/finance/addresses.md"><a>Grin Community Council Finance repository</a></Link> </p>
            <h2>Contact</h2>
            <p>Any questions or concerns about authenticity can be raised publicly in the Grin community via <Link href="https://keybase.io/team/grincoin" ><a>keybase</a></Link>.</p>

            <h2>List of addresses</h2>
            <h3>Grin</h3>

            <p>grin1jezf3lkcexvj3ydjwanan6khs42fr4036guh0c4vkc04fyxarl6svjzuuh</p>

            <h3>Bitcoin</h3>
            <p> bc1qmdhmgmhd6j89225hzdh7dxqgmen3y2q0g4vgpez0tw9tkp4ae39qsqvuyl</p>




        </div>



    )
}