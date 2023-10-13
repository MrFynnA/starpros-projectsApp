import React, { useEffect, useState } from 'react'
import classes from './MobileNav.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { visibilityAction } from '../../Store/slices/visibilitySlice'

export default function MobileNav() {
const mobileMenuActive= useSelector(state=>state.visibility.mobileMenu)
const[overflow,setOverFlow]=useState()
//to change the overflow
document.body.style.overflowY=overflow
const dispatch=useDispatch()

useEffect(()=>{
  if(mobileMenuActive){
    setOverFlow('hidden')
  }else{
    setOverFlow('auto')
  }
},[mobileMenuActive])

  return (
    <div className='flex !select-none'>
          <div onClick={()=>{
            dispatch(visibilityAction.onShowMobileMenu())


            }} className={`${classes.mainNavBar} flex justify-between cursor-pointer items-center h-2 px-2`}>
    <div className='flex flex-col justify-center items-center gap-1 rounded-md'>
    <div className={`${mobileMenuActive && `${classes.firstBar}`} ${classes.moveFirstBar} w-6 h-[4px] bg-white  rounded-md`}></div>
    <div className={`${mobileMenuActive && `${classes.middleBar}`} ${classes.moveMiddleBar} w-6 relative h-[4px]  bg-white rounded-md`}></div>
    <div className={`${mobileMenuActive && `${classes.lastBar}`} ${classes.moveLastBar} w-6 h-[4px] bg-white  rounded-md`}></div>
    
    </div>
  </div>
    </div>

   
  )
}
