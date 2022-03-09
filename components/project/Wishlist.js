import WishItem from "./WishItem";
import Link from 'next/link';

export default function Wishlist({props}) {

    const wishes = [
        {
            title: "Formal prover / integrity checker",
            link: "https://github.com/stakervali/grin-wishlist/issues/13",
            description: <p> A related discussion on the forum can be found <a href='https://forum.grin.mw/t/investigation-formal-proofs-alternate-verifier-implementation/8712/16'> here</a>.</p>

        },
        {
            title: "Display slatepacks as QR codes in CLI",
            link: "https://github.com/stakervali/grin-wishlist/issues/12",
            description: "This feature would improve user experience for transactions."
        },
        {
            title: "One-time use slatepack addresses for wallet",
            link: "https://github.com/stakervali/grin-wishlist/issues/11",
            description: <p>Work on this feature has been started by <b><i>@davidtavarez</i></b> and funded by Grin CC. under  <b>Improving Grin++ (II)</b>  project. </p>
        },
        {
            title: "Invoice payment proofs",
            link: "https://github.com/stakervali/grin-wishlist/issues/10",
            description: <p>There is an on-going work for early payment proofs <a href="https://github.com/mimblewimble/grin-rfcs/pull/70">RFC</a>. </p>
        },
        {
            title: "Investigate two step transaction (Eliminating finalize step)",
            link: "https://github.com/stakervali/grin-wishlist/issues/9",
            description: <p>This is for simplification of user interactions, a related forum discussion can be read <a href="https://forum.grin.mw/t/an-open-discussion-on-non-interactive-transactions/8510">here</a>.</p>
        },
        {
            title: "Late locking",
            link: "https://github.com/stakervali/grin-wishlist/issues/8",
            description: <p>This feature intends to improve transaction process between cold and hot wallets as described <a href='https://github.com/mimblewimble/grin-wallet/issues/541#issuecomment-741712347'>here</a>.</p>

        },
        {
            title: "light node",
            link: "https://github.com/stakervali/grin-wishlist/issues/7",
            description:  <p>Pruning to establish a lighter node as described by <b><i>@phyro</i></b> <a href="https://gist.github.com/phyro/0ad4ccf71e936dd90545648110224e96">here</a> may be possible.</p>
        },
        {
            title: "PIBD - (faster and more robust syncing strategy)",
            link: "https://github.com/stakervali/grin-wishlist/issues/6",
            description: <p>This feature has been actively working on by yeastplume, progress can be followed <a href="https://github.com/mimblewimble/grin/pull/3695">here</a>.</p>

        },
        {
            title: "Binaries for older systems with older GLIBC or make it possible to build the wallet from source on low RAM machine < 300MB",
            link: "https://github.com/stakervali/grin-wishlist/issues/5",
            description: <p></p>
        },
        {
            title: "Testnet exchange/ making it easier for exchange integrations",
            link: "https://github.com/stakervali/grin-wishlist/issues/4",
            description: <p>As a starting point a testnet exchange example has been implemented by <b><i>vegycslol</i></b>. Source code can be examined <a href="https://github.com/pkariz/grin-testnet-exchange">here</a>, and related forum discussion can be found here <a href="https://forum.grin.mw/t/grin-testnet-exchange-example/8570">here</a>.  </p>
        },
        {
            title: "Improve Compatibility with OSX",
            link: "https://github.com/stakervali/grin-wishlist/issues/3",
            description: <p>Some bugs specific to macOS needs to be fixed such as <a href="https://github.com/mimblewimble/grin-wallet/issues/554">1</a>, <a href="https://github.com/mimblewimble/grin-wallet/issues/560">2</a>.</p>
        },
        {
            title: "Atomic Swaps",
            link: "https://github.com/stakervali/grin-wishlist/issues/1",
            description:<p>This project has been started by <b><i>@GeneGerneau</i></b> . Related RFC <a href="https://github.com/mimblewimble/grin-rfcs/pull/83">PR</a> and forum <a href="https://forum.grin.mw/t/request-for-funding-gene-adaptor-signature-atomic-swaps-grn-btc/8632">link.</a></p>
        },
        {
            title: "Multi Sig",
            link: "https://github.com/stakervali/grin-wishlist/issues/2",
            description:<p>A <a href="https://github.com/mimblewimble/grin-rfcs/pull/85">PR</a> for this project has been made.</p>
        },


    ]

    return (
        <div className={"px-6"}>
            <h1 className={"w-full header-1  "}></h1>
            <WishItem wish={wishes[0]}>   </WishItem>
            <WishItem wish={wishes[1]}>    </WishItem>
            <WishItem wish={wishes[2]}>  </WishItem>
            <WishItem wish={wishes[3]}>  </WishItem>
            <WishItem wish={wishes[4]}>  </WishItem>
            <WishItem wish={wishes[5]}>  </WishItem>
            <WishItem wish={wishes[6]}>  </WishItem>
            <WishItem wish={wishes[7]}>  </WishItem>
            <WishItem wish={wishes[8]}>  </WishItem>
            <WishItem wish={wishes[9]}>  </WishItem>
            <WishItem wish={wishes[10]}>  </WishItem>
            <WishItem wish={wishes[11]}>  </WishItem>
            <WishItem wish={wishes[12]}> Atomic swap has been worked by @GeneFerneau   </WishItem>
        </div>
    )
}


