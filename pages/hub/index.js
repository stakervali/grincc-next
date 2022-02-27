import Link from "next/link";
import RhombusItem from "../../assets/icons/rhombusItem";
import DownRightArrow from "../../assets/icons/downRightArrow";

export default function Hub() {
    return (
        <div className="my-container">
            <h1 className="header-1" >HUB - Tools - Documentation - Channels - Articles</h1>

            <p>
                GRIN scripts and tools. Find scripts in <a className="text-primary"
                                                            href="https://github.com/grincc/tools/tree/main/scripts"
            >this directory</a>. Other tools are in the linked repositories can be found below
            </p>

            {/*Grin Block Explorers*/}
            <div className="py-4">
                <h2 className="header-2">Hub of links to other repositories with Grin tools and scripts</h2>

                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem />  <b>GrinVention:</b> Pure Python implementation of Mimblewimble protocol for Grin cryptocurrency
                        <p className="pl-8">
                        <a href="https://github.com/grinventions/" className="text-primary">https://github.com/grinventions/</a>
                        </p>
                    </li>

                    <li><RhombusItem /> <b>Grin Mail:</b> Automatically send and receive transactions via email (last commit 05-07-2021)
                        <p className="pl-8">
                            <a href="https://github.com/aixinrock/grinmail/blob/main/README-en.md" className="text-primary">https://github.com/aixinrock/grinmail/blob/main/README-en.md</a>
                        </p>
                    </li>


                    <li><RhombusItem /> <b>Testnet exchange: </b> Template solution for exchanges consits of 2 pieces 1) the Grin Wallet APIs for Grin community wallet developers via a JSON-RPC interface 2) areference command-line wallet, which provides a baseline wallet for Grin and demonstrates how the wallet APIs should be called.
                        <p className="pl-8">
                            <a href="https://github.com/pkariz/grin-wallet/tree/fix/invoice-issues" className="text-primary">https://github.com/pkariz/grin-wallet/tree/fix/invoice-issues </a>
                        </p>
                    </li>

                    <li><RhombusItem /> <b> grin-wallet: </b>command line (Rust), backend for Niffler and Ironbelly wallet
                        <p className="pl-8">
                            <a href="https://github.com/mimblewimble/grin-wallet" className="text-primary"> https://github.com/mimblewimble/grin-wallet </a>
                        </p>
                    </li>

                    <li><RhombusItem /> <b> Grin++: </b>  wallet (written in C++), supports desktop and mobile
                        <p className="pl-8">
                            <a href="https://grinplusplus.github.io/" className="text-primary">https://grinplusplus.github.io/</a>
                        </p>
                    </li>

                    <li><RhombusItem /> <b>Ironbelly: </b> mobile Grin wallet (Android and iOS), runs a lite node optionally connects to your own node for extra privacy
                        <p className="pl-8">
                            <a href=" " className="text-primary">https://github.com/i1skn/ironbelly</a>
                        </p>
                    </li>

                    <li><RhombusItem /> <b> Niffler GUI wallet:  </b> Rust grin-wallet (rust) as backend
                        <p className="pl-8">
                            <a href=" " className="text-primary"> https://github.com/grinfans/niffler </a>
                        </p>
                    </li>

                    <li><RhombusItem /> <b> Vault713 - Grinbox: </b> (last commit 2019) - Grinbox provides a simple way for parties to exchange transaction slates, 3rd party as transaction buffer/intermediate.
                        <p className="pl-8">
                            <a href="https://github.com/vault713/grinbox" className="text-primary"> https://github.com/vault713/grinbox </a>
                        </p>
                    </li>

                    <li><RhombusItem /> <b> GrinGots wizarding bank: </b> (last commits in 2019), Gringotts is a CLI app that you can use to send and receive grins instantly using one of the available backends for communication.
                        <p className="pl-8">
                            <a href="https://github.com/mcdallas/gringotts" className="text-primary"> https://github.com/mcdallas/gringotts </a>
                            <a href="https://github.com/mcdallas/gringotts-rust" className="text-primary"> https://github.com/mcdallas/gringotts-rust </a>
                        </p>
                    </li>


                </ul>

            </div>

            {/*Other link outs*/}
            <div className="py-4">
                <h2 className="header-2">Other link outss</h2>
                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem />  <b>Grin official website: </b> Find all information and links to node and wallet software you might be searching for
                        <p className="pl-8">
                            <a href="https://grin.mw/" className="text-primary">https://grin.mw/</a>
                        </p>
                    </li>

                     <li><RhombusItem />  <b>Grin main github page:</b>
                        <p className="pl-8">
                            <a href="https://github.com/mimblewimble/grin" className="text-primary">https://github.com/mimblewimble/grin</a>
                        </p>
                    </li>

                     <li><RhombusItem />  <b>Grinnode.live:  </b> High-available GRIN-API & Sync-Service (very convenient if you are a developer)
                         <p className="pl-8">
                            <a href="https://grinnode.live/" className="text-primary">https://grinnode.live/</a>
                        </p>
                    </li>

                     <li><RhombusItem />  <b> Slatepack market place:</b> Buy and sell with Grin, have fun.
                         <p className="pl-8">
                            <a href="https://slatepacks.com/" className="text-primary">https://slatepacks.com/</a>
                        </p>
                    </li>

                     <li><RhombusItem />  <b>Grin documentation: </b> Your journey down the rabit hole starts here! Learn about where Grin comes from, Mimble Wimble, Pederson commitments, Eliptic Curve cryptography as well as practical tutorails on how to install and use the grin node software and grin-wallet.
                         <p className="pl-8">
                            <a href="https://docs.grin.mw/" className="text-primary">https://docs.grin.mw/</a>
                        </p>
                    </li>

                     <li><RhombusItem />  <b> Grin link to old mailing list</b>
                        <p className="pl-8">
                            <a href="https://lists.launchpad.net/mimblewimble/" className="text-primary">https://lists.launchpad.net/mimblewimble/</a>
                        </p>
                    </li>

                     <li><RhombusItem />  <b>Grin Papyrus: </b> Collection of important documents and links related to the development of GRIN. Find back everything, the early steps towards Grin in 2016, launch in 2019 and everything that happened after
                         <p className="pl-8">
                            <a href="https://github.com/Grinnode-live/GRIN-papyrus" className="text-primary">https://github.com/Grinnode-live/GRIN-papyrus</a>
                        </p>
                    </li>

                     <li><RhombusItem />  <b>What is Grin?</b> Explenation on emission, transaction aggretation and mimble wimble with some nice visuals usefull for presentations, by Phyro.
                         <p className="pl-8">
                            <a href="https://github.com/phyro/what-is-grin" className="text-primary">https://github.com/phyro/what-is-grin</a>
                        </p>
                    </li>

                     <li><RhombusItem />  <b>Grin newsletter: </b> Sign up or click on 'Read first' to read old Grin newsletters
                         <p className="pl-8">
                            <a href="https://grinnews.substack.com/" className="text-primary">https://grinnews.substack.com/</a>
                        </p>
                    </li>
                </ul>

            </div>

            {/*External articles*/}
            <div className="py-4">
                <h2 className="header-2">External articles</h2>

                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem />  <b>Articles on Grin and Mimble Wimble: </b> Just a few of the many, feel free to add more.
                        <p className="pl-8">
                            <a href="https://www.blockchainbeach.com/going-deep-on-privacy-mimblewimble/" className="text-primary">https://www.blockchainbeach.com/going-deep-on-privacy-mimblewimble/</a>
                        </p>
                        <p className="pl-8">
                            <a href="https://smithandcrown.com/research/grin-mimblewimble/" className="text-primary">https://smithandcrown.com/research/grin-mimblewimble/</a>
                        </p>
                    </li>

                </ul>

            </div>

            {/*Community channels and social media*/}
            <div className="py-4">
                <h2 className="header-2">Community channels and social media</h2>

                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem />  <b>KeyBase:</b> Grincoin on keybase is the best place for technical discussions and to join general meetings
                        <p className="pl-8">
                            <a href="https://keybase.io/team/grincoin" className="text-primary">https://keybase.io/team/grincoin</a>

                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Forum: </b> Discuss everything Grin, meme contests, Research, mining, market, you name it!
                        <p className="pl-8">
                            <a href="https://forum.grin.mw/" className="text-primary">https://forum.grin.mw/</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Telegram community:</b> Buzzing with discussions memes, and anything else Grin related
                        <p className="pl-8">
                            <a href="https://t.me/grinprivacy" className="text-primary">https://t.me/grinprivacy</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin++ Telegram group:</b> Any problems or questions with regard to Grin++ wallet, ask here.
                        <p className="pl-8">
                            <a href="https://t.me/GrinPP" className="text-primary">https://t.me/GrinPP</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Ironbelly Telegram group:</b> Any problems or questions with regard to Ironbelly wallet, ask here.
                        <p className="pl-8">
                            <a href="https://t.me/ironbelly" className="text-primary">https://t.me/ironbelly</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grinventions Telegram channel:</b> Innovative inventions for the grin cryptocurrency. Also discusses building the MimbleWimble Python implementatoin and quantum computing basic in Python
                        <p className="pl-8">
                            <a href="https://t.me/grinventions" className="text-primary">https://t.me/grinventions</a>

                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Twitter:</b> Activities suspender bla bla. When they try to silence you ... you know you are on the right path!
                        <p className="pl-8">
                            <a href="https://twitter.com/grinMW" className="text-primary">https://twitter.com/grinMW</a>

                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Reddit</b> Not that active, for more busy channels, check Telegram, Keybase and the forum
                        <p className="pl-8">
                            <a href="https://www.reddit.com/r/GRIN/" className="text-primary">https://www.reddit.com/r/GRIN/</a>
                        </p>
                    </li>
                </ul>

            </div>


        </div>
    )
}