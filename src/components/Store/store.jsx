import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import projectSlice from "./slices/projectSlice";
import visibilitySlice from "./slices/visibilitySlice";










export const store=configureStore({
    reducer:{
          auth:authReducer,
          project:projectSlice,
          visibility:visibilitySlice
    }
})