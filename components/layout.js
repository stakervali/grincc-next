import React from 'react';
import Header from "./header";
import Footer from "./footer";

function Layout({children}) {
    return (
        <div className="h-screen  flex flex-col">
            <Header className="flex-grow-0" />
            {/*<Header2 className="" />*/}
            <div className="flex-grow" >
            {children}
            </div>
            <Footer className="flex-grow-0"/>
        </div>
    );
}

export default Layout;