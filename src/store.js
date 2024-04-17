import {  configureStore } from "@reduxjs/toolkit";
import userReducer  from "./pages/signup-signin/userSlice";
const store = configureStore({
    reducer:{
       user: userReducer,

    }

})

export default store