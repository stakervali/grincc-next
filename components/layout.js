import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Head from 'next/head'

function Layout({children}) {
    return (
        <div className="h-screen flex flex-col  ">
            <Head>
                <title>Grin CC</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <Header className="flex-grow-0" />
            {/*<Header2 className="" />*/}
            <div className="flex-grow dark:bg-black " >
            {children}
            </div>
            <Footer className="flex-grow-0"/>
        </div>
    );
}

export default Layout;