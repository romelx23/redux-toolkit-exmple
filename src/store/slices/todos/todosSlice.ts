import { createSlice } from "@reduxjs/toolkit"

const initialState={
    count:0
}

export const todosSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.count++
        // },
        // decrement:(state)=>{
        //     state.count--
        // },
        // incremenByAumount:(state,action)=>{
        //     state.count+=action.payload
        // }
    }
})

// export const {increment,decrement,incremenByAumount} = todosSlice.actions

export default todosSlice.reducer