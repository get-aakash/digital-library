import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    borrow:[],
}

const borrowSlice = createSlice({
    name:"borrow",
    initialState,
    reducers:{
       
       
        setBorrow:(state, {payload})=>{
            
            
            state.borrow = payload
        },
       
    }
})

const {reducer, actions} = borrowSlice

export const {setBorrow} = actions

export default reducer