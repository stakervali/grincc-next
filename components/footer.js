import React from 'react';
import Image from 'next/image'
import DiscordIcon from "./icons/discordIcon";
import GithubIcon from "./icons/githubIcon";
import KeybaseIcon from "./icons/keybaseIcon";

function Footer(props) {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"*/}
                    {/*     stroke-linejoin="round" stroke-width="2"*/}
                    {/*     className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">*/}
                    {/*    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>*/}
                    {/*</svg>*/}
                    <Image src="/logos/grincc_logo3.png" width={48} height={48} />
                    <Image src="/logos/Grin-Community-Logo_edit_G.png" width={48} height={48} />

                    <span className="ml-3 text-xl">Grin CC</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                    2021 Grin Community
                    {/*—*/}
                    {/*<a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer"*/}
                    {/*   target="_blank">@knyttneve</a>*/}
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <a className="ml-3 text-gray-500">
        <Image src="/logos/DiscordLogo.png"  width={32} height={32}  />
       </a>
      <a className="ml-3 text-gray-500">
        <Image src="/logos/github.png"  width={32} height={32}  />

      </a>
      <a className="ml-3 text-gray-500">
        <Image src="/logos/keybase.png"  width={25} height={28}  />

      </a>
    </span>
            </div>
        </footer>
    );
}

export default Footer;