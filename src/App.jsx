
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import RootLayout from './components/layout/RootLayout';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import Signup from './components/auth/Signup';
import { useState } from 'react';
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

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
