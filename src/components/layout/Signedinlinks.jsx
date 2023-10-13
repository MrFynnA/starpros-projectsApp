import React from "react";
import { NavLink } from "react-router-dom";



const SignInLinks=()=>{


    return(
        <ul className="flex gap-5 text-white">
        <li className="max-md:hidden"><NavLink className={({isActive})=>isActive?'!text-blue-400 font-bold':'font-bold'} to={'/create'}>New Project</NavLink></li>
        <li><NavLink className={'font-bold'}>Log out</NavLink></li>
        <li><NavLink className={'h-5 w-5 rounded-full shadow-md border-2 bg-pink-400 p-3 font-bold'}>NF</NavLink></li>
        </ul>
    )
}

export default SignInLinks