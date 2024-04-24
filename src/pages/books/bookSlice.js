import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    books:[],
    selectedBook:{},
    borrow:[]
}

const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
       
       
        getBooksSuccess:(state, {payload})=>{
            if(!state.books.length && !payload.length){
                return
            }
            
            state.books = payload
        },
        setSelectedBook:(state,{payload})=>{
            state.selectedBook = state.books.find(item=>item.id === payload)
            
        },
        setBorrow:(state, {payload})=>{
            state.borrow = payload
        }
    }
})

const {reducer, actions} = bookSlice

export const {getBooksSuccess, setSelectedBook, setBorrow} = actions

export default reducer