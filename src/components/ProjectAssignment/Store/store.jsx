import { create } from "zustand"
import {persist,devtools} from 'zustand/middleware'

const store=(set)=>({
     todos:[
     ],
     addTodo:(todo)=>set(store=>({todos:[{id:todo.id,title:todo.title},...store.todos]}),false,'add Todo'),
     deleteTodo:(Todoid)=>set(store=>({todos:store.todos.filter(items=>items.id!==Todoid)}),false,'delete Todo'),
     updateTodo:(todo)=>set(store=>{
        const currentTodoIndex=store.todos.findIndex(items=>items.id===todo.id)
        const currentTodo=store.todos[currentTodoIndex]

        if(currentTodo){
            const newTodo={
                ...currentTodo,
                title:todo.title
            }
            
            const newTodos=store.todos.map(items=>items.id!==newTodo.id?items:newTodo)
            return {todos:newTodos}
        }
     },false,'update  Todo'),
     clearAll:()=>set(store=>({todos:[]}),false)
})


export const useStore=create(persist(devtools(store),{name:"store"}))