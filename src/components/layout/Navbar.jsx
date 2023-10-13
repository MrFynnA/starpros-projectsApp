import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./Signedinlinks";
import SignOutLinks from "./Signedoutlinks";
import MobileNav from "./MobileNavbar/MobileNavbar";
import { useSelector } from "react-redux";




const Navbar=()=>{
    const mobileMenuActive= useSelector(state=>state.visibility.mobileMenu)


    return(
        <nav className="bg-gray-800  w-full text-white">
            <div className='flex justify-around items-center py-4 px-1'>
            <div className={`${mobileMenuActive && '!fixed !left-4 p-1'} md:hidden ml-[-1rem]  relative left-1 !z-[80]`}><MobileNav/></div>
          <Link to={'/'} className="text-3xl  font-bold max-md:relative max-md:right-2">StarPros</Link>
          <SignInLinks/>
          <SignOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar