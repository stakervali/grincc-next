import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Menu, Transition} from "@headlessui/react";
import ThemeButton from "./themeButton";
import GrinPostLogo from '../assets/icons/GrinNewsLetterLogo.jpg'

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

    const GrinPostIcon = (props)=>{
        return (<Image
                src={GrinPostLogo}
                alt={'GrinPost Logo'}
                width={'24px'}
                height={'24px'}
        />)
    }

    return (
        <>
            <nav className="bg-yellow  dark:bg-black flex flex-wrap  ">

                <div
                    className="container flex  lg:justify-between justify-start  flex-wrap  px-4 py-4 mx-auto lg-space-x-4  ">

                    {/*LOGO*/}
                    <div
                        className="flex flex-wrap self-start items-center w-auto flex-grow-0 h-14   bg-black rounded-lg  p-1">
                        <div className="flex-grow-0 ">
                            <img src="/logos/Grin-Community-Logo_edit_G_transparent.png" width={48} height={48}/>
                        </div>
                        <Link href="/">
                            <a href="#" className="inline-flex
                      p-2 dark:text-yellow
                     text text-xl
                     font-bold text-yellow
                      tracking-wider ">Grin CC</a>
                        </Link>
                    </div>

                    {/*LINKS*/}
                    <div className={"hidden lg:block  lg:w-auto mt-2  w-full  lg:my-auto "}>
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
                                        className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                        Meeting Notes
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                        Projects
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/hub">
                                    <a className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                        Hub
                                    </a>
                                </Link>
                            </li>

                            <li className="relative ">
                                <Menu>
                                    <Menu.Button
                                        className="flex  w-full lg:w-auto  px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">

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

                                        <Menu.Items
                                            className="lg:absolute bg-purple dark:bg-gray-600 right-0 rounded-md p-2   ">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <MyLink href="/docs/approval-scheme">
                                                        <a className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light dark:text-gray-200 rounded-md hover:bg-yellow-light hover:text-black dark:hover:text-black"}>
                                                            Approval Scheme
                                                        </a>
                                                    </MyLink>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <MyLink href="/docs/funding-requests">
                                                        <a
                                                            className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light dark:text-gray-200 rounded-md hover:bg-yellow-light hover:text-black dark:hover:text-black"}
                                                            href="/account-settings"
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
                                                            className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light dark:text-gray-200 rounded-md hover:bg-yellow-light hover:text-black dark:hover:text-black"}
                                                            href="/account-settings"
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
                                <a className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                    Finance
                                </a>
                            </Link>

                            <li>
                            <a href={'https://grinpost.substack.com/'} target='_blank'
                                className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                <GrinPostIcon />
                            </a>

                            </li>


                        </ul>
                    </div>

                    <div className="flex flex-grow flex-end    ">

                        {/*THEME BUTTON*/}
                        <div className={"flex-grow flex justify-end  mr-8 "}>
                            <div className="my-auto  ">
                                <ThemeButton/>
                            </div>

                        </div>

                        {/*MENU BUTTON*/}
                        <button
                            className="lg:hidden inline-flex items-center justify-center mt-2  text-dark-gray border border-gray-600 w-10 h-10 ml-auto rounded-md outline-none focus:outline-none "
                            onClick={onShowMenuClickHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>

                    </div>


                </div>
                <div className="  w-full  ">
                    <div
                        className={"lg:hidden mt-2 pb-4 lg:pb-0  w-full   lg:my-auto " + (navbarOpen ? 'show flex' : 'hidden')}>
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
                                        className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                        Meeting Notes
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                        Projects
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/hub">
                                    <a className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                        Hub
                                    </a>
                                </Link>
                            </li>

                            <li className="relative ">
                                <Menu>
                                    <Menu.Button
                                        className="flex  w-full lg:w-auto  px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">

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

                                        <Menu.Items
                                            className="lg:absolute bg-purple dark:bg-gray-600 right-0 rounded-md p-2 ">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <MyLink href="/docs/approval-scheme">
                                                        <a className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light dark:text-gray-200 rounded-md hover:bg-yellow-light hover:text-black dark:hover:text-black"}>
                                                            Approval Scheme
                                                        </a>
                                                    </MyLink>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <MyLink href="/docs/funding-requests">
                                                        <a
                                                            className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light dark:text-gray-200 rounded-md hover:bg-yellow-light hover:text-black dark:hover:text-black"}
                                                            href="/account-settings"
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
                                                            className={`${active && 'bg-yellow'}` + " flex p-2 font-medium text-white-light dark:text-gray-200 rounded-md hover:bg-yellow-light hover:text-black dark:hover:text-black"}
                                                            href="/account-settings"
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
                            <li>
                                <Link href="/finance">
                                    <a className="flex px-4 py-2 rounded-md font-medium text-gray-700 dark:text-white bg-yellow dark:bg-black  hover:bg-yellow-dark dark:hover:bg-gray-700">
                                        Finance
                                    </a>
                                </Link>
                            </li>



                        </ul>
                    </div>

                </div>

            </nav>

        </>
    );
}

export default Header;