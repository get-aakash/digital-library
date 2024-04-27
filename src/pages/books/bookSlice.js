import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    books:[],
    selectedBook:{},
    reviews:[]
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
        setReviews:(state,{payload})=>{
            state.reviews =  payload
            
        },
       
    }
})

const {reducer, actions} = bookSlice

export const {getBooksSuccess, setSelectedBook, setReviews} = actions

export default reducer