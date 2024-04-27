import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showModal: false
}
const systemSLice = createSlice({
    name: "system",
    initialState,
    reducers: {
        setModal: (state, { payload }) => {
            state.showModal = payload
        }
    }
})

const {reducer,actions} = systemSLice
export const {setModal} = actions

export default reducer