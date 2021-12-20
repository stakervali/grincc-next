import React, {useState} from 'react';
import Link from 'next/link';
import {Menu, Transition} from "@headlessui/react";

function Header(props) {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const onShowMenuClickHandler = (e) => {
        console.log("onShowMenuClicked");
        setNavbarOpen(!navbarOpen);
    }

    // tailwind headless doc https://headlessui.dev/react/menu
    function MyLink(props) {
        let {href, children, ...rest} = props
        return (
            <Link href={href}>
                <a {...rest}>{children}</a>
            </Link>
        )
    }

    return (

        <>
            <nav className="bg-yellow">

                <div className="container flex flex-wrap px-4 py-2 mx-auto lg-space-x-4">

                    <img src="/logos/Grin-Community-Logo_edit_G.png" width={48} height={48}/>
                    <Link href="/">
                        <a href="#" className="inline-flex
                      p-2
                     text text-xl
                     font-bold
                      tracking-wider ">Grin CC</a>
                    </Link>

                    <button className="lg:hidden inline-flex items-center justify-center  text-dark-gray border border-gray-600 w-10 h-10 ml-auto rounded-md outline-none focus:outline-none "

                            onClick={onShowMenuClickHandler}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>


                    <div className={"w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0 " + (navbarOpen ? 'show flex' : 'hidden')}>
                        <ul className="w-full
                                       lg:w-auto
                                       flex flex-col
                                        lg:flex-row
                                        pl-16
                                        w-full space-y-2
                                       lg:space-x-2 lg:space-y-0">
                            <li>
                                <Link href="/meetings">
                                    <a
                                        className="flex px-4 py-2 rounded-md font-medium text-dark-gray bg-yellow hover:bg-yellow-dark">
                                        Meeting Notes
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/hub">
                                    <a className="flex px-4 py-2 rounded-md font-medium text-dark-gray bg-yellow hover:bg-yellow-dark">
                                        Hub
                                    </a>
                                </Link>
                            </li>

                            <li className="relative ">
                                <Menu>
                                    <Menu.Button className="flex  w-full lg:w-auto  px-4 py-2 rounded-md font-medium text-dark-gray bg-yellow hover:bg-yellow-dark">

                                        Documents


                                    </Menu.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >

                                        <Menu.Items className="lg:absolute bg-purple right-0 rounded-md p-2 ">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <MyLink href="/docs/approval-scheme">
                                                        <a className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light rounded-md hover:bg-yellow-light hover:text-black"}>
                                                            Approval Scheme
                                                        </a>
                                                    </MyLink>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <MyLink href="/docs/funding-requests">
                                                    <a
                                                        className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light rounded-md hover:bg-yellow-light hover:text-black"} href="/account-settings"
                                                    >
                                                        Funding Requests
                                                    </a>
                                                    </MyLink>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <MyLink href="/docs/spending-guidelines">
                                                        <a
                                                            className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light rounded-md hover:bg-yellow-light hover:text-black"} href="/account-settings"
                                                        >
                                                            Spending Guidelines
                                                        </a>
                                                    </MyLink>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                            <Link href="/finance">
                            <a  className="flex px-4 py-2 rounded-md font-medium text-dark-gray bg-yellow hover:bg-yellow-dark">
                                Finance
                            </a>
                            </Link>
                        </ul>
                    </div>


                </div>

            </nav>

        </>
    );
}

export default Header;