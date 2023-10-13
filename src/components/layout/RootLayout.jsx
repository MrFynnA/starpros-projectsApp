import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidemenu from "./MobileNavbar/Sidemenu";
export default function RootLayout
() {
  return (
    <>
       <header>
        <Sidemenu/>
        <Navbar/>
    </header>
    <main>
           <Outlet/>  
    </main>
    </>
 
  )
}
