import React from 'react'
import { useParams } from 'react-router-dom'



export default function ProjectDetails() {

const params=useParams()
const id =params.project_id



  return (
    <div className='flex justify-center p-6'>
        <div className='w-[60%] flex flex-col gap-5'>
        <div className='flex flex-col gap-4 items-start border-b-2 border-gray-300 pb-4'>
            <span className='text-3xl'>Project Title</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea tempore minima ducimus praesentium, saepe molestias reiciendis maxime impedit eveniet quis ipsum possimus quod iste dolores cupiditate eligendi eos laborum?</p>
        </div>
        <div className='flex flex-col'>
            <div>Posted by Fynn Arhur</div>
            <div className='text-gray-400'>2nd october, 4pm</div>
        </div>
        </div>

    </div>
  )
}
