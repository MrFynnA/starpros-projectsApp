import Reactdom from 'react-dom'
import { useSelector } from 'react-redux'
import classes from './MobileNav.module.css'
import { useEffect, useState } from 'react'

let refresh=true

const Sidemenu=()=>{
    const mobileMenuActive= useSelector(state=>state.visibility.mobileMenu)
    const[animate,setAnimate]=useState(false)

     useEffect(()=>{
        if(mobileMenuActive){
            if(refresh){
                setAnimate(true)
                setTimeout(()=>{
                    setAnimate(false)
                 },1000)
                refresh=false
            }
        }

     },[mobileMenuActive])
    const Menu=()=>{
        return(
            <>
                 <header className='bg-gray-800 fixed z-[70] w-full h-28'>
                    <div className='flex flex-col gap-2 items-center justify-center relative top-9'>
                    <div className={`text-4xl font-bold text-white ${animate && 'animate-ping-once'}`}>StarPros</div>
                    <div className='text-white italic text-sm'>share your projects with everyone!</div>
                 </div></header>
            <div className="fixed w-[75%] !min-h-[100vh] bg-blue-100 z-40">
            </div>
            </>
        )
    }


    return(
        <>
       {mobileMenuActive && <div className='md:hidden'>
       {Reactdom.createPortal(<div className='fixed top-0 right-0 left-0 w-full h-full z-30 backdrop-brightness-75'/>,document.getElementById('backdrop'))}
       {Reactdom.createPortal(<div className={classes.menufade}><Menu/></div>,document.getElementById('mobilemenu'))}
        </div>}
        </>
    )
}

export default Sidemenu