import { createSlice } from "@reduxjs/toolkit";


const initialState={
   projects:[
    {id:'1',title:"the tool tip",content:'tool tips are used to show users the function of some tools on a platform'},
    { id:'2',title:"the homecoming",content:'a platform to determine which old students will be coming for events in school'},
    { id:'3',title:"the christ lodge",content:'A project built to teach and show people where to go to seek counselling according to the word of God'},
    { id:'4',title:"the food guide",content:'A platform to guid individuals on their eating habbits and what foods to eat at particular times of the day'}
   ]
}

const projectSlice=createSlice({
    name:'project',
    initialState:initialState,
    reducers:{
      addnewproject(state,action){
          state.projects.unshift(action.payload)
      }
    }
})


export const projectActions=projectSlice.actions


export default projectSlice.reducer