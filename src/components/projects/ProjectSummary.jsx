

import React from 'react'
import classes from './ProjectSummary.module.css'

export default function ProjectSummary(props) {
    const{title,content}=props
    
  return (

        <div className={`${classes.content} cursor-pointer bg-white p-4 rounded-lg w-full break-words`}>
            <div></div>
            <div className={`${classes.contentTitle} text-2xl uppercase  transition`}>{title}</div>
            <p className='text-md'>{content}</p>
            <p className='text-gray-400'>3rd, september, 2am</p>
        </div>

  )
}
