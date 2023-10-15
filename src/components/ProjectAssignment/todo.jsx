import React from 'react'
import TodoItem from './todoItem'
import Button from './Button'
import {useForm} from 'react-hook-form'

export default function Todo() {
    const {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <div className='mt-20 flex items-start justify-center gap-40'>
      <div className='flex items-center flex-col gap-5'>
        <div className='text-lg font-mono'>Add New Todo</div>
        <div>
            <form onSubmit={handleSubmit((data)=>{
                console.log(data)
            })}>
      <input type='text' {...register('todoTitle',{required:true,minLength:{
        value:4,
        message:"Title should be 4 characters and above"
      }})} placeholder='enter title' className='p-2 rounded-md outline-none border-2 border-gray-400 focus:border-gray-800'></input>
      <Button type='submit' className='h-11' textclassName='text-[1rem]'>ADD</Button>
            </form>
        </div>
      <p>{errors.todoTitle?.message}</p>
     </div>
    <ul className='flex flex-col gap-4'>
    <div className='font-sans font-bold text-3xl underline'>Todos</div>
        <ol><TodoItem/></ol>
        <ol><TodoItem/></ol>
        <ol><TodoItem/></ol>
        <ol><TodoItem/></ol>
        <ol><TodoItem/></ol>
        <ol><TodoItem/></ol>
    </ul>
    </div>
  )
}
