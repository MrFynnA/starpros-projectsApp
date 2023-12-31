import { createSlice } from "@reduxjs/toolkit";


const visibiltySlice=createSlice({

    name:'visibility',
    initialState:{
        mobileMenu:false
    },
    reducers:{
        onShowMobileMenu(state){
            state.mobileMenu=!state.mobileMenu
        },
        onCloseMobileMenu(state){
            state.mobileMenu=false
        },
    }
})


export const visibilityAction=visibiltySlice.actions
export default visibiltySlice.reducer