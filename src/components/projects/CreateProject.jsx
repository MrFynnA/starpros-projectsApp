import React,{useState} from 'react'
import { Form ,useNavigate} from 'react-router-dom'
import { addProjectionAction } from '../Store/actions/projectActions'
import { useDispatch } from 'react-redux'

export default function CreateProject() {
const dispatch=useDispatch()
const navigate=useNavigate()
const [newProject,setNewProject]=useState({
    title:'',
    content:''
})

const titleHandler=(event)=>{
          setNewProject(prev=>{
              return {
                ...prev,
                title:event.target.value
              }
          })
}

const contentHandler=(event)=>{
    setNewProject(prev=>{
        return {
          ...prev,
          content:event.target.value
        }
    })
}

const submitData=(event)=>{
       event.preventDefault()
         const newProjects={
            id:Math.random(),
            title:newProject.title,
            content:newProject.content
         }
       dispatch(addProjectionAction(newProjects))
       navigate('/')
}

  return (
    <div className=' bg-white p-4 max-md:px-0 px-10 py-16 h-[100vh]'>
       <div>
    <Form onSubmit={submitData}>
        <div className='flex flex-col gap-4 items-center px-40'>
        <div className='flex flex-col items-start gap-12'>
        <div className='text-4xl max-md:text-2xl text-gray-500 font-[700]'>Create A New Project</div>
        <div>
             <label htmlFor='title' className='block text-[1.3rem] mb-4'>Title</label>
             <input placeholder='Title' className='border-b-2 bg-inherit border-gray-500 outline-none max-md:w-60 w-[25rem]' type="text" id='title' name='title' onChange={titleHandler}/>
        </div>
        <div>
             <label htmlFor='content' className='block text-[1.3rem] mb-4'>Content</label>
            <textarea name="content" id="content" className='resize-none outline-none border-b-2 bg-inherit border-gray-500 max-md:w-60' cols="60" onChange={contentHandler} ></textarea>
        </div>
        <div>
            <button className='bg-pink-400 shadow-md px-4 py-2 text-md text-[1.2rem] rounded-md text-lg hover:bg-pink-500 border-1 text-white'>Create</button>
        </div>
        </div>
        </div>
    </Form>
       </div>
    </div>
  )
}

// export const action=async({request,params})=>{
//     const requestData= await request.formData()

//     console.log(requestData.get('title'), requestData.get('content'))

//     return null

// }
