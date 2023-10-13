import React,{useState} from 'react'
import { Form } from 'react-router-dom'

export default function Signup() {

    const[ini,setIni]=useState()

    const emailHandler=()=>{
        
    }
    const passHandler=()=>{
    }
    const firstnHandler=()=>{
        
    }
    const lastnHandler=()=>{

    }
  return (
    <>
    <div className=' bg-white p-4 px-10 max-md:px-0 py-16'>
       <div>
    <Form action='/signup' method='Post'>
        <div className='flex flex-col gap-4 items-center px-40 '>
        <div className='flex flex-col items-start gap-12'>
        <div className='text-4xl text-gray-500 font-[600]'>Sign Up</div>
        <div className='flex items-center max-md:flex-col gap-10'>
        <div className='flex flex-col gap-8'>
        <div>
             <label htmlFor='Email' className='block text-[1.3rem] mb-4'>Email</label>
             <input placeholder='Email' className='border-b-2 bg-inherit border-gray-500 outline-none max-md:w-64 w-[25rem]' type="email" id='email' name='email' onChange={emailHandler}/>
        </div>
        <div>
             <label htmlFor='Password' className='block text-[1.3rem]  mb-4'>Password</label>
             <input placeholder='Password' className='border-b-2 bg-inherit border-gray-500 outline-none max-md:w-64 w-[25rem]' type="password" id='Password' name='password' onChange={passHandler} />
        </div>
        </div>
       <div className='flex flex-col gap-8'>
        <div>
             <label htmlFor='firstname' className='block text-[1.3rem] mb-4'>Firstname</label>
             <input placeholder='Firstname' className='border-b-2 bg-inherit border-gray-500 outline-none max-md:w-64 w-[25rem]' type="text" id='firstname' name='firstname' onChange={firstnHandler}/>
        </div>
        <div>
             <label htmlFor='lastname' className='block text-[1.3rem] mb-4'>Lastname</label>
             <input placeholder='Lastname' className='border-b-2 bg-inherit border-gray-500 outline-none max-md:w-64 w-[25rem]' type="text" id='lastname' name='lastname' onChange={lastnHandler}/>
        </div>
       </div>
        </div>
        <div>
            <button className='bg-pink-400 shadow-md px-4 py-2 text-md text-[1.2rem] rounded-md text-lg hover:bg-pink-500 border-1 text-white'>SignUp</button>
        </div>
        </div>
        </div>
    </Form>
       </div>
    </div>
    </>
  )


}
export const action=async({request,params})=>{
    const requestData= await request.formData()

    console.log(requestData.get('email'), requestData.get('password'))

    return null

}


