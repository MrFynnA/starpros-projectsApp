 import React from 'react'
 import Notifications from './Notifications'
 import ProjectList from '../projects/ProjectList'
 import { useSelector } from 'react-redux'

 
 export default function Dashboard() {
    const projects= useSelector(state=>state.project.projects)

   return (
     <div className='max-md:flex max-md:justify-center  pb-20 relative top-4'>
        <div className='flex max-md:flex-col max-md:w-[90%] gap-10 justify-around max-md:items-center pt-20'>
        <div className='md:w-[50%] max-md:w-full'>
            <ProjectList projects={projects}/>
            </div>
        <div className='md:w-[30%]'>
            <Notifications/>
            
            </div>
        </div>
     </div>
   )
 }
 