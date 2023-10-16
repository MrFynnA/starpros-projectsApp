import React,{useState} from 'react'
import Button from './Button'
import Edit from './edit'
import Trash from './trash'
import { useStore } from './Store/store'
import {useForm} from 'react-hook-form'
export default function TodoItem(props) {
  const{id,title}=props
    const[displayForm,setDisplayUpdateForm]=useState(false)
    const[deleteForm,setDeleteForm]=useState()
    const addItem=useStore(store=>store.addTodo)
    const deleteItem=useStore(store=>store.deleteTodo)
    const updateItem=useStore(store=>store.updateTodo)
    const{register,handleSubmit,reset} =useForm({
        defaultValues:{
            todoTitle:title
        }
    })


   
  return (
    <>
    <div className="relative w-full">
     {deleteForm && <div className='absolute flex justify-center h-full w-full text-white backdrop-brightness-[.2] z-10 rounded-lg animate-pulse-once'>
        <div className='flex justify-center flex-col items-center gap-2'>
        <div className='font-bold font-mono'>Do you want to delete this Todo? </div>
        <div className='flex gap-2'>
        <Button textclassName='text-[0.8rem]' className='bg-orange-500 hover:bg-orange-600' onClick={()=>deleteItem(id)}>yes</Button>
        <Button onClick={()=>setDeleteForm(false)} textclassName='text-[0.8rem]' className='bg-orange-500 hover:bg-orange-600'>cancel</Button>
        </div>
        </div>
        </div>}
    <div className='flex flex-col w-full shadow-md rounded-lg bg-slate-400'>
        <header className='bg-gray-700 text-white px-2 py-1 rounded-t-lg'>Planned</header>
        <div className='flex items-center justify-between bg-white h-20 px-4 rounded-b-lg'>
     <div className='text-lg font-bold uppercase font-mono'>{title}</div>
     <div className='flex items-center gap-1'>
     <Trash onClick={()=>setDeleteForm(true)}/>
     <Edit onClick={()=>setDisplayUpdateForm(prev=>!prev)}/>
     </div>
        </div>
    {displayForm && <div className='flex items-center max-md:flex-col max-md:gap-3 gap-10 justify-center pb-4 mt-4'>
        <div className='text-lg font-mono font-bold italic'>Change Title</div>
        <form onSubmit={handleSubmit((data)=>{
                  const todo={
                    id:id,
                    title:data.todoTitle
                  }
                  updateItem(todo)
                  setDisplayUpdateForm(false)
                  // reset()
      })}>
      <input placeholder='change Title' {...register('todoTitle',{required:true,minLength:{
        value:4,
        message:"Title should be 4 characters and above"
      }})} type='text'  className='inputStyle focus:border-gray-800'></input>
      <Button className='h-11' textclassName='text-[1rem]' type='submit'>save</Button>
        </form>
     </div>}
    </div>
    </div>
    </>
  )
}
