import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./Signedinlinks";
import SignOutLinks from "./Signedoutlinks";
import MobileNav from "./MobileNavbar/MobileNavbar";



const Navbar=()=>{


    return(
        <nav className="bg-gray-800  w-full text-white">
            <div className='flex justify-around items-center py-4 px-1'>
            <div className="md:hidden ml-[-1rem]  relative !z-[80]"><MobileNav/></div>
          <Link to={'/'} className="text-3xl  font-bold max-md:relative max-md:right-5">StarPros</Link>
          <SignInLinks/>
          <SignOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar