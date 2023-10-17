import React from 'react'
import ProjectSummary from './ProjectSummary'
import classes from './ProjectSummary.module.css'
import PlusIcon from '../IconUis/plusIcon'
import {Link} from 'react-router-dom'

export default function ProjectList(props) {
    const {projects}=props
  return (
    <>
        <Link to='/create'  className='flex justify-end relative bottom-4 right-1'><div project='new project' className={`${classes.projectlist}  after:absolute max-lg:after:!hidden after:w-[6rem] after:bg-black after:text-center after:py-[0.15rem] after:text-sm after:rounded-lg after:bottom-10 after:hidden hover:after:block after:text-white after:content-[attr(project)]`}><PlusIcon className='w-[30px] cursor-pointer' pathclassName='hover:fill-slate-200'/></div></Link>
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


