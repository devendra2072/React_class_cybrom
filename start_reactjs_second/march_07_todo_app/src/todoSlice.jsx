import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name:"mytodo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,action)=>{
            console.log(action.payload)
            state.task.push(action.payload);
        }
        // deleteTask:(state,action)=>{
        //     state.task = state.task.filter((item,index)=>index!==action.payload);
        // }
    }
})

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;