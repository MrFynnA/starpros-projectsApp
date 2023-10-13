import React from 'react'
import ProjectSummary from './ProjectSummary'
import PlusIcon from '../IconUis/plusIcon'
import {Link} from 'react-router-dom'

export default function ProjectList(props) {
    const {projects}=props
  return (
    <>
        <Link to='/create'><div className='flex justify-end relative bottom-4 right-1'><PlusIcon className='w-[30px] cursor-pointer'/></div></Link>
    <div className='flex flex-col items-start gap-5'>
       {projects && projects.map(items=><ProjectSummary
       key={items.id}
       title={items.title}
       content={items.content}
       />) }
        {/* <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/> */}
    

    </div>
    </>
  )
}


