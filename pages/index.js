    import React from 'react';
import RightArrow from "../components/icons/rightArrow";
import Check from "../components/icons/check";
import Link from 'next/link'
import UserIcon from "../components/icons/userIcon";

//  I think it's a good idea to transfer some financial resources and opportunities &responsibilities to the wider community
//  think one aim here (at least my personal understanding) is this frees up "core" to focus on dev tasks on the rust impl. And defers community focused things to a separate council.
//  https://gist.github.com/yeastplume/5d1913c7dc40c40f409ffcfe8fa9b094
//  https://forum.grin.mw/t/call-for-grin-community-candidates-for-additional-fund-granting-control/8521
//     https://forum.grin.mw/t/fund-alternative-a-split-fund-proposal/8476/21
//     https://forum.grin.mw/t/council-evolution-clarification/9021

function Index(props) {


    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="header-1" >Grin Community Council</h1>
                <p>Grin Community Council is formed in May 2021 with the vote of <Link href={"https://forum.grin.mw/t/call-for-grin-community-candidates-for-additional-fund-granting-control/8521/13"}><a className="text-primary" >community</a></Link>. </p>
                <p>Grin CC manages a community fund which supports the projects that extend Grin ecosystem </p>


                <h2 className="header-2">Community Council Members </h2>
                <div className="py-4">
                    <h1 className="text-2xl text-gray-800 pt-8 pb-4" >Community Attendence</h1>
                    <ul>
                        <li><UserIcon /> anynomous</li>
                        <li><UserIcon /> hendi</li>
                        <li><UserIcon /> mcmmike</li>
                        <li><UserIcon /> dtavarez</li>
                        <li><UserIcon /> future3000</li>
                        <li><UserIcon /> paouky</li>
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default Index;