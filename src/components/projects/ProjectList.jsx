import React from 'react'
import ProjectSummary from './ProjectSummary'

export default function ProjectList(props) {
    const {projects}=props
  return (
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
  )
}


