
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import RootLayout from './components/layout/RootLayout';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import Signup from './components/auth/Signup';
import { useState } from 'react';
import Todo from './components/ProjectAssignment/todo';
// import { action as signAction } from './components/auth/SignIn';
// import { action as signUpAction } from './components/auth/Signup';
// import { action as creatAction } from './components/projects/CreateProject';
import CreateProject from './components/projects/CreateProject';
const router =createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Dashboard/>
      
      },
      {
        path:'project/:project_id',
        element:<ProjectDetails/>
      
      },
      {
        path:'/signin',
        element:<SignIn/>,
        // action:signAction
      
      },
      {
        path:'/signup',
        element:<Signup/>,
        // action:signUpAction
      
      },
      {
        path:'/create',
        element:<CreateProject/>,
        // action:creatAction
      
      }

    ]
    

}
])



function App() {
  const[newTitle,setNewTitle]=useState('')
  const [todos,setTodos]=useState([
    {
      id:Math.random(),
      title:'james fynn'
    
    },
    {
      id:Math.random(),
      title:'rase fank fynn'
    },
    { id:Math.random(),
      title:'Betty Arthur'

    }
])
console.log(todos)
const submitData=(event)=>{
      event.preventDefault()
} 

const getUpdateTitle=(event)=>{
  setNewTitle(event.target.value)
}
const update=(id)=>{
 
    const existingTodoIndex=todos.findIndex(items=>items.id===id)
    const currentTodo= todos[existingTodoIndex]
    if(currentTodo){
      const newTodo={
        ...currentTodo,
        title:newTitle
      }
    
 
      const updatedTodos=[...todos]
       updatedTodos[existingTodoIndex]=newTodo
       setTodos(updatedTodos)
    }
 
}

  return (
    <>
    {/* <RouterProvider router={router}/> */}
    {/* <form onSubmit={submitData}>
           <ul>
     {todos?.map(items=><li key={items.id}>
              <div>{items.title}</div>
              <input type='text' onChange={getUpdateTitle}></input>
              <button onClick={update.bind(null,items.id)}>update</button>
            </li>)}
           </ul>
    </form> */}
<Todo/>
    </>
  );
}

export default App;
