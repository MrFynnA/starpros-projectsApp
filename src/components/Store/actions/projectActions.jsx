import { projectActions } from "../slices/projectSlice"


export const addProjectionAction=(project)=>{
return (dispatch,getState)=>{
//async  operation to database
 dispatch(projectActions.addnewproject(project))
}
}
