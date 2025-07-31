import React  from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

//When we use Outlet, it will keep layout as base and do no changes in Header and footer, just change the content inside Outlet


function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;