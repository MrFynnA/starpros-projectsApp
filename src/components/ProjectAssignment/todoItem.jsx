import React,{useState} from 'react'
import Button from './Button'
import Edit from './edit'
export default function TodoItem(props) {
    const[displayForm,setDisplayUpdateForm]=useState(false)
    const{title}=props
  return (
    <>
    <div className='flex flex-col  gap-2 w-[30rem]'>
        <div className='flex items-center justify-between bg-white h-20 px-4 rounded-lg'>
     <div className='text-lg font-bold uppercase font-mono'>{title ?title:"mr fynn"}</div>
     <Edit onClick={()=>setDisplayUpdateForm(prev=>!prev)}/>
        </div>
    {displayForm && <div className='flex items-center gap-5'>
        <div className='text-lg font-mono'>Change todo title</div>
        <div>
      <input type='text' className='p-2 rounded-md outline-none border-2 border-gray-400 focus:border-gray-800'></input>
      <Button className='h-11' textclassName='text-[1rem]'>save</Button>
        </div>
     </div>}
    </div>
    </>
  )
}
