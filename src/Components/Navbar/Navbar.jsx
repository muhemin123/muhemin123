import React from 'react';
import NavbarStyle from "./Navbar.module.css";
import logo from "./image/swiftmd logo-01.png";
import Layout from '../Layout/Layout';
import MainLayout from "../Layout/MainLayout";

const Navbar = () => {
    return (
        <>
            <nav className={NavbarStyle.container}>
                <img src={logo} alt="logo" />
            </nav>
            {/* layout */}
            <div className={NavbarStyle.mainStyleContainer}>
                <div>
                    <Layout />
                </div>
                {/* main layout here */}
                <div style={{width:'100%'}}>
                    <MainLayout />
                </div>
            </div>

        </>
    )
}

export default Navbar
