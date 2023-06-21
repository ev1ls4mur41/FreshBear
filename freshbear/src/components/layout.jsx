import React, {useState} from "react";
import { Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '954px',
        height: '437px',
        right: 'auto',
        bottom: 'auto',
        marginRight: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '18px',

    },
};


function Layout() {

    return (
        <div>
            <Header />
            <main className="container">
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;