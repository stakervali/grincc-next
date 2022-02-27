import WishItem from "./WishItem";


export default function Wishlist({props}) {

    const wishes = [
        {
            title: "Formal prover / integrity checker",
            link: "https://github.com/stakervali/grin-wishlist/issues/13"

        },
        {
            title: "Display slatepacks as QR codes in CLI",
            link: "https://github.com/stakervali/grin-wishlist/issues/12"
        },
        {
            title: "One-time use slatepack addresses for wallet",
            link: "https://github.com/stakervali/grin-wishlist/issues/11"
        },
        {
            title: "Invoice payment proofs",
            link: "https://github.com/stakervali/grin-wishlist/issues/10"
        },
        {
            title: "Investigate two step transaction (Eliminating finalize step)",
            link: "https://github.com/stakervali/grin-wishlist/issues/9"
        },
        {
            title: "Late locking",
            link: "https://github.com/stakervali/grin-wishlist/issues/8"
        },
        {
            title: "light node",
            link: "https://github.com/stakervali/grin-wishlist/issues/7"
        },
        {
            title: "PIBD - (faster and more robust syncing strategy)",
            link: "https://github.com/stakervali/grin-wishlist/issues/6"
        },
        {
            title: "Binaries for older systems with older GLIBC or make it possible to build the wallet from source on low RAM machine < 300MB",
            link: "https://github.com/stakervali/grin-wishlist/issues/5"
        },
        {
            title: "Testnet exchange/ making it easier for exchange integrations",
            link: "https://github.com/stakervali/grin-wishlist/issues/4"
        },
        {
            title: "Improve Compatibility with OSX",
            link: "https://github.com/stakervali/grin-wishlist/issues/3"
        },
        {
            title: "Multi Sig",
            link: "https://github.com/stakervali/grin-wishlist/issues/2"
        },
        {
            title: "Atomic Swaps",
            link: "https://github.com/stakervali/grin-wishlist/issues/1"
        }

    ]

    return (
        <div className={"px-6"}>
            <h1 className={"w-full header-1  "}></h1>
            <WishItem wish={wishes[0]}> </WishItem>
            <WishItem wish={wishes[1]}>  </WishItem>
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


