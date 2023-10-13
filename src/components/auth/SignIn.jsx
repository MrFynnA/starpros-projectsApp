import React,{useState} from 'react'
import { Form } from 'react-router-dom'

export default function SignIn() {

    const[ini,setIni]=useState()
    const[loginDetails,setLoginDetails]=useState({
        email:'',
        password:''
    })


    const emailHandler=(event)=>{
        // setLoginDetails(prev=>{
        //     return {
        //         ...prev,
        //         email:event.target.value

        //     }
        // }) 
    }


    const passwordHandler=(event)=>{
        // setLoginDetails(prev=>{
        //     return {
        //         ...prev,
        //         password:event.target.value

        //     }
        // }) 
    }
 function submit(event){
    // event.preventDefault()
    // console.log(loginDetails)
 }
  return (
    <div className='md:flex md:justify-center'>
       <div className='mt-28 bg-white p-4 px-10 max-md:px-0 py-10 lg:w-[50%] rounded-md'>
    <Form onSubmit={submit} action='/signin' method='Post'>
        <div className='flex flex-col gap-4 items-center px-40'>
        <div className='flex flex-col items-start gap-12'>
        <div className='text-4xl text-gray-500 font-[600]'>Sign In</div>
        <div>
             <label htmlFor='Email' className='block text-[1.5rem] mb-4'>Email</label>
             <input placeholder='Email' className='border-b-2 border-gray-500 outline-none max-md:w-64 w-[25rem] bg-inherit' type="email" id='email' name='email' onChange={emailHandler}/>
        </div>
        <div>
             <label htmlFor='Password' className='block text-[1.5rem]  mb-4'>Password</label>
             <input placeholder='Password' className='border-b-2 border-gray-500 outline-none max-md:w-64 w-[25rem] bg-inherit' type="password" id='password' name='password' onChange={passwordHandler} />
        </div>
        <div>
            <button className='bg-pink-400 shadow-md px-4 py-2 text-md text-[1.2rem] rounded-md text-lg hover:bg-pink-500 border-1 text-white'>Login</button>
        </div>
        </div>
        </div>
    </Form>
       </div>
    </div>
  )
}

export const action=async({request,params})=>{
    const requestData= await request.formData()

    console.log(requestData.get('email'), requestData.get('password'))

    return null

}


