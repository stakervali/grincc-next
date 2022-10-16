import React from 'react';
import RightArrow from "../assets/icons/rightArrow";
import Check from "../assets/icons/check";
import Link from 'next/link'
import UserIcon from "../assets/icons/userIcon";


function Index(props) {
   return (
         <section className="text-gray-600 dark:bg-text-300 body-font">
            <div className="my-container ">
                <h1 className="header-1" >Grin Community Council</h1>
                <p>Grin Community Council is <a className="text-primary" href="https://forum.grin.mw/t/call-for-grin-community-candidates-for-additional-fund-granting-control/8521/13">formed</a> from valued community members with remarkable contributions to Grin in 2021 May.
                    Council's main task is to control and direct <i>Grin Community Fund </i> to support grin projects, bounties and community activities. Current council members are : </p>

                <div className="py-4">

                    <ul className="pl-4 pb-4">
                        <li><UserIcon /> anynomous</li>
                        <li><UserIcon /> hendi</li>
                        <li><UserIcon /> mcmmike</li>
                        <li><UserIcon /> dtavarez</li>
                        <li><UserIcon /> future3000</li>
                        <li><UserIcon /> mwgrin_fr</li>
                    </ul>
                </div>
                <h2 className="header-2">Background</h2>
                <div className="pb-4 text-justify">
                    <p >
                        Since its launch in 2019, Grin development was funded by only donations. Donations to <a className="text-primary" href="https://grin.mw/fund">Grin General Fund</a> was controlled by <i>Original Grin Council</i> according to <a href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0002-grin-governance.md">Grin Governance RFC</a>. After the last planned hard fork, this RFC has been replaced with <a href="https://github.com/mimblewimble/grin-rfcs/blob/master/text/0016-simplify-governance.md">Simplify-Governance RFC</a>. Meanwhile community has raised its voice for supporting of more projects extendeding grin and its usability which was heard by <i>Original Grin Council</i>. One of Original Grin Council members, yeastplume made a <a href="https://gist.github.com/yeastplume/5d1913c7dc40c40f409ffcfe8fa9b094">proposition</a> to split <i>Grin Development Fund</i>, and give control to a second group (or more than one group) for decentralizing governance. After discussions of several different split strategies in governance meetings <a href="https://github.com/mimblewimble/grin-pm/blob/master/notes/20210216-meeting-governance.md">²</a> <a href="https://github.com/newjack777/grin-pm/blob/master/notes/20210302-meeting-governance.md">³</a> and <a href="https://forum.grin.mw/t/call-for-grin-community-candidates-for-additional-fund-granting-control/8521">community</a>, it was decided to split Development Fund into two funds:
                    </p>
                    <ul className="pl-4 py-2">

                        <li>1. <i>Grin Development Fund</i> to support core grin development</li>
                        <li>2. <i>Grin Community Fund</i> to support community projects</li>

                    </ul>
                    <p>
                        Community Council candidates are called for joining to council, among four of them (<i>dtavarez</i>, <i>hendi</i>, <i>mcmmike</i>, <i>paouky</i>) were <a href="https://forum.grin.mw/t/call-for-grin-community-candidates-for-additional-fund-granting-control/8521/3?u=stakerv">approved</a> by original Council. To allow more community participation two additional council members (<i>anynomous</i>, <i>future3000</i>) are selected only by <a href="https://forum.grin.mw/t/call-for-grin-community-candidates-for-additional-fund-granting-control/8521/13?u=stakerv">votes</a> of the community. In June 22, the first <a href="https://github.com/grincc/agenda/blob/main/notes/22-06-2021-council-meeting-notes.md">community council meeting</a> held. In Septemper 20, Grin community Fund <a href="https://forum.grin.mw/t/grin-community-council-cc-received-funds-of-33-btc-lets-get-to-work/9247">received</a> <i>33 BTC</i> from original Grin Development Fund, by which splitting of funds has been realized.
                    </p>
                </div>
                <h2 className="header-2">Grin Community Fund</h2>
                <div className="pb-4">
                    <p>
                         Grin Community fund is initially seeded by splitting a portion of Grin Development Fund. In order to keep independence community fund solely relies on community donations. If you want to keep Grin growing, please consider donation to <a href="https://github.com/grincc/finance/blob/main/addresses.md">Grin Community Fund</a>.
                    </p>
                </div>
                <h2 className="header-2">Community Meetings</h2>
                <div className="pb-4">
                    <p>
                        Grin Community Council is gathered every 1st and 3th Tuesday of the month  with a predefined agenda in <a href="https://keybase.io/team/grincoin">Keybase#general channel</a>. Everyone is free to offer agenda topics before the meetings, join the meetings and express their opinions and ideas in a friendly and respectful environment. Previous meetings notes can be found <a href="https://github.com/grincc/agenda/tree/main/notes">here</a>. You can follow next meetings agenda in community council agenda <a href="https://github.com/grincc/agenda/issues">repo</a>.
                    </p>
                </div>




            </div>
        </section>

    );
}

export default Index;