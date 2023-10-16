import React from 'react'
import TodoItem from './todoItem'
import Button from './Button'
import {useForm} from 'react-hook-form'
import { useStore } from './Store/store'


export default function Todo() {
    const {register,handleSubmit,formState:{errors},reset}=useForm()
const todos=useStore(store=>store.todos)
const addItem=useStore(store=>store.addTodo)
const clearAllItems=useStore(store=>store.clearAll)

let list=todos.map(items=><ol key={items.id}><TodoItem  
  id={items.id}
  title={items.title}
  /></ol>)

  if(todos.length===0){
    list=<div className='w-[30rem] max-md:w-[20rem] mt-10'>
      <div className='text-lg font-bold italic animate-bounce'>You currently have No Todos....</div>
      </div>
  }
  const noTodos=todos.length===0


  return (
    <>
    <header className='relative w-full top-0 h-20 z-50 bg-gray-700 text-white flex justify-start px-4 items-center'>
       <div>
        <div className='text-2xl font-bold italic'>MY TODOS</div>
       </div>
    </header>
    <div className='mt-20 pb-20 flex items-start max-lg:flex-col max-lg:items-center justify-center max-lg:gap-20 gap-40'>
      <div className='flex items-center flex-col gap-5'>
        <div className='text-lg font-mono'>Add New Todo</div>
        <div>
            <form onSubmit={handleSubmit((data)=>{
                      const todo={
                    id:Math.random(),
                    title:data.todoTitle
                  }
                  addItem(todo)
                
                  reset()
            })}>
      <input type='text' {...register('todoTitle',{required:true,minLength:{
        value:4,
        message:"Title should be 4 characters and above"
      }})} placeholder='enter title' className='inputStyle focus:border-gray-800'></input>
      <Button type='submit' className='h-11' textclassName='text-[1rem]'>ADD</Button>
            </form>
        </div>
      <p className='text-sm text-red-600'>{errors.todoTitle?.message}</p>
     </div>
    <ul className='flex flex-col gap-4'>
      <div className='flex items-end justify-between'>
    <div className='font-sans font-bold text-3xl underline'>Todos</div>
    {!noTodos && <div className='cursor-pointer italic font-[600] hover:underline' onClick={()=>clearAllItems()}>clear all</div>}
      </div>
    {list}
    </ul>
    </div>
    </>
  )
}
