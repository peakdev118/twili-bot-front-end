import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

import './style/main-layout.css';

function MainLayout(props) {
    return (
        <>
            <Header></Header>
            <div className="main-container">
                <Outlet/>
                <Footer></Footer>
            </div>
        </>
    )
}

export default MainLayout;