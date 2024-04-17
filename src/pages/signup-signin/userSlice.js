import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {}
}
const userSLice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload
        }
    }
})

const {reducer,actions} = userSLice
export const {setUser} = actions

export default reducer